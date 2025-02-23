import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ plantId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({ user: '', rating: 0, comment: '' });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5003/api/plants/${plantId}/reviews`);
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [plantId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5003/api/plants/${plantId}/reviews`, newComment);
      setComments([...comments, response.data]);
      setNewComment({ user: '', rating: 0, comment: '' }); // Reset the form
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (loading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      {/* Comments Section - Wider than the form */}
      <div className="flex-1 lg:flex-[3] bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-medium text-green-700 mb-4">Customer Reviews</h3>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="border-b pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{comment.user}</h4>
                  <span className="text-yellow-500 flex items-center">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="ml-1">{comment.rating.toFixed(1)}</span>
                  </span>
                </div>
                <p className="text-gray-700 mt-2">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Comment Form - Narrower than the reviews */}
      <form onSubmit={handleSubmit} className="flex-1 lg:flex-[1] bg-gray-100 rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold mb-4">Post a Comment</h4>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            value={newComment.user}
            onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
            className="border rounded w-full p-2 focus:outline-none focus:ring focus:ring-green-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Rating</label>
          <input
            type="number"
            value={newComment.rating}
            onChange={(e) => setNewComment({ ...newComment, rating: parseFloat(e.target.value) })}
            min="1"
            max="5"
            step="0.1"
            className="border rounded w-full p-2 focus:outline-none focus:ring focus:ring-green-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Comment</label>
          <textarea
            value={newComment.comment}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
            className="border rounded w-full p-2 focus:outline-none focus:ring focus:ring-green-400"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Post</button>
      </form>
    </div>
  );
};

export default Comments;
