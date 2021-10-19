const employee = {}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    //return Object.assign({}, employee, { [key]: value})
    //console.log(employee, key, value);
    return {...employee, [key]: value}
}



const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    // console.log(employee, key, value);
    // employee['name'] = 'George'
    // console.log(employee)
    employee[key] = value
    //console.log(employee)
    return employee
}

const deleteFromEmployeeByKey = (employee, key) => {
    let newObject = Object.assign({}, employee)
    delete newObject[key];
    return newObject
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    const newObject1 = Object.assign(employee, key)
    delete newObject1[key]
    return newObject1
 }







// let employee = {

// }

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign({}, employee, { [key]: value})
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign(employee, { [key]: value})
// }

// function deleteFromEmployeeByKey(employee, key) {
//    const newObject = Object.assign({}, employee)
//    delete newObject[key]
//    return newObject
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     const newObject1 = Object.assign(employee, key)
//    delete newObject1[key]
//    return newObject1
// }
