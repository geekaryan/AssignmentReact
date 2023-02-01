import { useEffect, useState } from "react";

// import Pagination from "./Pagination";

import Main from "./Main";
import styles from "./Index.module.css";

const Index = () => {
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postsPerPage, setPostsPerPage] = useState(3);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const APIHandler = async () => {
      try {
        setIsLoading(false);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData(data);
        setIsLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    APIHandler();
  }, []);

  if (!isLoading) {
    return <div>API Is Loading</div>;
  }

  console.log(data);

  //   const indexofLastPost = currentPage * postsPerPage;
  //   const indexofFirstPost = indexofLastPost - postsPerPage;
  //   const currentPosts = data.slice(indexofFirstPost, indexofLastPost);

  return (
    <div className={styles.bg}>
      {data.map((data) => (
        <Main key={data.id} data={data} />
      ))}
      {/* <Pagination totalPost={currentPosts.length} postsPerPage={postsPerPage} /> */}
    </div>
  );
};

export default Index;
