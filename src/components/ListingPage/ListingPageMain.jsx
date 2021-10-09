import React from 'react';
import styled from "styled-components";
import { BookCard } from './Books';
import styles from "../../styles/LandingPage.module.css";

const Tabs = styled.span`
text-transform: uppercase;
margin: 0px 30px;
padding: 10px 8px;
padding-top: 50px;
font-weight: 500;
color:${props => (props.tab === props.val) ? "#292929" : "rgba(117, 117, 117, 1)"}; 
font-size: 20px;
cursor: pointer;
line-height: 18px;
border-bottom:${props => (props.tab === props.val) ? "1px solid #292929" : "none"};  
`

export const ListingPageMain = () => {
    const [tabs, setTabs] = React.useState(1);
    return <div className={styles.container_list}>
        <div className={styles.container_list_1}>
        <Tabs onClick={() => setTabs(3)} tab={tabs} val={3}>
          My Books
        </Tabs>
        <Tabs onClick={() => setTabs(2)} tab={tabs} val={2}>
          Global Search
        </Tabs>
        <Tabs onClick={() => setTabs(1)} tab={tabs} val={1}>
          Local Search
        </Tabs>
        </div>
        {tabs === 1 ? (
        <div >
          {[1].map((item) => {
            return <BookCard key={item._id} blog={item} />;
          })}
        </div>
      ) : tabs===2 ?(
        <div >
          {[1,5,3,3,3,3,3,3,3,3,3,3,3,3].map((item) => {
            return <BookCard key={item._id} blog={item} />;
          })}
        </div>
      ):(
        <div >
          {[1,4].map((item) => {
            return <BookCard key={item._id} blog={item} />;
          })}
        </div>
      )}
    </div>
}