import React from 'react';
import styles from "../../styles/LandingPage.module.css";
const book = {
        "_id": "616118fa212087150436ea4d",
        "title": "Intelligent Investor",
        "type": "Rent",
        "description": "good condition",
        "featureImg": "http://res.cloudinary.com/someshcloudinary/image/upload/v1633753335/ozcucn74hytplatvbsef.jpg",
        "price": 10,
        "author": "Linux Torvalds",
        "seller": "616115f65cce7f29487d4afb",
        "condition": "Good",
        "location": "Valsad",
        "comments": [],
        "createdAt": "2021-10-09T04:22:18.042Z",
        "updatedAt": "2021-10-09T04:22:18.042Z"
}

export const BookMain = () => {
return <div className={styles.container_list}>
        <div className={styles.book_list_1}>
        <span>{book.title}</span>
        <img src={ book.featureImg} alt=""/>
        </div>
        <div className={styles.book_list_2}>
        <span>{book.type}</span>
        <span>{book.price}</span>
        </div>
    </div>
}