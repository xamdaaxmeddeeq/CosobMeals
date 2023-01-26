const menus = require("./menu");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  for (let menu of menus) {
    await prisma.menu.create({
      data: menu,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
