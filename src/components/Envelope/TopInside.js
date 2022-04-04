import React from "react"

const TopInside = ({href, className, color}) => {
  return(

    <svg viewBox="0 0 40 25.84" xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill={color} stroke="none" strokeWidth="0.5"
        d="M 35,25.84
           a 5,5 0 0 0 -1,-3
           l -12, -17
           a 2.8,2.8 0 0 0 -4,0
           l -12, 17
           a 5,5 0 0 0 -1,3
           h -5
           a 5,5 0 0 1 1,-3
           l 17, -22
           a 2.8,2.8 0 0 1 4,0
           l 17, 22
           a 5,5 0 0 1 1,3
           h -5
          "
      />

       <defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="20" height="28"
          viewBox="0 0 20 20">
          <image href={href} x="0" y="0" width="45" height="30"/>
        </pattern>
      </defs>

      <path fill="url(#img1)" stroke="none"
        d="M 35,25.84
         a 5,5 0 0 0 -1,-3
         l -12, -17
         a 2.8,2.8 0 0 0 -4,0
         l -12, 17
         a 5,5 0 0 0 -1,3
         h 30
         a 5,5 0 0 0 0,0
        "
      />
    </svg>

  );
}

export default TopInside;