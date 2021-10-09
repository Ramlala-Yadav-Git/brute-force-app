import React from "react";
import { Navbar } from "./navbar/navabar";
import { Footer } from "./Footer/Footer";
import Styled from "styled-components";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Navbar />
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
