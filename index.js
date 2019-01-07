// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {return driver.toLowerCase();})
}

function nameToAttributes (drivers) {
  return drivers.map(function(driver) {
    const name1 = driver.split(' ')[0]
    const name2 = driver.split(' ')[1]
    return { firstName: name1, lastName: name2 };
})
}

function attributesToPhrase (drivers) {
  return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`})
}
