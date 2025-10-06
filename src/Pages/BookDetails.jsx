import { useNavigate, useParams } from "react-router";
import Container from "../Components/Container";
import Loader from "../Components/Loader";
import { useProducts } from "../Hooks/useProducts";

const BookDetails = () => {
  const [products, loading, error] = useProducts();

  let navigate = useNavigate();
  const paramId = Number(useParams().id);

  if (loading) return <Loader />;
  if (error) return <h1>there is a error</h1>;
  const book = products.find((book) => book.bookId === paramId);
  if (!book) return <div>Book not found</div>;

  // const booksData = useLoaderData().data;

  const { bookId, bookName, author, image, review, rating, publisher, tags } =
    book;

  console.log(bookId, bookName, author, image, review, rating, publisher, tags);

  return (
    <Container>
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10 font-sans my-10">
        <button
          onClick={() => navigate(-1)}
          className="btn  bg-teal-600 text-white border-1 font-semibold hover:bg-teal-700 hover:text-white"
        >
          <IoIosArrowBack />
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
            {tags.map((tag) => (
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
              <div className="flex text-green-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < 4.5 ? "text-green-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">125 reviews</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
            <div className="flex gap-3">
              <button
                // onClick={() => addToDbHandler(bookId)}
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
      <h1>okk</h1>
    </Container>
  );
};

export default BookDetails;

/** {
    "bookId": 2,
    "bookName": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "image": "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 281,
    "rating": 4.8,
    "category": "Fiction",
    "tags": [
        "Drama",
        "Social Justice"
    ],
    "publisher": "J.B. Lippincott & Co.",
    "yearOfPublishing": 1960
} */
