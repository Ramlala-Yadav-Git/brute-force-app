import React from "react";
import styles from "./BookMain.module.css";
import { convertDates } from "../../utils/convertDates";
const book = {
  _id: "616118fa212087150436ea4d",
  title: "Intelligent Investor",
  type: "Rent",
  description:
    "good conditiongood conditiongood conditiongood conditiongood conditiongood conditiongood conditiongood conditiongood conditiongood condition",
  featureImg:
    "http://res.cloudinary.com/someshcloudinary/image/upload/v1633753335/ozcucn74hytplatvbsef.jpg",
  price: 10,
  author: "Linux Torvalds",
  seller: {
    name: "man",
    image:
      "http://res.cloudinary.com/someshcloudinary/image/upload/v1633753335/ozcucn74hytplatvbsef.jpg",
    email: "Email",
  },
  condition: "Good",
  location: "Valsad",
  comments: [],
  createdAt: "2021-10-09T04:22:18.042Z",
  updatedAt: "2021-10-09T04:22:18.042Z",
};

export const BookMain = () => {
  const date = convertDates(book.createdAt);
  return (
    <div className={styles.maindiv}>
      <div className={styles.div}>
        <div className={styles.imgdiv}>
          <img className={styles.image} src={book.featureImg} alt="" />
        </div>
        <div>
          <h1>{book.title}</h1>
          <h5
            style={{ color: "gray", marginTop: "10px", marginBottom: "10px" }}
          >
            By:-{book.author}
          </h5>
          <div>
            <p className={styles.p}>{book.description}</p>
            <h5
              style={{ color: "gray", marginTop: "10px", marginBottom: "10px" }}
            >
              Date:-{date}
            </h5>
            <h5
              style={{ color: "gray", marginTop: "10px", marginBottom: "10px" }}
            >
              Location:-{book.location}
            </h5>
          </div>
          <div className={styles.last}>
            <h4>Condition:-{book.condition}</h4>
            <h4>{book.type}</h4>
            <h4>Price:-{book.price}</h4>
            <button>Buy Now</button>
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <h3>Seller's Info</h3>
        <div className={styles.seller}>
          <img src={book.seller.image} alt="" />
          <div>
            <h4>{book.seller.name}</h4>
            <p>{book.seller.email}</p>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h3>Book Description</h3>
        <p>{book.description}</p>
      </div>
    </div>
    // <div className={styles.container_list}>
    //   <div className={styles.book_list_1}>
    //     <span>
    //       <strong>{book.title}</strong> posted on {date}
    //     </span>
    //     <img src={book.featureImg} alt="" />
    //   </div>
    //   <div className={styles.book_list_2}>
    //     <div>Type - {book.type}</div>
    //     <div>Price - {book.price}</div>
    //   </div>
    //   <div className={styles.book_list_3}>
    //     <h3>About Book</h3>
    //     <div>{book.author}</div>
    //     <div>{book.condition}</div>
    //     <div>{book.location}</div>
    //     <div>{book.description}</div>
    //   </div>
    // </div>
  );
};
