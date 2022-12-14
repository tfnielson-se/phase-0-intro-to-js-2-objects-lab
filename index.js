// Write your solution in this file!
const employee = {
    name: `Sam`,
    streetAddress: ``
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let newEmployee = {...employee, [key]: value}
    return newEmployee
}

updateEmployeeWithKeyAndValue(employee, streetAddress, `11 Broadway`);

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[`streetAddress`] = `12 Broadway`;
    return employee
}

function deleteFromEmployeeByKey (employee, key) {
    let newEmp = {...employee} 
    delete(newEmp[key]);
    return newEmp

}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    let newEmp = employee
    delete(employee[key])
    return newEmp
}