require('dotenv').config();

//Install and Set Up Mongoose lesson-1
let uri = 'mongodb+srv://User:tJv1Az5bg4cSvSfO@atlascluster.m4jrb0d.mongodb.net/vijayadb1?retryWrites=true&w=majority&appName=AtlasCluster'
console.log(process.env.MONGO_URI)
let mongoose = require('mongoose')
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Create a Model-lesson-2
let peopleSchema = new mongoose.Schema({
  name :{type: String, require: true },
  age : Number,
  favoriteFoods : [String]
})

let Person = mongoose.model('Person', peopleSchema)

let vijaya = new Person ({name : 'Ratna', age :27, favoriteFoods : ['biryani', 'icecreeam']})
console.log(vijaya)

//Create and Save a Record of a Model lesson-3
const createAndSavePerson = function(done){
  let vijayaratna = new Person ({name : 'RVRK', age :22, favoriteFoods : ['Potato']})
  vijayaratna.save((error, data) => {
    if(error){
      console.log(error)
    }else{
      done(null, data)
    }
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
