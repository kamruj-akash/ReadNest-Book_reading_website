import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Container from "../Components/Container";
import Loader from "../Components/Loader";
import { useProducts } from "../Hooks/useProducts";
import { getFromDB, saveToDB } from "../Utilities/AddToBD";

const BookDetails = () => {
  const [products, loading, error] = useProducts();

  let navigate = useNavigate();
  const paramId = Number(useParams().id);
  if (loading) <Loader />;
  if (error) <ErrorPage />;
  const book = products.find((book) => book.bookId === paramId);
  const { bookId, bookName, author, image, review, rating, publisher, tags } =
    book || {};

  const addToDbHandler = (id) => {
    const existList = getFromDB();

    if (existList.includes(id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The Book Already in Read List!",
      });
    } else {
      saveToDB(id);
      Swal.fire({
        title: "Added to ReadList!",
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <Container>
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10 font-sans my-10">
        <button
          onClick={() => navigate(-1)}
          className="btn  bg-teal-600 text-white border-1 font-semibold hover:bg-teal-700 hover:text-white"
        >
          Back
        </button>

        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={image}
            alt={bookName}
            className="rounded-lg w-full shadow-md"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{bookName}</h1>
            <h2 className="text-lg text-gray-600">by {author}</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">{review}</p>

          <div className="flex gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-500 space-y-1">
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>Language:</strong> English
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold">{rating}</span>

              <span className="text-sm text-gray-500 ml-2">125 reviews</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
            <div className="flex gap-3">
              <button
                onClick={() => addToDbHandler(bookId)}
                className="btn  bg-teal-600 text-white font-semibold hover:bg-teal-700"
              >
                Mark as Read
              </button>
              <button className="btn  text-teal-600 bg-transparent border-1 font-semibold hover:bg-teal-700 hover:text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
