import React from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";

const Login = () => {
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
    <div className={styles.maindiv}>
      <div>
        <img
          src="https://i.pinimg.com/originals/d1/7a/42/d17a4280ffd64c0c347bee97a8f2c91e.jpg"
          alt=""
        />
      </div>
      <div>
        <p className={styles.quote}>
          <span className={styles.span1}>
            Mentoring is a brain to pick, an ear to listen,
          </span>
          <br />{" "}
          <span className={styles.span2}>
            and a push in the right direction.
          </span>
        </p>
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
        <p>
          By signing up, you agree to the{" "}
          <span className={styles.span2}>Terms of Service</span> and <br />{" "}
          <span className={styles.span2}>Privacy Policy</span>, including{" "}
          <span className={styles.span2}>Cookie Use</span>.
        </p>
        <p>
          Already have an account? <span className={styles.span2}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
