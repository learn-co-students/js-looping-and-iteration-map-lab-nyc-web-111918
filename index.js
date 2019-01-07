// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lowercase = drivers.map(function(driver){
    return driver.toLowerCase()});
    return lowercase;
}
function nameToAttributes(drivers){
  const split = drivers.map(function(driver){return driver.split(" ")});
  const nameObj = split.map(function(name){return Object.assign({}, {firstName: name[0], lastName: name[1]});});
  return nameObj;
}
function attributesToPhrase(drivers){
  const greeting = drivers.map(function (names){
    debugger
    return `${names["name"]} is from ${names["hometown"]}`});
  return greeting;
}
