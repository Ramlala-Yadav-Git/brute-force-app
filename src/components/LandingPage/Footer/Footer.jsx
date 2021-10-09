import { Link } from "react-router-dom"
import Styled from "styled-components"

export const Footer = () => {




    return <>

        <FooterWrapper>
            <div className="footerName">
                <h2>OldBook.com</h2>
            </div>
            <div className="endContent">
                <div className="footerDoc">
                    <p>@oldbooks.com</p>
                </div>
                <div className="links">
                    <i className="fa fa-facebook"></i>
                </div>
                <div className="links">
                    <i className="fa fa-twitter"></i>
                </div>
                <div className="links">

                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="userPic">
                </div>

            </div>

        </FooterWrapper>
    </>
}

const FooterWrapper = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:#090022;
padding:10px;
 /* position:absolute;  */
/* bottom:0px;  */
width:100%;
padding-left:10px;


& >.navLogo img{
    width:50px;
    height:50px;
    border-radius:50%;
}

& > .endContent{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:20px;
    margin-right:50px;
}

& >  .footerName h2 {
    color:white;
}
& > .endContent .footerDoc{
    color:white;
}
& > .endContent  .links {
    color: #fff;
    cursor:pointer;
    font-size:18px;
}
& > .endContent .userPic img{
   width:50px;
    height:50px;
    border-radius:50%;
}

`