import React from "react";
import { GrHistory } from "react-icons/gr";
export default function History(props) {
  const placeHolder = " h-1/4 w-1/4 mx-auto mt-80";
  const placeHolderText = "w-1/6 h-1/6 text-3xl text-center mx-auto";
  return (
    <>
      <GrHistory key="1a;dlkfj" className={placeHolder} />
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
