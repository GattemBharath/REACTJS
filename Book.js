import React from "react";

const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props;
  //? attribute, eventHandler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello Book");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h4
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h4>
      <p>{author} </p>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <br />
      <button type="button" onClick={() => complexExample(author)}>
        more complex
      </button>
      {/* <p>{author.toUpperCase()}</p> */}
      {/* <p>{let x = 6}</p> */}
      {/* <p>{6 + 6}</p> */}
      {/* {console.log(props)} */}
    </article>
  );
};

export default Book;
