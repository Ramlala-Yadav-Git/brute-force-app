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
      <div>

        <img style={{ width: "50%", height: "350px", borderRadius: "5px" }} src="https://i.pinimg.com/originals/de/df/2a/dedf2a28629d3b144884a23c07238298.gif" alt="" />
        <img style={{ width: "50%", height: "350px", borderRadius: "5px" }} src="https://lh3.googleusercontent.com/proxy/xWiohvz-a-j7QFFY56EkPIiekXPWwmvHVjLQ-Ubop-D1bhMSZpefKxYXLGcLxIVphTD3_JD7nCxL721zki2pm5Nv0nojJ7tIypsRGLkppT0Gu_4PUmSD" alt="" />
      </div>
      <LowerSection />
      <Footer />
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = Styled.div`


`
