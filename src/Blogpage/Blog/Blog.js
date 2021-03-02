import React, { useState, useEffect } from "react";
import "./Blog.css";

import { app } from "../../Base";
const db = app.firestore();
function Blog() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db.collection("utac").onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setUploads(item);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="Blog_Container">
        {uploads.map(({ id, descriptions, avatar }) => (
          <div className="Blog_ContainerWrapper">
            <div className="TopImage_Container">Main Image Here</div>
            <div className="BlogContent_Container">
              <div className="BlogStory_Container">
                <h3>The Heading of the Blog</h3>
                <p>The Blog content here</p>
              </div>
              <div className="BlogCards_Container">Card Here</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
