import React from "react";
import { data } from "./book";
import { Book } from "./BookR";
import "../App.css";

function App() {
  return (
    <div className="booklist">
      {data.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
}

export default App;
