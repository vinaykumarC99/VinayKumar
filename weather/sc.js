//json
console.log("=== Hour 1:JSON Basics===");
let student = {
        name:"vinay",
        age : 21,
        marks: [85,95,75]
    };

    let jsonString = JSON.stringify(student);
    console.log("JSON String:",jsonString);
     
    let parsedObj = JSON.parse(jsonString);
    console.log("Parsed Object:".parsedObj);


console.log("=== Hour 2:AJAX with Fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => response.json())
.then(data => console.log("fetched data:",data))
.catch(error => console.error("Error:",error)) 


fetch("https://jsonplaceholder.typicode.com/users/")
.then(res => res.json())
.then(users => {
    let output = "<h3>User List</h3><ul>";
    users.forEach(user => {
        output += `<li>${user.name} - ${user.email})</li>`;
    });
    output += "</ul>";
    document.body.innerHTML += output;
});
