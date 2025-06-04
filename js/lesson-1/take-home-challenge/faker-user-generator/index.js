const readline = require("readline-sync");
const { faker } = require("@faker-js/faker");

// use readline instead of prompt
const count = readline.questionInt(
  "How many users would you like to generate? "
);

if (isNaN(count) || count <= 0) {
  console.log("Please enter a valid positive number.");
  process.exit(1);
}

// use count to generate users info
console.log(`\nGenerating ${count} user(s):\n`);
for (let i = 0; i < count; i++) {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()} ${faker.location.zipCode()}`,
    phone: faker.phone.number(),
    birthdate: faker.date.birthdate(),
  };

  console.log(`User ${i + 1}:`);
  console.log(`  Name: ${user.name}`);
  console.log(`  Email: ${user.email}`);
  console.log(`  Address: ${user.address}`);
  console.log(`  Phone: ${user.phone}`);
  console.log(`  Birthdate: ${user.birthdate}`);
  console.log("--------------------------");
}
