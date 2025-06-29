const express = require("express");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");
const requireAuth = require("./middleware/requireAuth");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
app.use(express.json());

// ✅ Clerk Middleware
app.use(ClerkExpressWithAuth());

// ✅ Public route
app.get("/public", (req, res) => {
  res.send("This route is public. Anyone can access.");
});

// ✅ Clerk-protected route
app.get("/private", (req, res) => {
  const userId = req.auth?.userId;
  if (!userId) return res.status(401).send("Unauthorized");
  res.send(`Hello, user ${userId}`);
});

// ✅ App-level protected route using custom middleware
app.get("/secure", requireAuth, (req, res) => {
  res.send(`Hello user ${req.userId}, you're authorized!`);
});

// ✅ Protected upload route
app.post("/upload", requireAuth, async (req, res) => {
  // Handle file/image logic here
  res.send("Image uploaded!");
});

// ✅ User routes from routes/user.js
app.use("/api", userRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

