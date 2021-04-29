import React from "react";

export const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
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
      <img src={img} />
      <h1
        onClick={() => {
          console.log({ title });
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button className="btn-btn-primary" type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button
        className="btn-btn-secondary"
        type="button"
        onClick={() => complexExample(author)}
      >
        More Complex Example
      </button>
    </article>
  );
};
