import React from "react";
import Iframe from "./iFrame";
export default function Phy() {
  return (
    <>
      Phy comming soon
      {/* <iframe
        src="https://www.slideshare.net/RamC3/physics-notes-solved-numerical-of-physics-first-year"
        title="chatGPT"
        className="h-screen w-full sepia "
      ></iframe> */}
      <Iframe
        url={
          "https://www.slideshare.net/RamC3/physics-notes-solved-numerical-of-physics-first-year"
        }
        Key={"Phy"}
        className="h-screen w-full sepia "
      ></Iframe>
    </>
  );
}
