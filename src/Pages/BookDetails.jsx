import { useLoaderData, useParams } from "react-router";
import Container from "../Components/Container";

const BookDetails = () => {
  const paramId = useParams().id;
  const booksData = useLoaderData().data;

  const book = booksData.find((book) => book.bookId == paramId);
  console.log(book);

  return (
    <Container>
      {/* <h1>{book.name}</h1> */}
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