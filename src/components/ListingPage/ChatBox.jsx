import React from "react";
import styles from "../../styles/LandingPage.module.css";
import styled from "styled-components";

const Tabs = styled.span`
text-transform: uppercase;
font-weight: ${props => (props.tab === props.val) ? "500" : "400"};;
color:${props => (props.tab === props.val) ? "#292929" : "rgba(117, 117, 117, 1)"}; 
font-size: 16px;
cursor: pointer;
line-height: 18px;
border-bottom:${props => (props.tab === props.val) ? "1px solid #292929" : "none"};  
`

export const ChatBox = () => {
    const [text, setText] = React.useState("");
    const handleClick = () => {
        setText("");
    }
    const [tabs, setTabs] = React.useState(true);
    return <div className={styles.chat_box}>
        <div>
            <div className={styles.chat_box_2}> <Tabs onClick={() => setTabs(false)} tab={tabs} val={false}>
          Global
        </Tabs>
        <Tabs onClick={() => setTabs(true)} tab={tabs} val={true}>
          Local
        </Tabs></div>
            <div className={styles.chat_box_3}>
            </div>
            <div onClick={handleClick} className={styles.chat_box_4}><input value={text} onChange={(e) => { setText(e.target.value)}}/><button>Send</button></div>
        </div>
    </div>
}