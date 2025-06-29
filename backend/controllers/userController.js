const { PrismaClient } = require("@prisma/client");
const { users } = require("@clerk/clerk-sdk-node");
const prisma = new PrismaClient();

async function syncClerkUser(req, res) {
  try {
    const clerkUser = await users.getUser(req.userId);
    const email = clerkUser.emailAddresses[0].emailAddress;
    const name = clerkUser.username;

    const existing = await prisma.user.findUnique({
      where: { email }
    });

    if (!existing) {
      await prisma.user.create({
        data: {
          email,
          name,
          provider: "clerk"
        }
      });
    }

    res.status(200).json({ message: "User synced" });
  } catch (err) {
    console.error("Sync error:", err);
    res.status(500).json({ message: "Sync failed" });
  }
}

module.exports = { syncClerkUser };

