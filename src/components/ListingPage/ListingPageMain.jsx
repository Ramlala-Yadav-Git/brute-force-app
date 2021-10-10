import React from 'react';
import styled from "styled-components";
import { BookCard } from './Books';
import styles from "../../styles/LandingPage.module.css";
import { useSelector } from 'react-redux';
import axios from 'axios';

const Tabs = styled.span`
text-transform: uppercase;
margin: 0px 30px;
padding: 5px 28px;
/* padding-left: 30px; */
padding-top: 12px;
font-weight: 700;
color:${props => (props.tab === props.val) ? "#292929" : "rgba(117, 117, 117, 1)"}; 
font-size: 14px;
/* border: 1px solid black; */
cursor: pointer;
line-height: 17px;
/* border-bottom:${props => (props.tab === props.val) ? "1px solid #3907c4" : "none"};   */
`

export const ListingPageMain = () => {
  const user = useSelector(state => state.auth.user.user);
  const [mybook, setmyBook] = React.useState([]);
  const [local, setLocal] = React.useState([]);
  const [global, setGlobal] = React.useState([]);

  React.useEffect(() => {
    axios.post(`http://localhost:2345/mybook/${user._id}`).then((res) => {
      setmyBook(res.data.data);
    })
    axios.post(`http://localhost:2345/globalbook/${user._id}`).then((res) => {
      setGlobal(res.data.data);
    })
    axios.post(`http://localhost:2345/localbook/${user._id}`).then((res) => {
      setLocal(res.data.data);
    })
    setInterval(() => {
      axios.post(`http://localhost:2345/mybook/${user._id}`).then((res) => {
        setmyBook(res.data.data);
      })
      axios.post(`http://localhost:2345/globalbook/${user._id}`).then((res) => {
        setGlobal(res.data.data);
      })
      axios.post(`http://localhost:2345/localbook/${user._id}`).then((res) => {
        setLocal(res.data.data);
      })
    }, 5000)
  }, [user._id])
  const [tabs, setTabs] = React.useState(1);
  return <div className={styles.container_list}>
    <div className={styles.container_list_1}>
      <Tabs onClick={() => setTabs(3)} tab={tabs} val={3}>
        My Books
      </Tabs>
      <Tabs onClick={() => setTabs(2)} tab={tabs} val={2}>
        Global Books
      </Tabs>
      <Tabs onClick={() => setTabs(1)} tab={tabs} val={1}>
        Local Books
      </Tabs>
    </div>
    {tabs === 1 ? (
      <div >
        {local.map((item) => {
          return <BookCard key={item._id} book={item} />;
        })}
      </div>
    ) : tabs === 2 ? (
      <div >
        {global.map((item) => {
          return <BookCard key={item._id} book={item} />;
        })}
      </div>
    ) : (
      <div style={{ display: "flex", flexDirection: "column", }}>
        {mybook.map((item) => {
          return <BookCard key={item._id} book={item} />;
        })}
      </div>
    )}
  </div>
}

