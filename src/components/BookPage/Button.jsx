import React from "react";
import { data } from "../../utils/data";
import axios from "axios";

export const Button = () => {
    const handleData = () => {
        // data.map(item => {
        //     axios.post("https://oldbook-brute-force.herokuapp.com/users", item);
        //     return item;
        // })
    }
    return <button onClick={handleData}>
        Clickme
    </button>
}