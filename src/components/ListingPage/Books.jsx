import React from "react";
import styles from "../../styles/LandingPage.module.css";
import { convertDates } from "../../utils/convertDates";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { allTopicBlogs, blogsSingleSuccess } from "../../redux/auth/actions";
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
    
export const BookCard = () => {
  const date = convertDates(book.createdAt);
  return (
    <div className={styles.book_card}>
          <div className={styles.book_card_cont}>
              <div className={styles.book_card_cont_left}>
              <span>Book Name - <strong>{book.title}</strong></span>
                  <span>Posted on {date}</span>
                  <span className={styles.book_card_cont_left_btn}>Click for more detail</span>
              </div>
              <div className={styles.book_card_cont_left}>
              <span>{book.price?"Price - ":""}<strong>{book.price?"₹ "+book.price:"FREE"}</strong></span>
              <span>Condition - { book.condition}</span>
              </div>
              <div className={styles.book_card_cont_right}>
                  <img src={book.featureImg} alt=""/>
              </div>
      </div>
    </div>
  );
};
