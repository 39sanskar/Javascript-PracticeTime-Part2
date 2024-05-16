// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 21 years old and lives in India"

// Call the logData() function to verify that it works

let person = {
    name: "Sanskar-Mishra",
    age: 21,
    country: "India"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


