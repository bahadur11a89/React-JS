import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const [comments, setComments] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // basic validation
    if (!formData.username || !formData.remarks) {
      alert("Please fill all fields!");
      return;
    }

    // add new comment
    setComments((prev) => [...prev, formData]);

    // reset form
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <>
      <h2>Give a Comment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <br /><br />

        <textarea
          placeholder="Enter remarks"
          name="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        />

        <br /><br />

        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />

        <br /><br />

        <button type="submit">Add Comment</button>
      </form>

      <hr />

      <h3>All Comments</h3>

      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        comments.map((c, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <p><b>User:</b> {c.username}</p>
            <p><b>Remarks:</b> {c.remarks}</p>
            <p><b>Rating:</b> {c.rating}</p>
          </div>
        ))
      )}
    </>
  );
}