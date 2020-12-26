import React from "react";
import ReactDom from "react-dom";
import './index.css'
function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return <article className="book">
      <Image />
      <Title></Title>
      <Author/>
  </article>;
};

const Image = () => <img src = "https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg" alt=""/>;
const Title = () => <h1> The Body by Bill Bryson </h1>
const Author = () => <p> Author: Bill Bryson</p>
ReactDom.render(<Booklist />, document.getElementById("root"));
