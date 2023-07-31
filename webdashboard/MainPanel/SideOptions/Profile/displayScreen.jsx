import React from "react";
import Phy from "./Phy";
import Chem from "./Chem";
import History from "./History";
import Math from "./Math";
import English from "./English";
import Urdu from "./Urdu";

export default function DisplayScreen(props) {
  const current_Item = localStorage.getItem("tag");
  console.log(current_Item);
  console.log(current_Item);
  localStorage.setItem(
    "tag",
    props.Display_Content === " " ? current_Item : props.Display_Content
  );
  console.log(typeof props.Display_Content);
  var tag_name = localStorage.getItem("tag");
  console.log("ei;");

  const All_tags = [
    { elem: <Phy key="01" ShowModalFunc={props.ShowModalFunc} />, name: "Phy" },
    {
      elem: <Chem key="02" ShowModalFunc={props.ShowModalFunc} />,
      name: "Chem",
    },
    {
      elem: <History key="03" ShowModalFunc={props.ShowModalFunc} />,
      name: "History",
    },
    {
      elem: <Math key="04" ShowModalFunc={props.ShowModalFunc} />,
      name: "Math",
    },
    {
      elem: <English key="05" ShowModalFunc={props.ShowModalFunc} />,
      name: "English",
    },
    {
      elem: <Urdu key="06" ShowModalFunc={props.ShowModalFunc} />,
      name: "Urdu",
    },
  ];

  var Display_Tag = " ";
  for (let i = 0; i < All_tags.length; i++) {
    const tagName = All_tags[i].name;

    if (tagName === tag_name) {
      Display_Tag = All_tags[i].elem;
      return Display_Tag;
    }
  }

  return (
    <div className=" border-1 relative mx-auto h-screen w-11/12 rounded border-zinc-400 bg-white">
      <div className="-z-5 absolute left-1/2 top-1/2  h-16 w-16 "></div>
      {Display_Tag}
    </div>
  );
}
