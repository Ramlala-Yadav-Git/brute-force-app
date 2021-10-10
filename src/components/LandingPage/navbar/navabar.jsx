import { useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [input, setInput] = useState("");
  const history = useHistory("");
  const user = useSelector((state) => state.auth.user.user);

  const handleChange = (e) => {
    if (e.charCode === 13) {
      history.push(`/search/${input}`);
      setInput("");
    }

    // console.log(e.charCode)
  };
  const sample =
    "https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg";
  // console.log(user)

  return (
    <>
      <NavbarWrapper>
        <div className="navLogo">
          <Link to="/" className="link">
            <div>
              <h2>
                <span className="old"> O</span>ld<span className="book">B</span>
                ook.com
              </h2>
            </div>
          </Link>
        </div>
        <div className="endContent">
          <div className="navInput">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Books By author.."
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleChange}
              value={input}
            />
          </div>
          <div className="navLinks">
            <Link to="/list" className="link">
              <h5>All Books</h5>
            </Link>
          </div>
          <div className="navLinks">
            <Link to="create" className="link">
              <h5>Sell</h5>
            </Link>
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
            <img src={user ? user.imageUrl : sample} alt="pic" />
          </div>
        </div>
      </NavbarWrapper>
    </>
  );
};

const NavbarWrapper = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:#FFFFFF;
padding-left:10px;
padding-right:10px;
color:##232F3E;
border-bottom:1px solid #7b63bd21;

.old{
    color:#e79804;
    font-family:cursive;
}
.book{
    color:#4004e7;
    font-family:cursive;

}
.link{
    text-decoration:none;

}
& >.navLogo {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
    border-radius:5px;
    padding:5px;
    text-decoration:none;
}
& >.navLogo h2{
    color:#465261;
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
& .navInput{
     display:flex;
     flex-direction:column;
    justify-content:flex-end;
    /* align-items:center; */
    

    
}
& > .endContent .navInput input{
    border:none;
    margin-top:20px;
    /* padding:5px; */
    border-radius:3px;
    font-size:14px;
    outline:none;
    border:1px solid #ecaa2fb2;
    font-weight:normal;
}
& > .endContent  .navLinks i{
    color:#232F3E;
    cursor:pointer;
    font-size:22px;
}
& > .endContent  .navLinks h5{
    color:#444b53;
    cursor:pointer;
    font-size:18px;
    font-weight:700;
}
& > .endContent .userPic img{
   width:50px;
    height:50px;
    border-radius:50%;
}

`;
