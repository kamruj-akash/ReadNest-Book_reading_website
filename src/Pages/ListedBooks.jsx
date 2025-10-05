import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ReadListCard from "../Components/ReadListCard";
import { getFromDB } from "../Utilities/AddToBD";

const ListedBooks = () => {
  const { data: booksData } = useLoaderData();
  const [readBook, setReadBook] = useState([]);

  useEffect(() => {
    const dbBooks = getFromDB();
    const filterBook = booksData.filter((item) =>
      dbBooks.includes(item.bookId)
    );
    setReadBook(filterBook);
  }, [booksData]);

  return (
    <Container>
      <h1 className="text-3xl text-center my-10 bg-gray-100 py-8 font-semibold text-gray-700">
        Read List & Wishlist Books
      </h1>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          {readBook.map((book) => (
            <ReadListCard key={book.bookId} book={book} />
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </Container>
  );
};

export default ListedBooks;
