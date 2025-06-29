const { verifyToken } = require("@clerk/clerk-sdk-node");

// This function will run before protected routes
async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || ""; // Get auth header
    const token = authHeader.replace("Bearer ", "");     // Remove "Bearer " from string

    // Verify token with Clerk
    const session = await verifyToken(token);

    // If token is valid, store user ID in request object
    req.userId = session.sub;

    next(); // Continue to the route handler
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = requireAuth;

