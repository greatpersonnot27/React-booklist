import React from 'react'

const Book = (props) => {
    const {img,title,author} = props.book;
    const clickHandler = () => {
      alert('hello world');
    }
    return (
      <article className="book">
        <img src={img} alt="" />
        <h1> {title} </h1>
        <h4
          style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
        >
          {author}
        </h4>
        <button type="button" onClick={clickHandler}>Click</button>
      </article>
    );
  };

export default Book