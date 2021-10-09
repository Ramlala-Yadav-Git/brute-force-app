import React, { useState } from "react";
import styles from "./CreateBook.module.css";
import { Navbar } from "../LandingPage/navbar/navabar";
import axios from "axios";

const CreateBook = () => {
  const [pinlocation, setpinlocation] = useState({ find: false });
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setTopic] = useState(0);
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");


  const getDetails = (pin) => {
    let location = {};
    axios
      .get(`https://api.postalpincode.in/pincode/${pin} `)
      .then((res) => {
        location = {
          find: true,
          city: res.data[0].PostOffice[0].Block,
          district: res.data[0].PostOffice[0].District,
          state: res.data[0].PostOffice[0].State,
        };
        setpinlocation(location);
      })
      .catch(function (error) {
        alert("Wrong Pincode");
      });
  };

  const [showPrice, setShowPrice] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "pincode") {
      if (e.target.value.length === 6) {
        getDetails(e.target.value);
        console.log("pin", pinlocation);
      } else {
        setpinlocation({});
      }
    }
    if (
      e.target.name === "type" &&
      (e.target.value === "Rent" || e.target.value === "Sell")
    ) {
      setShowPrice(true);
    } else if (e.target.name === "type" && e.target.value === "Donate") {
      setShowPrice(false);
    }
  };
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.mainDiv}>
        <h2 style={{ textAlign: "center", color: "#4004E7" }}>
          SELL/DONATE A BOOK
        </h2>
        <form action="">
          <div>
            <label htmlFor="title">Book Title</label>
            <input
              onChange={(e) => { setTitle(e.target.value) }}
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="Enter Title Of The Book"
            />
          </div>
          <div>
            <label htmlFor="author">Author Name</label>
            <input
              onChange={(e) => { setAuthor(e.target.value) }}
              type="text"
              name="author"
              id="author"
              value={author}
              placeholder="Enter Author Name Of The Book"
            />
          </div>
          <div className={styles.two}>
            <div>
              <div>
                <p>Choose One</p>
                <div className={styles.type}>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    id="type1"
                    value="Rent"
                  />
                  <label htmlFor="type1">Rent</label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    id="type2"
                    value="Sell"
                  />
                  <label htmlFor="type2">Sell</label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="type"
                    id="type3"
                    value="Donate"
                  />
                  <label htmlFor="type3">Donate</label>
                </div>
              </div>
              {showPrice ? (
                <div>
                  <label htmlFor="price">Enter Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter Price Of The Book"
                  />
                </div>
              ) : null}
            </div>
            <div>
              <p>Condition of Book</p>
              <div className={styles.type}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="condition"
                  id="typec1"
                  value="Readable"
                />
                <label htmlFor="typec1">Readable</label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="condition"
                  id="typec2"
                  value="Good"
                />
                <label htmlFor="typec2">Good</label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="condition"
                  id="typec3"
                  value="Best"
                />
                <label htmlFor="typec3">Best</label>
              </div>
            </div>
            <div>
              <p>Choose Image</p>
              <div>
                <input type="file" name="image" id="" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="location">Pincode</label>
            <input
              onChange={handleChange}
              type="number"
              name="pincode"
              id="location"
              placeholder="Enter Pincode"
            />
          </div>
          {pinlocation.find ? (
            <div className={styles.location}>
              <div>
                <label htmlFor="state">State</label>
                <input
                  value={pinlocation.state}
                  onChange={handleChange}
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                />
              </div>
              <div>
                <label htmlFor="district">District</label>
                <input
                  value={pinlocation.district}
                  onChange={handleChange}
                  type="text"
                  name="district"
                  id="district"
                  placeholder="Enter district"
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  value={pinlocation.city}
                  onChange={handleChange}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                />
              </div>
            </div>
          ) : null}
          <div>
            <label htmlFor="author">Description</label>
            <textarea name="description" id="" cols="30" rows="5"></textarea>
          </div>
          <div className={styles.submit}>
            <input type="submit" value="CREATE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
// const data = new FormData()
//     data.append("image", file)
//     data.append("text", body);
//     data.append("title", title);
//     data.append("description", description);
//     data.append("author", user._id);
//     data.append("topic", topic);