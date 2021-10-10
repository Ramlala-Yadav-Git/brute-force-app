import React from "react";
import styles from "../../styles/LandingPage.module.css";
import { convertDates } from "../../utils/convertDates";
import { useHistory } from "react-router-dom";
// import { allTopicBlogs, blogsSingleSuccess } from "../../redux/auth/actions";

export const BookCard = ({ book }) => {
  const date = convertDates(book.createdAt);
  const history = useHistory();
  const handlePage = (id) => {
    history.push(`/book/${id}`);
  }
  return (
    <div className={styles.book_card}>
      <div className={styles.book_card_cont}>
        <div className={styles.book_card_cont_right}>
          <img style={{cursor:"pointer"}} onClick={() => { handlePage(book._id) }} src={book.featureImg} alt="" />
        </div>
        <div className={styles.book_card_cont_left}>
          <span>Book Name - <strong>{book.title}</strong></span>
          <span>Posted on {date}</span>
        </div>
        <div className={styles.book_card_cont_left}>
          <span>{book.price ? "Price - " : ""}<strong>{book.price ? "₹ " + book.price : "FREE"}</strong></span>
          <span>Condition - {book.condition}</span>
          <span onClick={() => { handlePage(book._id) }} className={styles.book_card_cont_left_btn}>Click for more detail</span>
        </div>
      </div>
    </div>
  );
};
