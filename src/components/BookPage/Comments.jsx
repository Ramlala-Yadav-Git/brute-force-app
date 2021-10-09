import React from "react";
import styles from "../../styles/LandingPage.module.css";

export const Comments = () => {
const [text, setText] = React.useState("");
    const handleClick = () => {
        setText("");
    }
    const [tabs, setTabs] = React.useState(true);
    return <div className={styles.chat_box}>
        <div>
            <div className={styles.chat_box_2}> <span onClick={() => setTabs(false)} tab={tabs} val={false}>
          Contact to Seller
        </span>
        </div>
            <div className={styles.chat_box_3}>
            </div>
            <div onClick={handleClick} className={styles.chat_box_4}><input value={text} onChange={(e) => { setText(e.target.value)}}/><button>Send</button></div>
        </div>
    </div>
}