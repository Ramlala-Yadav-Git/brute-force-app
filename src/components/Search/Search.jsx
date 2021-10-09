import React, { useState } from "react";
import { Navbar } from "../LandingPage/navbar/navabar";
import { ChatBox } from "../ListingPage/ChatBox";
import styles from "../../styles/LandingPage.module.css";
import { BookCard } from "../ListingPage/Books";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

const Search = () => {
  const user = useSelector((state) => state.auth.user.user);
  const { query } = useParams()
  const [books, setBooks] = useState([])
  React.useEffect(() => {
    axios.post(`http://localhost:2345/${user._id}/results/${query}`).then(res => {
      setBooks(res.data.data);
    });
    setInterval(() => {
      axios.post(`http://localhost:2345/${user._id}/results/${query}`).then(res => {
        setBooks(res.data.data);
      });
    }, 5000)
  }, [query, user._id])
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "75%",
          padding: "15px",
        }}
      >
        <p style={{ textAlign: "center" }}>Your Search Keyword Results</p>
      </div>
      <div className={styles.listing_card}>
        {
          books && books.map((el, i) => {
            return <>
              <BookCard key={i} book={el} />

            </>
          })
        }
        <ChatBox />
      </div>
    </div>
  );
};

export default Search;
