// Code your solution in this file.
function lowerCaseDrivers (driverNames) {
  return driverNames.map((name) => {
    return name.toLowerCase();
  });
}

function nameToAttributes (driverFullNames) {
  return driverFullNames.map((name) => {
    return {
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1]
    }
  });
}

function attributesToPhrase(driverAttrs) {
  return driverAttrs.map(function(driverAttr) {
    return `${driverAttr.name} is from ${driverAttr.hometown}`;
  });
}
