let employee = {

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, { [key]: value})
}

function deleteFromEmployeeByKey(employee, key) {
   const newObject = Object.assign({}, employee)
   delete newObject[key]
   return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject1 = Object.assign(employee, key)
   delete newObject1[key]
   return newObject1
}
