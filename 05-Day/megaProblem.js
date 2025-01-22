const data = [
    {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "phoneno": "123-456-7890",
        "age": 28
    },
    {
        "firstname": "Jane",
        "lastname": "Smith",
        "email": "jane.smith@example.com",
        "phoneno": "234-567-8901",
        "age": 34
    },
    {
        "firstname": "Michael",
        "lastname": "Johnson",
        "email": "michael.johnson@example.com",
        "phoneno": "345-678-9012",
        "age": 41
    },
    {
        "firstname": "Emily",
        "lastname": "Davis",
        "email": "emily.davis@example.com",
        "phoneno": "456-789-0123",
        "age": 25
    },
    {
        "firstname": "David",
        "lastname": "Williams",
        "email": "david.williams@example.com",
        "phoneno": "567-890-1234",
        "age": 25
    }
]
//map
// let fullName = data.map( x => x.firstname +" "+x.lastname )
// console.log(fullName)

//reduce
// let agesResult = data.reduce((acc,current)=>{
//    if (acc[current.age]) {
//     acc[current.age] = ++acc[current.age]
//    } else {
//     acc[current.age] = 1;
//    }
//    return acc;
// },{})
// console.log(agesResult);

//filter
// let filteredData = data.filter(x => x.age > 30)
// console.log(filteredData);

//filter and map
// let filteredData = data.filter(x => x.age > 30).map(y=>y.firstname)
// console.log(filteredData);

// reduce and push
// let find = data.reduce((acc, current)=>{
//     if (current.age>30) {acc.push(current.firstname)}
//     return acc;
// },[])
// console.log(find);
