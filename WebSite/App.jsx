//import Navbar from "./WebNavbar";
//import Footer from "./WebFooter";
//import Body from "./ContentBody";
import React from "react";
// eslint-disable-next-line no-unused-vars
import Portfolio from "../Portfolio/Portfolio";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const name = "hello world";
    return (
      // <div className="h-full w-full classCov bg-[url('../images/Photographs/digitalization.jpeg')] bg-cover bg-no-repeat">
      //   <Navbar />
      //   <Body />
      //   <Footer />
      // </div>
      <>
        <Portfolio />
      </>
    );
  }
}
