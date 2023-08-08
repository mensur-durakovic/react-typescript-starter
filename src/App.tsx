import React, { useState } from "react";
import BookList from "./components/bookList";
import AddBook from "./components/addBook";
import { Book } from "./bookModel";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const addBookHandler = (title: string, writer: string) => {
    setBooks((prevBooks) => [
      ...books,
      { id: Math.random().toString(), title, writer, isRead: false }
    ]);
  };

  const deleteBookHandler = (bookId: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const toggleReadBookHandler = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === bookId ? { ...book, isRead: !book.isRead } : book))
    );
  };

  return (
    <div className="App">
      <AddBook onAddBookHandler={addBookHandler} />
      <BookList
        books={books}
        onDeleteBookHandler={deleteBookHandler}
        onToggleReadBookHandler={toggleReadBookHandler}
      />
    </div>
  );
}

export default App;
