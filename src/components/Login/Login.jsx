import React from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";
import { Navbar } from "../LandingPage/navbar/navabar";
import { Footer } from "../LandingPage/Footer/Footer"

const Login = () => {
  fetch("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0")
    .then((response) => response.json())
    .then((data) => {
      console.log(data, data.city);
    });
  const responseGoogle = (res) => {
    const data = { ...res.profileObj, events: {} };
    console.log(data);
    setTimeout(() => {
      if (data) {
        alert("You have successfully Logged In");
      }
    }, 1000);
  };
  return (
    <>
      <Navbar />
      <div className={styles.maindiv}>
        <div>
          <img
            className={styles.img1}
            src="https://knowledge4lawyers.files.wordpress.com/2017/10/sitting_on_reading_books_500_clr.gif"
            alt=""
          />
          <GoogleLogin
            clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className={styles.btn}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  className={styles.btn_image}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwFXc0_kkWCXzk1xUiYZbiMEGg89f60qq6Q&usqp=CAU"
                  alt="img"
                />
                <p className={styles.btn_p}>Sign up with Google</p>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            // isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
          <button className={styles.btn}>
            <p className={styles.btn_p}>Sign up with Email</p>
          </button>
          <p className={styles.p}>
            By signing up, you agree to the{" "}
            <span className={styles.span2}>Terms of Service</span> and <br />{" "}
            <span className={styles.span2}>Privacy Policy</span>, including{" "}
            <span className={styles.span2}>Cookie Use</span>.
          </p>
          <p>
            Already have an account?{" "}
            <span className={styles.span2}>Sign In</span>
          </p>
        </div>
      </div>
      <div style={{ margin: "50px" }}>

      </div>
      <Footer />
    </>
  );
};

export default Login;
