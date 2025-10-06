import bookImage from "../assets/books.jpg";
import Books from "../Components/Books";
import Container from "../Components/Container";
import Loader from "../Components/Loader";
import NoDataFound from "../Components/NoDataFound";
import { useProducts } from "../Hooks/useProducts";

const Home = () => {
  const [products, loading, error] = useProducts();

  // if (loading) return <Loader />;
  // if (error) return <h1>there is a error</h1>;
  // if (!products) return <div>Book not found</div>;

  return (
    <Container>
      <div className="flex justify-around py-20">
        <div className="w-2/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900  leading-tight">
            Books to freshen up your bookshelf
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 mb-8">
            Explore a curated collection of new releases and timeless classics,
            perfect for every reader.
          </p>
          <button className="btn bg-teal-600 text-white font-semibold hover:bg-teal-700">
            Make Your List
          </button>
        </div>
        <div className="w-2/5">
          <img
            src={bookImage}
            className="rounded-2xl shadow-2xl"
            alt="books image"
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <NoDataFound />
      ) : (
        <div className="grid grid-cols-5 gap-5">
          {products?.map((book) => (
            <Books key={book.bookId} book={book}></Books>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
