import { useState, useEffect } from 'react';

const useAcquireInfo = () => {
  const [authors, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://poetrydb.org/author`);
        if (!response.ok) {
          throw new Error("Failed to fetch poetry data.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  });

  return { authors, isLoading, error };
};

export default useAcquireInfo;