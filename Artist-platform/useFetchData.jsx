//  Here i use fetch the rest i will use more axios

import { useState, useEffect } from "react";

const useFetchData = (url) => {
  // const [data, setData] = useState({});

  //===> States <===//
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // const [data, setData] = useState([]);
  // const [data, setData] = useState({ works: [] }); // this working fine

  //===> fetch <===//

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setFetchError(
          "Something went wrong with the server please try again later",
        );

        return;
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setFetchError(
        "an error occur while fetching, we are unable to fetch data. please try again later",
        error,
      );
    } finally {
      setIsLoading(false);
    }
  };
  //===> use effect tracking url <===//

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, fetchError };
};

// Single Item hooks

const useFetchSingleData = (url, id) => {
  //===> States <===//
  const [singleItem, setSingleItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  //===> Fetch <===//
  const fetchSingleData = async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const response = await fetch(
        `${url}/${id}`, // dynamic url
      );

      if (!response.ok) {
        //  new way
        const errorBody = await response.json().catch(() => null);
        console.log(errorBody, "error body");

        setFetchError(
          // "Something went wrong with the server please try again later",
          errorBody?.message ?? "Something went wrong, please try again later",
        );

        // console.log(response);

        return;
      }

      const result = await response.json();
      setSingleItem(result);
    } catch (error) {
      setFetchError(
        "an error occur while fetching, we are unable to fetch data. please try again later",
        error,
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //===> UseEffect tracking the id change  <===//
  useEffect(() => {
    fetchSingleData();
  }, [url, id]);

  return { singleItem, isLoading, fetchError };
};

export { useFetchData, useFetchSingleData };
