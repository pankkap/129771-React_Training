import React from "react";
import myImage from "./Assests/facebook1.jpg";

let data = 123;

// Import Image

// Internal Styling in React
const mystyle = {
  fontSize: "30px",
  fontFamily: "Arial",
  padding: "10px",
  color: "blue",
};

const person = {
  name: "Sachin",
  age: 30,
  address: "Mumbai",
};

let countries = ["India", "US", "UK", "UAE"];

let pageLoading = true;

export default function MyData() {
  return (
    <>
      <p style={mystyle}> {2 + 2} </p>
      <p style={{ color: "red", backgroundColor: "yellow" }}> {data} </p>
      <img src={myImage} alt="" width={200} height={100} />
      {/* Assests outside src folder */}
      <img
        src={process.env.PUBLIC_URL + "./facebook.jpg"}
        alt=""
        width={200}
        height={150}
      />
      <p>{person.name}</p>

      {countries.map((country, i) => (
        <ul key={i}>
          <li>{country}</li>
        </ul>
      ))}
      {pageLoading ? "Page is Loading" : "Page can't be Load"}
    </>
  );
}

// 1. Inline Style
// 2. Internal Style
// 3. External Style
