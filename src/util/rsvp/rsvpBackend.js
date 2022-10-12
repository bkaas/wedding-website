// Handle Backend RSVP
require("dotenv").config({path: "../../../.env"});
const { MyGoogleApi } = require("../myGoogleApi.js");

// RSVP information google sheet
const SHEET_NAME = "Individuals";

// Google sheet column mapping
// Convert the columns to char via: charCodeAt()
const COLS = {
  FIRST_NAME: 'B',
  LAST_NAME: 'C',
  RSVP: 'D',
  DIET_RESTRICT: 'E',
  GROUPING: 'F',
}
// Get the min and max columns
const colNums = Object.values(COLS).map((vals) => vals.charCodeAt());
const COL_RANGE = [String.fromCharCode(Math.min(...colNums)),
  String.fromCharCode(Math.max(...colNums))];

// First data row and last data row in the google sheet
const ROW_RANGE = [5, 190];

// Sheet ranges
const RANGE = {
  ALLGUESTS: `'${SHEET_NAME}'!${COL_RANGE[0]}${ROW_RANGE[0]}:${COL_RANGE[1]}${ROW_RANGE[1]}`,
  singleCell: function(row, col) {
    return `'${SHEET_NAME}'!${col}${row}:${col}${row + 1}`
  },
}

class Rsvp {

  constructor() {
    this.getInviteList = this.getInviteList.bind(this);
    this.findGuest = this.findGuest.bind(this);
    this.getGrouping = this.getGrouping.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  // Get the invite list
  async getInviteList() {
    this.gapi = new MyGoogleApi();
    try {
      await this.gapi.authorize();
    } catch (err) {
      throw new Error(err);
    }
    this.gapi.connect();
    const resp = await this.gapi.readSheet(process.env.SHEET_ID, RANGE.ALLGUESTS);
    this.inviteList = resp.values;
  }

  // findGuest
  // Finds the rows in the invite list that match the entered name
  // Concatenates the first and last names in the master list
  // Splits the entered name by spaces and checks each of those names
  // against the master via an "and" operation
  // Returns the rows in the guest list array matching the search
  findGuest(guestName) {
    // Split the input name by spaces
    const inNames = guestName.split(" ");

    let searchResult = this.inviteList;
    let fullName, nameRegex;
    const firstNameIdx = COLS.FIRST_NAME.charCodeAt() - COL_RANGE[0].charCodeAt();
    const lastNameIdx = COLS.LAST_NAME.charCodeAt() - COL_RANGE[0].charCodeAt();
    for (const name of inNames) {

      // Debug print the search results if they are small
      if (searchResult.length < 15) {
        console.log(`Search Result: ${searchResult}, name: ${name}`)
      }
      else {
        console.log(`Search Result Length: ${searchResult.length}, name: ${name}`)
      }

      // Generate a case insensitive regular expression from the names
      nameRegex = new RegExp(name, "i");

      // Filter the guest list based on the guestName
      searchResult = searchResult.filter((listRow) => {

        // If the row is empty, skip it
        if (!listRow[0]) {
          return false
        }
        else {
          // Join the first and last names of the guest list and trim
          // the leading and trailing whitespace
          fullName = listRow[firstNameIdx].concat(" ", listRow[lastNameIdx]).trim();
          return !!fullName.match(nameRegex);
        }
      })
    }

    return searchResult;

  }


  // Get grouping
  // Given the result of the findGuest, return the appropriate
  // group of guests associated with that result.
  // guestData is an array of arrays with data in the order of
  // the COLS array at the top of this script
  // Returns the group number or:
  //  -1 = empty search results (should ideally be handled elsewhere)
  //  -2 = more than one group number in the search result
  //
  // guestData is an array of objects with the following props:
  //   name, sheetRow, rsvp, diet
  // sheetRow is the row corresponding to that guest in the google sheet
  getGrouping(guestData) {

    // This would ideally be handled on the search result before
    // passing the search result to this function
    if (guestData.length === 0) return -1;

    // Get the grouping column relative position
    const groupColIdx = COLS.GROUPING.charCodeAt() - COL_RANGE[0].charCodeAt();
    // Assemble group ids to an array of numbers
    const foundGroupId = guestData.map((row) => +row[groupColIdx]);
    // Check all group ids are the same
    const groupId = Math.max(...foundGroupId);
    if (groupId !== Math.min(...foundGroupId)) {
      return -2;
    }

    // Find all the rows with the groupId
    // Also return the sheet row sheetRow of each found row/guest
    let sheetRow = [];
    const grouping = this.inviteList.filter((row, ind) => {
      if (row[groupColIdx] === groupId.toString()) {
        sheetRow.push(ind + ROW_RANGE[0]);
        return true;
      } else {
        return false;
      }
    })

    // Create an object for working with the rsvp, row and guest name
    // Column idx for the name and the rsvp
    const iFn = COLS.FIRST_NAME.charCodeAt() - COL_RANGE[0].charCodeAt();
    const iLn = COLS.LAST_NAME.charCodeAt() - COL_RANGE[0].charCodeAt();
    const iRsvp = COLS.RSVP.charCodeAt() - COL_RANGE[0].charCodeAt();
    const iDiet = COLS.DIET_RESTRICT.charCodeAt() - COL_RANGE[0].charCodeAt();
    const guestInfo = grouping.map((guest, ind) => {
      return ({
        name: `${guest[iFn]} ${guest[iLn]}`,
        sheetRow: sheetRow[ind],
        rsvp: guest[iRsvp],
        diet: guest[iDiet],
      });
    })

    return guestInfo;

  } // getGrouping()

  // Updates each of the input sheetRow with its associated rsvp
  // and dietary retriction response
  // userResponse: array of objects with the following props
  //   sheetRow, rsvp, diet
  async handleResponse(userResponse) {

    userResponse.forEach((userData) => {

      const row = userData.sheetRow || (ROW_RANGE[0] - 1);
      let writeRange;
      if (row >= ROW_RANGE[0] && row <= ROW_RANGE[1]) {
        // debugger;
        // Write the RSVP response
        writeRange = RANGE.singleCell(row, COLS.RSVP);
        this.gapi.writeSheet(process.env.SHEET_ID, writeRange, [[userData.rsvp]]);

        // Write the dietary restriction response
        writeRange = RANGE.singleCell(row, COLS.DIET_RESTRICT);
        this.gapi.writeSheet(process.env.SHEET_ID, writeRange, [[userData.diet]]);
      }

    })

  }

} // Rsvp class

let rb, guestInfo;
(async () => {
  try {
    rb = new Rsvp();
    await rb.getInviteList();
    // console.log(rb.inviteList)

    let guestSearchResult = rb.findGuest("Nathan Leon");
    console.log(guestSearchResult);
    guestInfo = rb.getGrouping(guestSearchResult);
    console.log(guestInfo);

    await rb.handleResponse([{sheetRow: 5, rsvp: "yes", diet: "fish"}])
    // debugger;
  } catch (err) {
    throw new Error(err);
  }
})();

// Flow
// Enter a name (pass it to findGuest())
//
// If the result has length zero
//   prompt the user the name is incorrect / missing
// Else
//   Pass the result to getGrouping()
//
// If getGrouping returns -2, the entered name returns too many groups
// Otherwise, return a list of names, and their associated row number?

// rb.handleResponse([{sheetRow: 5, rsvp: "yes", diet: "fish"}])