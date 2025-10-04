import { NavLink } from "react-router";

const Books = ({ book }) => {
  const { bookName, author, rating, category, image, bookId } = book;
  return (
    <div className="rounded-md shadow-md p-5">
      <div className="flex justify-between items-center text-center rounded-md h-80 overflow-hidden">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <h1 className="text-xl font-semibold mt-3 mb-1">{bookName}</h1>
      <p className="text-gray-700">by: {author}</p>
      <div className="flex justify-between text-gray-700">
        <p>{category}</p>
        <p>{rating}</p>
      </div>
      <div className="flex justify-center mt-5">
        <NavLink
          to={`/book-details/${bookId}`}
          className="btn  bg-teal-600 text-white font-semibold hover:bg-teal-700"
        >
          Read Book
        </NavLink>
      </div>
    </div>
  );
};

export default Books;
