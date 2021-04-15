// const age = 20
// age = 30 //ILLEGAL
// const person = {
//     name: "Diego",
//     email: "diego@strive.school"
// }
// person.surname ="Banovaz" //LEGAL
// person = {} //ILLEGAL

// var x = 10
// console.log(x)
// if (true){
//     var x = 2
//     console.log(x)
// }

// console.log(x)

// let x = 10
// console.log(x)
// if (true){
//     let x = 2
//     console.log(x)
// }

// console.log(x)

//DEFAULT PARAMS
function calculateTotal(products, discount = 0){
    let total = 0
    for (let i = 0; i < products.length; i++){
        total += products[i].cost
    }

    return total - (total * (discount /100))
}

function calculateTotal(products, discount){
    if (!discount) discount = 0

    let total = 0
    for (let i = 0; i < products.length; i++){
        total += products[i].cost
    }

    return total - (total * (discount /100))
}

// REST PARAMETERS
function calculateShippingCost(address, ...extraAddresses) {
    console.log(address) // => Italy
    console.log(extraAddresses) // ["Germany", "UK", "Denmark"]
}

calculateShippingCost("Italy") // rest = []
calculateShippingCost("Italy", "Germany", "UK", "Denmark") // rest = ["Germany", "UK", "Denmark"]

// ARROWS VS Function

const myObject = {
    name: "John",
    myMethod: function(){
        console.log(this) // this => reference to the parent object, reference to my object
        return this.name
    }
}

const myComplexObject = {
    name: "John",
    jobs: [ "Student", "War Veteran", "Soldier" ],
    myMethod: function() {
        // this for the FUNCTION version will refer to myMethod
        // this.jobs.forEach(function(job) { console.log(this.name + " is a ", job) })
        // this for the ARROW function will refer to myComplexObject
        this.jobs.forEach((job) => { console.log(this.name + "is a ", job)})

        //console.log(this.jobs) // this => reference to the parent object, reference to my object
        return this.jobs
    }
}

function whatever() {
    // this = parent.this
}

() => {
    // this is inherited not replace
}

// DESTRUCTURING
const myStudent = {
    name:"Testing",
    email:"student@strive.school"
}

//OLD WAY
const name = myStudent.name
const email = myStudent.email
const value = myStudent.value ? myStudent.value : 10

//NEW WAY
const { name, email, value = 10 } = myStudent

const colors = [ "red", "green", "blue"]
const [ firstColor, secondColor ] = colors 
// firstColor = red
// secondColor = green
const [ , , thirdColor, forthColor = "test"]

// SPREAD OPERATOR
// ...







