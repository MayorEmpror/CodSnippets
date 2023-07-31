// comming soon
import React from "react";
//import { ImSpinner6 } from "react-icons/im";
import { Circles } from "react-loader-spinner";
export default function Chats(props) {
  return (
    //coming soon
    <div
      className={`bg-slate-100 w-${
        props.mobile ? "full" : "full"
      }  flex h-screen flex-col overflow-hidden sepia`}
    >
      {/* <div style={{animation:"spin 1s linear infinite"}}>
      <ImSpinner6 className="-z-5 absolute left-1/2 top-1/2  w-16 h-16 "/>
      </div> */}
      <div className="-z-5 absolute left-1/2 top-1/2  h-screen w-16 sepia">
        <Circles
          height="80"
          width="80"
          color="red"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      `{" "}
      <iframe
        src="https://chat.openai.com/"
        title="chatGPT"
        className="h-screen w-full sepia "
      ></iframe>
      `
    </div>
  );
}
