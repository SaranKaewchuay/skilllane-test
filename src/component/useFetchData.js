import { useState, useEffect } from "react";
import tv from "../json/tv"

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

      const newDataSlice = tv.slice(
        page * 28,
        (page + 1) * 28
      );
      setData((prevData) => [...prevData, ...newDataSlice]);
      setPage((prevPage) => prevPage + 1);
      // page = page + 1
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, fetchData };
};

export default useFetchData;
