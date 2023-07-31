import React from "react";
import { GiMountaintop } from "react-icons/gi";
export default function body() {
  const bg_color = "";
  return (
    <div style={{ height: "91%" }} className="flex flex-row ">
      <div className="h-full w-1/2  ">
        <div
          className="glassPlate
       relative h-full w-2/3 
      bg-gradient-to-r from-violet-900/100 to-blue-500/50
       "
        >
          <div>
            {" "}
            <h1
              className="Eight_ninety relative top-10
      text-center font-mono text-4xl text-white/40 md:text-5xl"
            >
              Our proposition <hr />
            </h1>
            <h1
              className="Eight_ninety six_thirty  relative w-1/2 rotate-90 text-center font-serif text-8xl text-indigo-400/50 md:text-7xl  "
              style={{ top: "17vh", left: "3.5vw" }}
            >
              Contection
            </h1>
          </div>
        </div>
        <div
          className="h Main-Heading relative z-10  ml-10 h-1/4 text-left text-9xl    "
          style={{ top: "-73vh", left: "21vw", width: "99%", height: "58%" }}
        >
          ACME <p>PRESENTS</p> <p> SNIPPETS</p>
        </div>
      </div>

      <div className="h-full w-1/2  ">
        <div
          className="logo-box   relative z-10 mx-auto   h-1/3 w-1/3 flex-col   "
          style={{ top: "28vh" }}
        >
          <div className="mx-auto   h-20 w-20">
            <GiMountaintop className="h-20 w-20 invert " />
          </div>
          <button
            onMouseDown={() => {
              bg_color;
            }}
            className="relative z-10 mx-auto mt-3 h-12 w-48 border border-slate-100/50 text-center text-white backdrop-blur-sm hover:bg-white/25 active:bg-white/50"
          >
            GO TO PRODUCT
          </button>
          <div className="add_content  mx-auto mt-4 h-1/2 w-full text-center text-xl  text-yellow-200/75 ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            perspiciatis dolorem provident enim quam minus?
          </div>
        </div>

        <div className="t -z-2 bg--400/25 relative flex  h-1/4 w-1/3 flex-row backdrop-blur-md">
          <div className="relative top-4  h-5/6 w-1/4 border-r-2 border-slate-100/25  text-center text-white">
            {" "}
            <h1 className="text-center text-white">Text</h1>Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia, expedita?
          </div>
          <div className="relative top-4  h-5/6 w-1/4 border-r-2 border-slate-100/25  text-center text-white">
            {" "}
            <h1 className="text-center text-white">Text</h1>Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Consectetur, voluptatibus.
          </div>
          <div className="relative top-4  h-5/6 w-1/4 border-r-2 border-slate-100/25  text-center text-white">
            {" "}
            <h1 className="text-center text-white">Text</h1> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facilis, dolore?
          </div>
          <div className="relative top-4  h-5/6 w-1/4 text-center text-white">
            <h1 className="text-center text-white">text</h1>Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Omnis, sint?
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*
   <div className="bg-blue-200 w-1/2 h-1/2 -z-5 -top-28 mt-8 relative">
    </div>


        position: relative;
    left: 31vw;
    top: 27vh;
}
  <div className="body  h-full w-full -z-5 relative -top-28 ">
<div className="Main-Heading w-1/2 h-full bg-slate-400/50 backdrop-blur-sm"></div>
<div className="backdrop-blur border-2 border-white/25 w-1/4 h-1/2 relative left-36 -top-3/4 "></div>
</div> 
    top: -2rem;
    height: 53rem;
*/
}
