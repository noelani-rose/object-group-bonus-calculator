// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {  
  // your logic here
  let employeeBonus = {
    name: employee.name,
  };
  
  // Start of bonusPercentage if
  if (employee.reviewRating <= 2){
    employeeBonus.bonusPercentage = 1;
  }
  else if (employee.reviewRating === 3){
    employeeBonus.bonusPercentage = 1.04;
  }
  else if (employee.reviewRating === 4){
    employeeBonus.bonusPercentage=1.06;
  }
  else{
    employeeBonus.bonusPercentage=1.1;
  };
  
  if (employee.employeeNumber < 10000 ){
    employeeBonus.bonusPercentage += .05;
  };
  
  if (employee.annualSalary>65000 && employeeBonus.bonusPercentage>1){
    employeeBonus.bonusPercentage=employeeBonus.bonusPercentage-=.01
  };
  
  if (employeeBonus.bonusPercentage > 1.13){
    employeeBonus.bonusPercentage = 1.13
  }
  
  //end of the bonusPercentage if
  
  //create total compensation attribute
  
  employeeBonus.totalCompesation = Math.round(employee.annualSalary * employeeBonus.bonusPercentage);
  
  
  // total compensation attribute created
  //create total bonus
  
  employeeBonus.totalBonus = Math.ceil((employee.annualSalary * employeeBonus.bonusPercentage) - employee.annualSalary);
  
  // return new object with bonus results
  
  employeeBonus.bonusPercentage = String(employeeBonus.bonusPercentage).slice(-1);
  employeeBonus.bonusPercentage = employeeBonus.bonusPercentage+'%';
  return employeeBonus;
}

for(let people of employees ){
  console.log(people.name, calculateIndividualEmployeeBonus(people));
};

