import React, { useState } from "react";
import { Navbar } from "../LandingPage/navbar/navabar";
import { ChatBox } from "../ListingPage/ChatBox";
import styles from "../../styles/LandingPage.module.css";
import { BookCard } from "../ListingPage/Books";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import Styled from "styled-components"
import { Footer } from "../../components/LandingPage/Footer/Footer"

const Search = () => {
  const user = useSelector((state) => state.auth.user.user);
  const { query } = useParams()
  const [books, setBooks] = useState([])
  React.useEffect(() => {

    axios.get(`http://localhost:2345/${user._id}/result/${query}`).then(res => {
      setBooks(res.data.data);
    });

  }, [query, user._id])

  return (
    <>
      <div>
        <Navbar />
        <div
          style={{
            width: "88%",
            padding: "15px",
          }}
        >
          <p style={{ marginLeft: "33%" }}>Your Search Keyword total Results are {books.length}</p>
        </div>
        <div className={styles.listing_card}>
          <SearchResultWrapper>

            {
              books && books.map((el, i) => {
                return <>
                  <li key={i} >

                    <BookCard book={el} />
                  </li>

                </>
              })
            }
          </SearchResultWrapper>
          <div style={{ marginTop: "-40px" }}>

            <ChatBox />
          </div>
        </div>

      </div>
      <Footer />

    </>
  );
};

export default Search;

const SearchResultWrapper = Styled.ul`

& > li{
  list-style:none;
  width:1200px;;
  /* border:1px solid black; */
}
`
