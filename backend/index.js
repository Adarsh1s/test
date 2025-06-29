const express = require("express");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");
const app = express();

// Clerk Middleware
app.use(ClerkExpressWithAuth());

// Example protected route
app.get("/private", (req, res) => {
  const userId = req.auth.userId;
  if (!userId) return res.status(401).send("Unauthorized");
  res.send(`Hello, user ${userId}`);
});


const express = require("express");
const requireAuth = require("./middleware/requireAuth");

const app = express();

app.get("/public", (req, res) => {
  res.send("This route is public. Anyone can access.");
});

// ✅ This route requires the user to be logged in
app.get("/private", requireAuth, (req, res) => {
  res.send(`Hello user ${req.userId}, you're authorized!`);
});

// ✅ Image upload route protected
app.post("/upload", requireAuth, async (req, res) => {
  // Only logged-in users can upload
  res.send("Image uploaded!");
});
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

