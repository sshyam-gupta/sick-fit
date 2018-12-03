const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: "https://eu1.prisma.sh/shyam-gupta-ccf55c/sick-fit/dev",
  // secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;