import { Link } from "react-router-dom"
import Styled from "styled-components"

export const Navbar = () => {




    return <>
        <NavbarWrapper>
            <div className="navLogo">
                <Link to="/">
                    {/* <img src="https://www.2masterit.com/img/Books_Academic.gif" alt="logo" /> */}
                </Link>
                <div>
                    <h2>
                        <span className="old"> O</span>ld<span className="book">B</span>ook.com</h2>
                </div>
            </div>
            <div className="endContent">
                <div className="navInput">
                    <input type="text" name="search" id="search" placeholder="Search Books By author here.." />
                </div>
                <div className="navLinks">
                    <h5>Home</h5>
                </div>
                <div className="navLinks">
                    <h5>About</h5>
                </div>
                <div className="navLinks">
                    {/* <Link to="/chat">
                        <i className="far fa-comment-dots"></i>
                    </Link> */}
                </div>
                <div className="navLinks">
                    {/* <Link to="/video">
                        <i className="fas fa-video"></i>
                    </Link> */}
                </div>
                <div className="userPic">
                    <img src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg" alt="pic" />
                </div>

            </div>

        </NavbarWrapper>
    </>
}

const NavbarWrapper = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:#FFFFFF;
padding:10px;
color:##232F3E;
border-bottom:1px solid #6f47dfab;

.old{
    color:#e79804;
    font-family:cursive;
}
.book{
    color:#4004e7;
    font-family:cursive;

}

& >.navLogo {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
    border-radius:5px;
    padding:5px;
}
& >.navLogo h2{
    color:#232F3E;
    border-radius:5px;

}
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

& > .endContent .navInput input{
    border:none;
    padding:5px;
    border-radius:3px;
    font-size:15px;
    outline:none;
    border:1px solid #ecaa2fb2;
}
& > .endContent  .navLinks i{
    color:#232F3E;
    cursor:pointer;
    font-size:22px;
}
& > .endContent  .navLinks h5{
    color:#232F3E;
    cursor:pointer;
    font-size:18px;
}
& > .endContent .userPic img{
   width:50px;
    height:50px;
    border-radius:50%;
}

`