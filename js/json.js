let jsonObj = {
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Shmit"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        }
    ]
}

console.log(jsonObj.employees[1].lastName);

for (let i = 0; i < jsonObj.employees.length; i++) {
    console.log(jsonObj.employees[i].firstName + ' ' + jsonObj.employees[i].lastName);
}

jsonObj.employees.forEach(function (element, index) {
    console.log(element.firstName + ' ' + element.lastName);
})
