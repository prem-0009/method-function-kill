/******************
 * YOUR CODE HERE *
 ******************/
//1
const newPerson = function (
  firstName = "Anonymous",
  lastName = "Person",
  age,
  married = false,
  goingOn,
  ageUp,
  spouseName,
  getFullName
) {
  const newPerson = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    married: married,

    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
    goingOn: function () {
      return this.age + 1;
    },
    ageUp: function () {
      return this.age++;
    },
    marry: function (Person2) {
      this.married = true;
      Person2.married = true;
      this.spouseName = Person2.getFullName();
      Person2.spouseName = newPerson.getFullName();
    },
    divorce: function (Person2) {
      this.married = false;
      Person2.married = false;

      delete this.spouseName;
      delete Person2.spouseName;
    },
  };
  return newPerson;
};

// //2
// const newPerson = function(firstName, lastName){
//   return {lastName};
// }

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === "undefined") {
  newPerson = undefined;
}

module.exports = newPerson;
