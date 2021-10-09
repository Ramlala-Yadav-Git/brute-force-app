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
      <LowerSection />
      {/* <img style={{ width: "50%", height: "300px" }} src="https://4.bp.blogspot.com/-qJx-nLmNwz4/VwiGNrFoB3I/AAAAAAAACMw/KM9sla3pAaImQIsBjnwl3ec7YGF77hCtg/s1600/HHH%2BBook%2BDay%2BBanner.jpg" alt="" /> */}
      <Footer />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = Styled.div`
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}

`
