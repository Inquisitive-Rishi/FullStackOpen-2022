const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Give password name and phone no as argument');
  process.exit(1);
}

const password = process.argv[2];
const personName = process.argv[3];
const personNumber = process.argv[4];

mongoose.set('strictQuery', false);

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: personName,
  number: personNumber,
});

if (process.argv.length === 5) {
  person.save().then((res) => {
    console.log(
      `Added ${person.name} with number ${person.number} to phonebook`,
      mongoose.connection.close(),
    );
  });
} else if (process.argv.length === 3) {
  Person.find({}).then((res) => {
    console.log('Phonebook:');
    res.forEach((p) => {
      console.log(p.name, p.number);
    });
    mongoose.connection.close();
  });
}
