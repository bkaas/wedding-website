// Abstract the google API calls (email and sheets) to a class
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

require("dotenv").config();

// Ref: https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
// Ref: https://morioh.com/p/1313d7785668

class MyGoogleApi {

  // Private instance fields
  #oauth2Client;
  #accessToken; // Used with nodemailer
  #sheet; // Google sheets instance
  #sheetId;

  constructor(sheetId) {
    this.#sheetId = sheetId;
  }

  /**
   * Setup the OAuth2 client permissions
   */
  async authorize() {

    this.#oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    this.#oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });

    this.#accessToken = await new Promise((resolve, reject) => {
      this.#oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      })
    });
  }


  /*
   * Create a google sheets instance
   */
  connect() {
    // Google sheets instance
    this.#sheet = google.sheets({ version: "v4", auth: this.#oauth2Client });
  }

  /*
   * Read data from the spreadsheet.
   * Returns an object with properties range (string), majorDimension
   * (Ex: 'ROWS') and values (array of arrays)
   * @param {string} cell range in the google sheets format: "sheetName!A1:B7"
   */
  async readSheet(spreadsheetId, range) {

    // Read from the spreadsheet
    let sheetData;
    try {
      sheetData = await this.#sheet.spreadsheets.values.get({
        spreadsheetId, // spreadsheet id
        range, //range of cells to read from.
      })
    }
    catch (err) {
      console.log(err);
    }

    return sheetData.data;

  }

  /**
   * Send an email through nodemailer using the environment
   * variable information.
   * @param {Object} emailOptions object with fields from, to,
   * subject, html etc.
   */
  async sendEmail(emailOptions) {

    const emailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          accessToken: this.#accessToken,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
        }
    });

    try {
      await emailTransporter.sendMail(emailOptions);
    }
    catch (err) {
      console.error(err);
    }

  }

}

module.exports.MyGoogleApi = MyGoogleApi;

// Test read from sheet
/*
(async () => {
  const gapi = new MyGoogleApi();
  await gapi.authorize();
  gapi.connect();
  const data = await gapi.readSheet(process.env.SHEET_ID, "'Card Invites'!A2:C3");

  console.log(data);
})();
*/

// Test email
/*
(async () => {
  const gapi = new MyGoogleApi();
  await gapi.authorize();
  gapi.connect();
  await gapi.sendEmail({
    from: process.env.EMAIL,
    to: process.env.EMAIL_DST,
    subject: "JS Test",
    text: "Test",
  });
})();
*/

// Sample Sheet Result
/*
{
  range: "'Card Invites'!A2:C3",
  majorDimension: 'ROWS',
  values: [
    [
      '1',
      'nameString',
      'emailString'
    ],
    [ '2', 'nameString' ]
  ]
}
*/