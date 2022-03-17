let table = document.getElementById("table");
let name = document.getElementById("my_name");
let age = document.getElementById("my_age");
let gender = document.getElementById("my_gender")
let arr_data = [
    { name: "George", age: 12, gender: "male" },
    { name: "Tricia", age: 15, gender: "female" },
    { name: "Lion", age: 17, gender: "male" },
    { name: "Lioness", age: 19, gender: "female" }
];

if (localStorage.getItem("loop")) {
    arr_data=JSON.parse(localStorage.getItem("loop"));
}
else{
    arr_data=arr_data;
localStorage.setItem("loop", JSON.stringify(arr_data)); 
}



function display(params) {
        table.innerHTML = "";
        table.innerHTML += `<th>S/N</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>GENDER</th>
    <th>ACTION</th>
    `
 arr_data.forEach((max, p) =>{
 table.innerHTML += `<tr>
<td>${p + 1}</td>
<td>${max.name}</td>
<td>${max.age}</td>
<td>${max.gender}</td>
<td><button class="bg-danger" onclick="handle_delete(${p})">DELETE</button></td>
</tr>
`
})
};
display();

function handle_delete(params) {
    arr_data.splice(params, 1);
    localStorage.setItem("loop", JSON.stringify(arr_data));
    console.log(name, age, gender);
    display();
};



function handle_name(params) {
    name = params.value;
}

function handle_age(params) {
    age = params.value;
}

function handle_gender(params) {
    gender = params.value;
}

function handle_add(params) {
    arr_data.push({ name: name, age: age, gender: gender });
    localStorage.setItem("loop", JSON.stringify(arr_data));
    console.log(name, age, gender);
    display();
}





