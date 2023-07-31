import React from "react";
import { RxCross2 } from "react-icons/rx";
export default function ModalContent(props) {
  //const file_Style = `  w-20 h-20 relative mt-1 ml-3 bg-cover bg-no-repeat  bg-[url('../images/Photographs/Vista.jpg')]  rounded-lg  `;
  const Subject_DE_Prompt =
    " bg-cover bg-no-repeat  bg-[url('../images/Photographs/Hardisk.jpg')] w-20 h-20 relative top-1/4 left-8";
  const Modal_button_Styles = "rounded-full bg-slate-600 w-4 h-4 ml-1  mt-1";
  const Modal_Styles =
    "flex flex-row justify-center items-center w-full h-full z-1 absolute";
  const Modal_glass_Back =
    "border border-solid border-slate-100 rounded-lg  w-1/2 h-1/4 z-2 absolute backdrop-blur-xl flex flex-row  bg-zinc-500/25";
  const File_Show_Case =
    "flex flex-col bg-zinc-900 w-5/6 ml-auto h-full text-white rounded-xl";
  const Apple_UI_buttons_span =
    "flex flex-row  bg-zinc-700/50 backdrop-blur-xl h-14";
  const close_Button = "rounded-full bg-red-700 w-4 h-4 ml-1 mt-1";
  const cLOSE_lOGO =
    "text-transparent transition duration-75 ease-out hover:ease-in hover:text-black";
  const Work_area =
    "w-full h-full text-white  grid grid-cols-7 grid-rows-5 place-items-center";
  const bottom_buttons_area = "h-12 flex flex-row relative -top-2";
  //const New_File_Button = "bg-zinc-600 mr-auto w-24 h-6 mt-1 rounded ml-1";
  const Cancle_Button = "bg-zinc-600 ml-1 mr-1 w-24 h-6 mt-1 rounded";
  const Open_Button =
    "bg-zinc-600 ml-1 w-24 mr-1 h-6 mt-1 rounded transition duration-75 ease-out hover:ease-in hover:bg-gradient-to-b from-pink-400 to-purple-500";
  const blur_curtain =
    " w-full h-full absolute   justify-center items-center backdrop-blur-sm bg-black/20";
  const text_feild =
    "relative mx-auto -top-26 w-11/12 rounded-lg h-1/6 text-zinc-900";
  const Label_URL = "relative left-7";
  return (
    <div className={Modal_Styles}>
      <div className={Modal_glass_Back} style={{ marginTop: "-13rem" }}>
        <div className={Subject_DE_Prompt}></div>
        <div className={File_Show_Case}>
          <span className={Apple_UI_buttons_span}>
            <button className={close_Button} onClick={props.cross}>
              {" "}
              <RxCross2 className={cLOSE_lOGO} />
            </button>
            <div className={Modal_button_Styles}></div>
            <div className={Modal_button_Styles}></div>
          </span>

          <div className={Work_area}></div>
          <label htmlFor="Enter Url" className={Label_URL}>
            {" "}
            Enter URL of Notes
          </label>
          <input type="text" className={text_feild} />
          <hr />
          <div className={bottom_buttons_area}>
            <button className={Cancle_Button} onClick={props.cross}>
              Cancel
            </button>
            <button
              className={Open_Button}
              onClick={() => {
                alert("work'in on it");
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div className={blur_curtain}></div>
    </div>
  );
}
