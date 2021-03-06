import React, { useState } from "react";
import styles from "./CreateBook.module.css";
import { Navbar } from "../LandingPage/navbar/navabar";
import axios from "axios";
import { useSelector } from "react-redux";
import { Footer } from "../LandingPage/Footer/Footer"
import { useHistory } from "react-router";

const CreateBook = () => {
  const [pinlocation, setpinlocation] = useState({ find: false });
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");
  const user = useSelector((state) => state.auth.user.user);
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("title", title);
    data.append("type", type);
    data.append("description", description);
    data.append("location", location);
    data.append("price", price);
    data.append("condition", condition)
    data.append("image", file)
    data.append("author", author);
    data.append("seller", user._id);
    const payload = {
      title,
      type,
      description,
      price,
      condition,
      file,
      location: location || user.location,
      author,
      seller: user._id
    }
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    try {
      axios.post("https://oldbook-brute-force.herokuapp.com/books", data, config).then((res) => {
        // console.log(res.data);
        alert("Your request has been successfully accepted")
        history.push("/list")

      });
    } catch (e) {
      console.log(e)
    }
  }
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
    if (e.target.name === "condition") {
      setCondition(e.target.value)
    }
    if (
      e.target.name === "type" &&
      (e.target.value === "Rent" || e.target.value === "Sell")
    ) {
      setType(e.target.value);
      setShowPrice(true);
    } else if (e.target.name === "type" && e.target.value === "Donate") {
      setType(e.target.value);
      setShowPrice(false);
      setPrice(0);
    }
  };
  return (
    <>
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
                    <label htmlFor="type1">Rent &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="type"
                      id="type2"
                      value="Sell"
                    />
                    <label htmlFor="type2">Sell &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="type"
                      id="type3"
                      value="Donate"
                    />
                    <label htmlFor="type3">Donate &nbsp;&nbsp;&nbsp;&nbsp;</label>
                  </div>
                </div>
                {showPrice ? (
                  <div>
                    <label htmlFor="price">Enter Price</label>
                    <input
                      type="number"
                      name="price"
                      onChange={(e) => { setPrice(Number(e.target.value)) }}
                      id="price"
                      value={price}
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
                  <label htmlFor="typec1">
                    Readable &nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="condition"
                    id="typec2"
                    value="Good"
                  />
                  <label htmlFor="typec2">Good &nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="condition"
                    id="typec3"
                    value="Best"
                  />
                  <label htmlFor="typec3">Best &nbsp;&nbsp;&nbsp;&nbsp;</label>
                </div>
              </div>
            </div>
            <div className={styles.two}>
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

              <div>
                <p>Choose Image</p>
                <div>
                  <input type="file"
                    onChange={(event) => setFile(event.target.files[0])}
                    accept="png jpg jpeg" name="image" id="" />
                </div>
              </div>
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
                    onChange={(e) => { setLocation(e.target.value) }}
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
              <textarea onChange={(e) => { setDescription(e.target.value) }} name="description" id="" cols="30" rows="5"></textarea>
            </div>
            <div className={styles.submit}>
              <input onClick={handleSubmit} type="submit" value="CREATE" />
            </div>
          </form>
        </div>
      </div>
      <div style={{ margin: "50px" }}>

      </div>
      <Footer />
    </>
  );
};

export default CreateBook;
