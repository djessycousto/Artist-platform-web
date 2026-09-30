import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState({});
  // const [data, setData] = useState([]);

  // const [data, setData] = useState({ works: [] }); // this working fine
  // console.log("HOOK RENDER:", data);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("6. response NOT OK");
        return;
      }

      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};

// Single Item hooks

const useFetchSingleData = (id) => {
  const [singleItem, setSingleItem] = useState(null);
  console.log(singleItem);

  const fetchSingleData = async () => {
    const response = await fetch(
      `http://localhost:8080/api/artist-web/artwork/${id}`,
    );
    const result = await response.json();

    console.log(result);

    setSingleItem(result);
  };

  useEffect(() => {
    fetchSingleData();
  }, [id]);

  return { singleItem };
};

export { useFetchData, useFetchSingleData };
