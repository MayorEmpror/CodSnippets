// comming soon
import React from "react";
import DisplayScreen from "./displayScreen";
import Modal from "../YourSnippets/Modal";
import ProfileBar from "./ProfileBar";
import ModalContent from "./ModalContent";
export default function Profile(props) {
  const [ShowModal, SetShowModal] = React.useState(false);
  const [Sub_Type, Set_Sub_Type] = React.useState({
    Subject: " ",
  });
  function ShowUrlBox() {
    SetShowModal((preVal) => {
      console.log(!preVal);
      return !preVal;
    });
  }
  function Cross() {
    SetShowModal(false);
  }
  console.log(Sub_Type.Subject);
  const Subject_tab =
    " bg-zinc-900/50 border-1 rounded border-zinc-400 backdrop-blur-sm mx-auto absolute inset-x-0 bottom-0 h-16 w-1/4 mb-4 box shadow-2xl rounded-md flex flex-row ";
  const data_Area =
    "bg-slate-200 w-full  backdrop-blur  h-screen backdrop-contrast-75 backdrop-brightness-50 relative ";
  const Top_Tab =
    " w-full  backdrop-blur opacity-10 h-14 backdrop-contrast-75 backdrop-brightness-50 ";

  return (
    <div
      className={`
      classCov
       w-${
         props.mobile ? "full" : "full"
       }  flex h-screen flex-col  overflow-hidden sepia `}
    >
      <div className={Top_Tab}></div>
      <div className={data_Area}>
        <DisplayScreen
          Display_Content={Sub_Type.Subject}
          ShowModalFunc={ShowUrlBox}
        />
        <div className={Subject_tab}>
          <ProfileBar Sub_Type={Sub_Type} Set_Sub_Type={Set_Sub_Type} />
          {ShowModal ? (
            <Modal>
              <ModalContent
                cross={Cross}
                // NewFile={NewFile}
                //Get_Selected_File_Data={Get_Selected_File_Data}
              />
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
}
