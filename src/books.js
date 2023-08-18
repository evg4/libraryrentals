import React, { useState } from "react";
import options from "./bookData";

function BookList() {
  const [selected, setSelected] = useState([]);
  function addBook(e) {
    let selectedBook = e.target.value;
    setSelected((prev) => {
      return [...prev, selectedBook];
    });

    e.target.disabled = true;
  }

  function removeBook(e) {
    let selectedBook = e.target.innerHTML;

    document.getElementById(selectedBook).disabled = false;

    setSelected((prev) => {
      return prev.filter((book) => book !== selectedBook);
    });
  }

  return (
    <div>
      <div id="list">
        <h2>Books on your reading list:</h2>
        <p>
          Click on a book to remove it from your reading list. If there is
          nothing on your reading list yet, look in the library section below to
          see what you'd like to add.
        </p>
        <ul>
          {selected.map((book) => {
            return (
              <li value={book} key={book} onClick={removeBook}>
                {book}
              </li>
            );
          })}
        </ul>
      </div>
      <div id="library">
        <h2>Books available in library:</h2>
        <p>Click on a book to add it to your reading list.</p>
        <div id="buttons">
          {options.map((option) => {
            return (
              <button
                disabled={false}
                value={option}
                key={option}
                id={option}
                onClick={addBook}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BookList;
