import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./Books";
import SpecificBook from "./Book";

import { greeting } from "./testing/testing";

//! stateless functional component
//! always return JSX

//////// ! JSX Rules ////////

//? return single element
//? div / section / article / Fragment
//? use camelCase for html attribute
//? className instead of class
//? close every element
//? formatting

//! Nested Components, React Tools

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
// console.log(newNames);

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg"
//     alt=""
//   />
// );

// const Title = () => <h3>I Love You to the Moon and Back </h3>;

// const Author = () => (
//   //? JSX-CSS

//   <p
//     style={{
//       color: "#617d98",
//       // fontStyle: "italic",
//       // textDecoration: "underline",
//       // textAlign: "center",
//       letterSpacing: ".5px",
//     }}
//   >
//     Amelia Hepworth and Tim Warnes
//   </p>
// );

// const Person = () => <h1>Hello World!!</h1>;

// const Message = () => <p>This is my message</p>;

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world!!!")
//   );
// };
