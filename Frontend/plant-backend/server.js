const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy review data
let reviews = {
  1: [
    { user: "John", rating: 4.5, comment: "Nice plant!" },
    { user: "Alice", rating: 4, comment: "Thriving well in indirect light!" }
  ],
  2: [
    { user: "Mark", rating: 4, comment: "Looks great in the garden!" }
  ]
};


// Get reviews for a specific plant
app.get('/api/plants/:id/reviews', (req, res) => {
  const plantId = req.params.id;
  res.json(reviews[plantId] || []);
});

// Add a new review for a specific plant
app.post('/api/plants/:id/reviews', (req, res) => {
  const plantId = req.params.id;
  const newReview = req.body; // {user, rating, comment}

  console.log("Received review:", newReview);

  if (!reviews[plantId]) {
    reviews[plantId] = [];
  }
  reviews[plantId].push(newReview);
  
  res.status(201).json(newReview);
});

// Delete a specific review by its index for a specific plant
app.delete('/api/plants/:plantId/reviews/:reviewIndex', (req, res) => {
  const plantId = req.params.plantId;
  const reviewIndex = parseInt(req.params.reviewIndex);

  if (reviews[plantId] && reviews[plantId][reviewIndex]) {
    reviews[plantId].splice(reviewIndex, 1); // Remove the review by index
    res.status(200).json({ message: `Review at index ${reviewIndex} deleted` });
  } else {
    res.status(404).json({ message: "Review not found" });
  }
});

//curl -X DELETE http://127.0.0.1:5001/api/plants/1/reviews/1


// Start the server
const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
