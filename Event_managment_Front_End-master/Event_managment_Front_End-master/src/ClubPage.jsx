import React, { useState } from "react";
import "./ClubPage.css";
import './Profile'
import { useNavigate } from 'react-router-dom';
import './Budget';
import './Calandar';
import './About';
import logo from "./LOGO.jpg";

function ClubPage() {
  const navigate = useNavigate();
  const handleSubmitH = (e) => {
    navigate("/home")
  }
  const handleSubmitR = (e) => {
    navigate("/About")
  }
  const handleSubmitP =(e) =>{
    navigate("/Profile")
  }
  const handleSubmitC =(e) =>{
    navigate("/Calander")
  }
  const handleSubmitB =(e) =>{
    navigate("/Budget")
  }
  const handleSubmitPO =(e) =>{
    navigate('/ClubPage')
  }
  const [posts, setPosts] = useState([]);
  const [clubName, setClubName] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClubNameChange = (event) => {
    setClubName(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      clubName,
      caption,
      image,
      comments: []
    };
    setPosts([...posts, newPost]);
    setClubName("");
    setCaption("");
    setImage("");
  };

  const handleAddComment = (event, index) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      const updatedPosts = [...posts];
      updatedPosts[index].comments.push(comment);
      setPosts(updatedPosts);
      setComment("");
    }
  };

  const handlePostClick = (index) => {
    setSelectedPost(index);
  };

  return (
    <div>
           <div className="NavBar">
          <div className="navLeft"><img src={logo} alt="Logo" className="logo" />MU-EVENTS</div>
          <ul className="navRight">
            <li onClick={handleSubmitH}>Home</li>
            <li onClick={handleSubmitR}>About</li>
            <li onClick={handleSubmitPO}>Posts</li>
            <li onClick={handleSubmitC}>Calander</li> 
            <li onClick={handleSubmitB}>Budget</li>
            <li onClick={handleSubmitP}>Profile</li>

          </ul>
        </div>
      <div className="post-page">
        <div className="post-form">
          <div className="post-container">
            <h2>CREATE A POST</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="clubName">Club Name:</label>
                <input
                  type="text"
                  id="clubName"
                  name="clubName"
                  value={clubName}
                  onChange={handleClubNameChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="caption">Caption:</label>
                <textarea
                  id="caption"
                  name="caption"
                  value={caption}
                  onChange={handleCaptionChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="imageUpload">Choose File:</label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="post-preview">
          <div className="post-feed">
            {posts.map((post, index) => (
              <div
                className={`post ${index === selectedPost ? "selected" : ""}`}
                key={index}
                onClick={() => handlePostClick(index)}
              >
                <img src={post.image} alt="Post" />
                <div className="post-details">
                  <h3>{post.clubName}</h3>
                  <p>{post.caption}</p>
                </div>
                <div className="comments">
                  {post.comments.map((comment, commentIndex) => (
                    <div className="comment" key={commentIndex}>
                      {comment}
                    </div>
                  ))}
                </div>
                <form
                  className="comment-form"
                  onSubmit={(event) => handleAddComment(event, index)}
                >
                  <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment"
                  />
                  <button type="submit">Post Comment</button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubPage;