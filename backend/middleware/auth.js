const { verifyToken } = require("@clerk/clerk-sdk-node");

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace("Bearer ", "");

    const session = await verifyToken(token);
    req.userId = session.sub;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = { requireAuth };

