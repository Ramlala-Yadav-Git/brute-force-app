import React from 'react';
import { Navbar } from '../LandingPage/navbar/navabar';
import { ChatBox } from './ChatBox';
import { ListingPageMain } from './ListingPageMain';
import styles from "../../styles/LandingPage.module.css";


export const ListingPage = () => {
  return <div>
    <Navbar />
    <div className={styles.listing_card}>
    <ListingPageMain />
    <ChatBox/>
    </div>
    </div>
}