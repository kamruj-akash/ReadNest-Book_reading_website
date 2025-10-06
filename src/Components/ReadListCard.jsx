import { MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import { removeFromDB } from "../Utilities/AddToBD";

const BookCard = ({ book, readBook, setReadBook }) => {
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const removeItem = readBook.filter((item) => item.bookId != id);
        setReadBook(removeItem);
        removeFromDB(id);
      }
    });
  };
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md shadow-gray-200 flex flex-col md:flex-row items-start space-x-0 md:space-x-6 space-y-6 md:space-y-0 mb-5">
      <div className="w-full md:w-1/4 flex justify-center">
        <img
          src={image}
          alt={bookName}
          className="w-40 h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="flex-1 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{bookName}</h2>
          <button
            onClick={() => deleteHandler(bookId)}
            className="text-3xl btn border-0 btn-ghost hover:border-0 text-red-500"
          >
            <MdDeleteForever />
          </button>
        </div>
        <p className="text-sm text-gray-600">By: {author}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-[#00ddb6]/20 text-[#00ddb6] font-semibold text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap text-sm text-gray-500 gap-4 mt-2">
          <div className="flex items-center gap-1">
            <span>📍 Year of Publishing:</span>
            <span className="font-medium text-gray-700">
              {yearOfPublishing}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>🏢 Publisher:</span>
            <span className="font-medium text-gray-700">{publisher}</span>{" "}
          </div>
          <div className="flex items-center gap-1">
            <span>📄 Page:</span>
            <span className="font-medium text-gray-700">{totalPages}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            Category: {category}
          </span>
          <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
            Rating: {rating}
          </span>
          <NavLink
            to={`/book-details/${bookId}`}
            className="bg-[#00ddb6] hover:bg-[#00c1a5] text-white font-semibold px-6 py-2 rounded-full transition"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
