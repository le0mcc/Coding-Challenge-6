// Coding Challenge: Employee Shift Management System


// Task 1:  Create an employee array of employee objects
let employees = [
    {name : "Andrew", shifts : [{day : "Monday", hours : 5}, {day : "Wednesday", hours : 4},{day : "Friday", hours : 10}]},
    {name : "Bailey", shifts : [{day : "Tuesday", hours : 8}, {day : "Thursday", hours : 8}]},
    {name : "Carly", shifts : [{day : "Saturday", hours : 10}]},
    {name : "Denae", shifts : [{day : "Monday", hours : 3}, {day : "Wednesday", hours : 4},{day : "Sunday", hours : 10}]}
];


// Task 2: Create a function to display employee shift details
function displayEmployeeShifts (employee) {
    console.log(`Employee name: ${employee.name}`);
    employee.shifts.forEach(shift =>
        console.log(`Shift on ${shift.day}: ${shift.hours}`)
    )
};
displayEmployeeShifts(employees[0]);

// Task 3: Create a function to assign a new shift
function assignShift (aName, aDay, aHours) {
    let findEmployee = employees.find(person => person.name === aName);
    if (findEmployee) {
        // find employee and see if they have a shift for that day
        let shiftExists = findEmployee.shifts.find(shift => shift.day === aDay);
        if (shiftExists) {
            return `Error. Shift already scheduled for ${aName} on ${aDay}`
        }
        else {
            findEmployee.shifts.push({day : aDay, hours : aHours});
            return `Shift assigned to ${aName}. ${aDay} for ${aHours} hours.`
        };
    }
    else {
        return `Employee not found.`
    };
};
// call function
console.log(assignShift("Carly","Sunday",3));
console.log(employees);
