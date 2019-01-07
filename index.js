// Code your solution in this file.
function lowerCaseDrivers(driversArr) {
  return driversArr.map(function(names){
    return names.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name){
     return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]}
  })
}
function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return`${driver.name} is from ${driver.hometown}`
  })
}
