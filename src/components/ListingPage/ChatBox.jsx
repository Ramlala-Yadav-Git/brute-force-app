import React from "react";
import styles from "../../styles/LandingPage.module.css";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const Tabs = styled.span`
  text-transform: uppercase;
  font-weight: ${(props) => (props.tab === props.val ? "500" : "400")};
  color: ${(props) =>
    props.tab === props.val ? "#292929" : "rgba(117, 117, 117, 1)"};
  font-size: 16px;
  cursor: pointer;
  line-height: 18px;
  border-bottom: ${(props) =>
    props.tab === props.val ? "1px solid #292929" : "none"};
`;

export const ChatBox = () => {
  const [chat, setChat] = React.useState([]);
  const [chatLocal, setChatLocal] = React.useState([]);
  const user = useSelector((state) => state.auth.user.user);
  const [text, setText] = React.useState("");
  const handleClick = () => {
    if (text.length === 0) {
      return;
    }
    if (!tabs) {
      axios.post(`https://oldbook-brute-force.herokuapp.com/global`, {
        text: text,
        author: user._id,
      });
      axios.get(`https://oldbook-brute-force.herokuapp.com/global`).then((res) => {
        setChat(res.data.data);
      });
    } else {
      axios.post(`https://oldbook-brute-force.herokuapp.com/local`, {
        location: user.location,
        text: text,
        author: user._id,
      });
      axios
        .get(`https://oldbook-brute-force.herokuapp.com/local/comments/${user._id}`)
        .then((res) => {
          setChatLocal(res.data.data);
        });
    }
    setText("");
  };
  React.useEffect(() => {
    axios.get(`https://oldbook-brute-force.herokuapp.com/global`).then((res) => {
      setChat(res.data.data);
    });
    axios
      .get(`https://oldbook-brute-force.herokuapp.com/local/comments/${user._id}`)
      .then((res) => {
        setChatLocal(res.data.data);
      });
    setInterval(() => {
      axios.get(`https://oldbook-brute-force.herokuapp.com/global`).then((res) => {
        setChat(res.data.data);
      });
      axios
        .get(`https://oldbook-brute-force.herokuapp.com/local/comments/${user._id}`)
        .then((res) => {
          setChatLocal(res.data.data);
        });
    }, 5000);
  }, [user._id]);
  const [tabs, setTabs] = React.useState(false);

  return (
    <div className={styles.chat_box}>
      <div>
        <div className={styles.chat_box_2}>
          {" "}
          <Tabs onClick={() => setTabs(false)} tab={tabs} val={false}>
            <h5 style={{ fontSize: "14px" }}>

              Global
            </h5>
          </Tabs>
          <Tabs onClick={() => setTabs(true)} tab={tabs} val={true}>
            <h5 style={{ fontSize: "14px" }}>

              Local
            </h5>
          </Tabs>
        </div>
        <div className={styles.chatboxcss}>
          {!tabs &&
            chat.map((item) => {
              return (
                <div>
                  {user._id === item.author._id ? (
                    <div className={styles.containerright}>
                      <div>
                        <h5>{item.author.name}</h5>
                        <p className={styles.p1}>{item.text}</p>
                      </div>
                      <div>
                        <img
                          src={item.author.imageUrl}
                          alt="Avatar"
                          className={styles.imgright}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={styles.containerleft}>
                      <img
                        src={item.author.imageUrl}
                        alt="Avatar"
                        className={styles.imgleft}
                      />
                      <div>
                        <h5>{item.author.name}</h5>
                        <p className={styles.p1}>{item.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          {tabs &&
            chatLocal.map((item) => {
              return (
                <div>
                  {user._id === item.author._id ? (
                    <div className={styles.containerright}>
                      <div>
                        <h5>{item.author.name}</h5>
                        <p className={styles.p1}>{item.text}</p>
                      </div>
                      <img
                        src={item.author.imageUrl}
                        alt="Avatar"
                        className={styles.imgright}
                      />
                    </div>
                  ) : (
                    <div className={styles.containerleft}>
                      <img
                        src={item.author.imageUrl}
                        alt="Avatar"
                        className={styles.imgleft}
                      />
                      <div>
                        <h5>{item.author.name}</h5>
                        <p className={styles.p1}>{item.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <div onClick={handleClick} className={styles.chat_box_4}>
          <input
            value={text}
            placeholder="Start Chatting..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};


