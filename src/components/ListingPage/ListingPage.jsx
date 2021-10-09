import React from 'react';
import styled from "styled-components";
import { BookCard } from './Books';


const Tabs = styled.span`
text-transform: uppercase;
margin: 0 15px;
margin-left: 0px;
padding: 10px 8px;
font-weight: 600;
color:${props => (props.tab === props.val) ? "#292929" : "rgba(117, 117, 117, 1)"}; 
font-size: 13px;
cursor: pointer;
line-height: 18px;
border-bottom:${props => (props.tab === props.val) ? "1px solid #292929" : "none"};  
`

export const ListingPage = () => {
    const [tabs, setTabs] = React.useState(true);
    return <div>
        <Tabs onClick={() => setTabs(false)} tab={tabs} val={false}>
          Search Across Country
        </Tabs>
        <Tabs onClick={() => setTabs(true)} tab={tabs} val={true}>
          Local Search
        </Tabs>
        {tabs ? (
        <div >
          {[1].map((item) => {
            return <BookCard key={item._id} blog={item} />;
          })}
        </div>
      ) : (
        <div >
          {[1,5].map((item) => {
            return <BookCard key={item._id} blog={item} />;
          })}
        </div>
      )}
    </div>
}