import { useEffect, useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(undefined); // or null
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    //this setTimeout is only to stimulate the delayed loading effect, not necessary here!
    setTimeout(() => {
      fetch("http://localhost:8000/blog")
        .then((res) => {
          if (!res.ok) {
            // this must be put before the throw error msg to be executed.
            setIsPending(false);
            throw Error("cann't fetch the source");
          }

          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {<div> {error}</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
