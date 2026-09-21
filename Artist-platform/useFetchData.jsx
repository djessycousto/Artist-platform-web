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

export default useFetchData;

/////////////////////

// import { useState, useEffect } from "react";

// const useFetchData = (url) => {
//   const [data, setData] = useState([]);

//   console.log("HOOK RENDER:", data);

//   useEffect(() => {
//     console.log("EFFECT IS RUNNING");

//     const fetchData = async () => {
//       console.log("FETCH STARTED");
//       console.log("URL:", url);

//       try {
//         const response = await fetch(url);

//         console.log("FETCH FINISHED");

//         const result = await response.json();

//         console.log("RESULT:", result);

//         setData(result.works);
//       } catch (error) {
//         console.log("ERROR:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data };
// };

// export default useFetchData;
