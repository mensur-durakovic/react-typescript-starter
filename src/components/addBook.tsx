import React, { useRef } from "react";

interface AddBookProps {
  onAddBookHandler: (title: string, writer: string) => void;
}

const AddBook: React.FC<AddBookProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const writerRef = useRef<HTMLInputElement>(null);

  const submitBookHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const title = titleRef.current?.value;
    const writer = writerRef.current?.value;
    console.log({ title, writer });

    if (!writer || !title) {
      return;
    }
    props.onAddBookHandler(title, writer);
  };

  return (
    <form onSubmit={submitBookHandler}>
      <div>
        <label htmlFor="title"></label>
        <input id="title" type="text" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="writer"></label>
        <input id="writer" type="text" ref={writerRef} />
      </div>
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBook;
