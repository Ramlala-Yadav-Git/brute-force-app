import React from 'react';
import { Navbar } from '../LandingPage/navbar/navabar';
import styles from "../../styles/LandingPage.module.css";
import { BookMain } from './BookMain';
import { Comments } from './Comments';
import { Footer } from '../LandingPage/Footer/Footer';


export const BookPage = () => {
  return <div>
    <Navbar />
    <div className={styles.listing_card}>
      <BookMain />
      <Comments />
    </div>
    <div style={{ marginTop: "100px" }}>

      <Footer />
    </div>
  </div>
}