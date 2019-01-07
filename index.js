function lowerCaseDrivers(array){
  return array.map(function(name){
    return name.toLowerCase()
  })

}

function nameToAttributes(array){
  debugger
  return array.map(function(names){
    let newArray = names.split(" ")
    return {firstName: newArray[0], lastName: newArray[1]}
  })
}

function attributesToPhrase(array){
  return array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
