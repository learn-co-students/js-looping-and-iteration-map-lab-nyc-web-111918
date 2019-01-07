// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(name => name.toLowerCase())
};

function nameToAttributes(array) {
  return array.map(name => Object.assign({firstName: name.split(' ')[0], lastName: name.split(' ')[1]}))
};

function attributesToPhrase(array) {
  return array.map(driver => `${driver.name} is from ${driver.hometown}`)
};
