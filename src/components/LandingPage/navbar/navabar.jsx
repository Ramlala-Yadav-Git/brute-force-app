import { Link } from "react-router-dom"
import Styled from "styled-components"

export const Navbar = () => {




    return <>
        <NavbarWrapper>
            <div className="navLogo">
                <Link to="/">
                    <img src="https://64.media.tumblr.com/5c162d7ae5400a2b1da1879c1014b80a/fb1619cee991c98f-71/s500x750/24445ef6d315b90835e58312046de93844e608fe.gifv" alt="logo" />
                </Link>
                <div>
                    <h2>OldBook.com</h2>
                </div>
            </div>
            <div className="endContent">
                <div className="navInput">
                    <input type="text" name="search" id="search" placeholder="Search Books By here.." />
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
background:#142F44;
padding:10px;



& >.navLogo {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
}
& >.navLogo h2{
    color:white;
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
    font-size:17px;
    outline:none;
}
& > .endContent  .navLinks i{
    color:white;
    cursor:pointer;
    font-size:22px;
}
& > .endContent  .navLinks h5{
    color:white;
    cursor:pointer;
    font-size:18px;
}
& > .endContent .userPic img{
   width:50px;
    height:50px;
    border-radius:50%;
}

`