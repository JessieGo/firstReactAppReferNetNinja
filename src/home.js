import { useEffect, useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("mario");

  useEffect(() => {
    console.log("useEffect ran");
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="All blogs"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("Jessie")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
