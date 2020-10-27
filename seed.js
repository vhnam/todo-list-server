const fs = require("fs");
const faker = require("faker");
const { v4: uuidv4 } = require("uuid");

const list = [];

function getRandomDate(from, to) {
  from = from.getTime();
  to = to.getTime();
  return new Date(from + Math.random() * (to - from));
}

for (let i = 0; i < 10; i++) {
  list.push({
    id: uuidv4(),
    name: faker.name.findName(),
    description: faker.lorem.paragraphs(),
    createdAt: getRandomDate(new Date("2018-09-11"), new Date()).getTime(),
  });
}

fs.writeFile("./db.json", JSON.stringify({ list }), (err) => {
  if (err) throw err;
  console.log("It's saved!");
});
