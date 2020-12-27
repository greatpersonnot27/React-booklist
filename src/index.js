import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import Book from './book'
import {books} from './books'
// setup variables

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const {img,title,author} = book;
        return (
          <Book key={book.id} book={book}>  </Book>
        );
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
