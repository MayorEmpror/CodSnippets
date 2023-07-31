import React from "react";
import { TbBracketsContainStart } from "react-icons/tb";
import { GiMountaintop } from "react-icons/gi";
//import {RxCross2} from "react-icons/rx"
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
export default function LandingPage(props) {
  const BACKDROP = " bg-gradient-to-b from-zinc-900 to-zinc-800 sepia";
  const Img = "Img";
  const Header = "text-white relative mx-auto flex flex-row  ";

  const close_Button = "rounded-full bg-red-700 w-8 h-8 ml-1 mt-1";
  const buttonStyles = " relative mx-auto invert ";

  return (
    //coming soon

    <div
      className={
        ` 
        classCov
        w-${props.mobile ? "full" : "full"}  flex h-screen flex-col ` + BACKDROP
      }
    >
      <div className={Header}>
        <div>
          <hr />
          <div className="flex flex-row">
            <TbBracketsContainStart className="h-1/4 w-1/4" />
            <h1 className="font-source">Code Snippet</h1>
          </div>
          <hr />
        </div>
      </div>

      <div className="main-container flex flex-row">
        <div className="relative  left-1 w-1/2 border-r-4 border-slate-300 px-4">
          <div className="w-1/1 flex flex-row">
            <hr className="h-1 w-1  rotate-90 text-white" />
            <div className="ml-5  text-white">
              <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                {" "}
                <h1 className="relative text-center text-slate-400">
                  Who we are
                </h1>
              </a>
              <h4 className="relative mx-auto ml-2 justify-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis obcaecati at asperiores vero ab recusandae animi
                ducimus tempore? Nobis fugiat temporibus eligendi illo omnis
                fugit rem nam ipsa eius. Enim est quae laboriosam, eligendi
                aperiam tenetur, mollitia, facilis animi obcaecati esse corporis
                distinctio omnis quia iure ex quas molestiae ab?
              </h4>
            </div>
            <div className="ml-5  text-white">
              <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                {" "}
                <h1 className="relative text-center text-slate-400">About</h1>
              </a>
              <h4 className="relative mx-auto ml-2 justify-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis obcaecati at asperiores vero ab recusandae animi
                ducimus tempore? Nobis fugiat temporibus eligendi illo omnis
                fugit rem nam ipsa eius. Enim est quae laboriosam, eligendi
                aperiam tenetur, mollitia, facilis animi obcaecati esse corporis
                distinctio omnis quia iure ex quas molestiae ab?
              </h4>
            </div>
          </div>

          <div className="w-2/2  relative top-2 ml-5 text-white">
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              {" "}
              <h1 className="relative text-center text-slate-400">
                How to use
              </h1>
            </a>
            <h4 className="relative mx-auto ml-2 justify-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              obcaecati at asperiores vero ab recusandae animi ducimus tempore?
              Nobis fugiat temporibus eligendi illo omnis fugit rem nam ipsa
              eius. Enim est quae laboriosam, eligendi aperiam tenetur,
              mollitia, facilis animi obcaecati esse corporis distinctio omnis
              quia iure ex quas molestiae ab?
            </h4>
          </div>
        </div>
        <div className="relative left-28 flex h-full w-1/3 flex-col">
          <GiMountaintop className="relative top-1/3 mx-auto h-1/3 w-1/3 invert" />

          <span className={"relative top-60 mx-auto flex flex-row"}>
            <button className={close_Button} onClick={props.cross}>
              {" "}
              <AiFillInstagram className={buttonStyles} />
            </button>
            <button className={close_Button}>
              <BsFacebook className={buttonStyles} />
            </button>
            <button className={close_Button}>
              <IoLogoWhatsapp className={buttonStyles} />
            </button>
          </span>
          <h6 className="ACME text-white">ACME</h6>
        </div>
      </div>

      <div className={Img}></div>
    </div>
  );
}
