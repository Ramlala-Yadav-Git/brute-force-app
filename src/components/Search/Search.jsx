import React from "react";
import { Navbar } from "../LandingPage/navbar/navabar";
import { ChatBox } from "../ListingPage/ChatBox";
import styles from "../../styles/LandingPage.module.css";
import { BookCard } from "../ListingPage/Books";

const Search = () => {
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
        <BookCard />
        <ChatBox />
      </div>
    </div>
  );
};

export default Search;
