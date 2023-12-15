
var employee = {
    name: 'Sam NN',
    streetAddress: '11 broadway'
  };
  

  function updateEmployeeWithKeyAndValue(employee, key, value) {

    return { ...employees, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee; 
  }

  
