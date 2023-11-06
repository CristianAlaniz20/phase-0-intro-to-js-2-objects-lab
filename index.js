// Write your solution in this file!
const employee = {
    Joe: "IDK",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
};

const copyOfEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    "Sam", "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key, value) {
    delete copyOfEmployee.Sam;
    return {
        ...obj,
        [key]: value,
    };
};

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete copyOfEmployee.Sam;
    obj[key] = value;
    return obj;
};

