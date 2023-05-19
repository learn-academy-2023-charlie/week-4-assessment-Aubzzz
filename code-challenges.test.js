// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe("newColors", () => {
//   it("create a function that takes an array and removes the first item and shuffles the remainder", () => {
//     expect(newColors(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//     expect(newColors(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
//   })
// })

//RED- Good failure
// FAIL  ./code-challenges.test.js
// newColors
//   ✕ create a function that takes an array and removes the first item and shuffles the remainder

// ● newColors › create a function that takes an array and removes the first item and shuffles the remainder

//   ReferenceError: newColors is not defined

//     30 | describe("newColors", () => {
//     31 |   it("create a function that takes an array and removes the first item and shuffles the remainder", () => {
//   > 32 |     expect(newColors(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//        |     ^
//     33 |     expect(newColors(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
//     34 |   })
//     35 | })

//     at Object.expect (code-challenges.test.js:32:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total

// b) Create the function that makes the test pass.
//PseudoCode
//Input: colors1
//Output:["yellow", "blue", "pink", "green"] in varying orders
//Process: create function called newColors with a parameter of any array, then create a new variable to store the new value, after removing the first value from the original array. Then, iterate through the new array with a for loop. Create a new variable to store the randomized shuffle, called newShuff followed by math.random and math.floor to shuffle the entirety of the new array [i]
//**having issues with the terminal running the function/it just takes away the file path, without giving an outcome

const newColors = (array) => {
  const shuffleColors = colors1.shift();
for (let i = colors1.length -1; i>0; i++) {
  const newShuf = Math.floor(Math.random() * (i+1));
}
}
console.logt(newColors(colors1))




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// describe("newVotes", () => {
//   it("create a function that takes an object that contains up & down votes and returns the total tally", () => {
//     expect(newVotes(votes1)).toEqual("11")
//     expect(newVotes(votes2)).toEqual("-31")
//   })
// })

//RED- Good failure
// FAIL  ./code-challenges.test.js
// newVotes
//   ✕ create a function that takes an object that contains up & down votes and returns the total tally (1 ms)

// ● newVotes › create a function that takes an object that contains up & down votes and returns the total tally

//   ReferenceError: newVotes is not defined

//     75 | describe("newVotes", () => {
//     76 |   it("create a function that takes an object that contains up & down votes and returns the total tally", () => {
//   > 77 |     expect(newVotes(votes1)).toEqual("11")
//        |     ^
//     78 |     expect(newVotes(votes2)).toEqual("-31")
//     79 |   })
//     80 | })

//     at Object.expect (code-challenges.test.js:77:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.162 s, estimated 1 s

// b) Create the function that makes the test pass.
//PseudoCode
//Input: votes1 and votes2
//Output:11, -31
//Process: create a function called newVotes that takes a number as a parameter. Then create a new variable to upVotes and downVotes that stores the difference between them. Apply a math equation to find the difference(?). Then console log newVotes with the appropriate pre set variable.

const newVotes = (number) =>{
  const {upVotes: 13, downVotes: 2}
}
console.log(newVotes(votes1))




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// describe("newArray", () => {
//   it("create a function that takes two arrays and returns one with no duplicate values", () => {
//     expect(newArray(dataTypesArray1)).toEqual(["array", "object", "number", "string", "Boolean"])
//     expect(newArray(dataTypesArray2)).toEqual(["string", "null", "Boolean", "string", "undefined"])
//   })
// })

//RED - Good Failure
// FAIL  ./code-challenges.test.js
// newArray
//   ✕ create a function that takes an object that contains up & down votes and returns the total tally

// ● newArray › create a function that takes an object that contains up & down votes and returns the total tally

//   ReferenceError: newArray is not defined

//     116 | describe("newArray", () => {
//     117 |   it("create a function that takes two arrays and returns one with no duplicate values", () => {
//   > 118 |     expect(newArray(dataTypesArray1)).toEqual(["array", "object", "number", "string", "Boolean"])
//         |     ^
//     119 |     expect(newArray(dataTypesArray2)).toEqual(["string", "null", "Boolean", "string", "undefined"])
//     120 |   })
//     121 | })

//     at Object.expect (code-challenges.test.js:118:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.161 s, estimated 1 s
// Ran all test suites.
// error Command failed wi

// b) Create the function that makes the test pass.
//PseudoCode
//Input: dataTypesArray1, dataTypesArray2
//Output: ["array", "object", "number", "string", "Boolean", "null", "undefined"], both arrays combined, without repeating values
//Process: Create a function called newArray that takes in two arrays as arguments. Combine both arrays using the object 'Set'. Was confused on this one so I was trying to figure out this througth notes an ChatGPT.

const newArray = (array1, array2) => {
const combinedArrays = Set([...array1, ...array2])
}
console.log(newArray(dataTypesArray1, dataTypesArray2))