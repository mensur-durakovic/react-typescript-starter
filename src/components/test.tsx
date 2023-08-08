import React from "react";

interface Book {
  id: string;
  title: string;
  writer: string;
}

interface BookListProps {
  books: Book[];
}
const BookList: React.FC<BookListProps> = (props) => {
  const { books } = props;

  return (
    <ul>
      <li>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.writer}
          </li>
        ))}
      </li>
    </ul>
  );
};

export default BookList;
