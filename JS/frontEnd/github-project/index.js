/*
- fetch is an inbuilt JS library for handling HTTP requests
- It takes two parameters

- fetch(@param1, @param2) => response is an object with the function then()

- @param1 is the url
- @param2 is the configuration parameter. It includes things like the header, the method etc...

*/

// const requestOptions = {
//   method: "GET",
//   redirect: "follow"
// };

// fetch("api.github.com/users", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

/*
Code without a promise
1. Create a var
2. Console.log the value of the var
3. Create and call a func that modifies this var
4. Console.log the value of the var
*/

let flow = "This flow";
console.log("31:", flow);

function testFunc(){
    flow = "Updated flow";
}

testFunc();

console.log("39:", flow);