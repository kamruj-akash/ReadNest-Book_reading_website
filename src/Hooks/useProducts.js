import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(
      "https://raw.githubusercontent.com/ProgrammingHero1/boipoka-book-vibe/refs/heads/main/public/booksData.json"
    )
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);
  return [products, loading, error];
};
