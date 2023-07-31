import React from "react";
import { GiChemicalDrop } from "react-icons/gi";
import { BiAtom } from "react-icons/bi";
import { GrHistory } from "react-icons/gr";
import { TbMathFunction } from "react-icons/tb";
import { TbAbc } from "react-icons/tb";

export default function ProfileBar(props) {
  const Radio_Button = " w-full h-full  opacity-0 ";
  const cover__Button =
    " w-1/6  hover:backdrop-brightness-75 text-sm text-center ";
  const icon = " h-1/2 w-1/2 mx-auto mt-2";

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    props.Set_Sub_Type((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const btn_array = [
    <GiChemicalDrop key="1a;dlkfj" className={icon} />,
    <BiAtom key="2a'dpf'vpk" className={icon} />,
    <GrHistory key="3arifofdja" className={icon} />,
    <TbMathFunction key="4dsiofj;s;io" className={icon} />,
    <TbAbc key="5aso'difjr" className={icon} />,
    <div key="5q;kf0" className="  mt-2 text-xl">
      ا ب پ
    </div>,
  ];
  const Subjects = ["Chem", "Phy", "History", "Math", "English", "Urdu"];

  const Maped_Array = btn_array.map((x, k) => {
    return (
      <div key={k} className={cover__Button + " invert"}>
        <input
          className={Radio_Button}
          type="radio"
          id={Subjects[k]}
          name="Subject"
          value={Subjects[k]}
          checked={props.Sub_Type.Subject === Subjects[k]}
          onChange={handleChange}
        />
        <label className="-z-5 -mt-16">
          {x}
          {Subjects[k]}
        </label>
      </div>
    );
  });
  return <>{Maped_Array}</>;
}
