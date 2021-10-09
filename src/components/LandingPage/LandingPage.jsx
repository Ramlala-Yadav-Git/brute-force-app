import React from "react";
import { Navbar } from "./navbar/navabar";
import { Footer } from "./Footer/Footer";
import Styled from "styled-components";
import { MiddleSection } from "./section/MiddleSection";
import { LowerSection } from "./section/LowerSection";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Navbar />
      <MiddleSection />
      {/* border-bottom:1px solid  #ecaa2f6e; */}
      <div style={{ margin: "auto", display: "flex", justifyContent: "space-evenly", marginTop: "50px", borderBottom: "1px solid  #ecaa2f6e", paddingBottom: "50px" }}>

        <img style={{ width: "40%", height: "350px", borderRadius: "5px" }} src="https://i.pinimg.com/originals/de/df/2a/dedf2a28629d3b144884a23c07238298.gif" alt="" />
        <img style={{ width: "40%", height: "350px", borderRadius: "5px" }} src="https://media3.giphy.com/media/hUA5JLuHW7kTDQMy7f/giphy.gif" alt="" />
      </div>
      <LowerSection />
      <Footer />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = Styled.div`


`
