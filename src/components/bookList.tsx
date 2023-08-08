import React from "react";
import { Book } from "../bookModel";

interface BookListProps {
  books: Book[];
  onDeleteBookHandler: (bookId: string) => void;
  onToggleReadBookHandler: (bookId: string) => void;
}
const BookList: React.FC<BookListProps> = (props) => {
  const { books, onDeleteBookHandler, onToggleReadBookHandler } = props;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>
            {book.title} - {book.writer}
          </span>
          <button onClick={() => onDeleteBookHandler(book.id)}>Delete</button>
          <button onClick={() => onToggleReadBookHandler(book.id)}>
            Mark as {book.isRead ? "not read" : "read"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
