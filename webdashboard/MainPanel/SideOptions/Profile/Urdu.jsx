import React from "react";

export default function Udru(props) {
  //const placeHolder = " h-1/4 w-1/4 mx-auto mt-80";
  const placeHolderText = "w-1/6 h-1/6 text-3xl text-center mx-auto";
  return (
    <>
      <div key="5q;kf0" className=" mx-auto mt-80 h-1/6 text-center text-8xl">
        ا ب پ
      </div>
      <div className={placeHolderText}>
        {" "}
        <button
          className="rounded-lg bg-zinc-900/50 px-2 shadow  backdrop-blur hover:shadow-2xl"
          onClick={() => props.ShowModalFunc()}
        >
          {" "}
          Add Notes
        </button>{" "}
      </div>
    </>
  );
}
