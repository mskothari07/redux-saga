import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  //removing <p> tags
  const normalText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home-page">
      <div className="blogs">
        {blogs?.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="blog-img">
              <img className="img" src={`../upload/${blog.img}`} alt="blog" />
            </div>
            <div className="blog-content">
              <h1 className="blog-title">{blog.title}</h1>
              <p className="blog-desc">{normalText(blog.desc)}</p>
              <Link className="link" to={`/blog/${blog.id}`}>
                <button className="blog-bn">More..</button>
              </Link>
              5
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
