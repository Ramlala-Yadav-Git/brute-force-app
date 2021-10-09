import React from "react";
import styles from "../../styles/LandingPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export const Comments = () => {
    const [chat, setChat] = React.useState([]);
    const { id } = useParams();
    const user = useSelector((state) => state.auth.user.user); 
    const [text, setText] = React.useState("");
    React.useEffect(() => {
        axios.post(`http://localhost:2345/${user._id}/book/${id}`).then(res => {
            setChat(res.data.data);
        });
        setInterval(() => {
            axios.post(`http://localhost:2345/${user._id}/book/${id}`).then(res => {
                setChat(res.data.data);
            });  
        },5000)
    },[id,user._id])
    console.log(chat);
    const handleClick = () => {
        if (text.length === 0) {
            return
        }
        axios.patch(`http://localhost:2345/${user._id}/book/${id}`, { text });
        axios.post(`http://localhost:2345/${user._id}/book/${id}`).then(res => {
                setChat(res.data.data);
            }); 
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
                {
                    chat.map(item => {
                        return <div>
                            {user._id === item.author._id ? <div className={styles.right_chat}>{item.text}</div> : <div className={styles.left_chat}>
                                <div><strong>{item.author.name}</strong></div>
                                <div>{item.text}</div>
                            </div>}
                        </div>
                    })
                }
            </div>
            <div onClick={handleClick} className={styles.chat_box_4}><input value={text} onChange={(e) => { setText(e.target.value)}}/><button>Send</button></div>
        </div>
    </div>
}