const car = {
    name: "Mahindra Thar",
    price: 1735000,
    bodyType: "SUV",
    fuelType: "Desiel",
    Mileage: 9,
    carDetails: function () {
      return "the " + car.name + "'s price " + car.price;
    }
  };
  console.log(car.carDetails());
  //01 end
  const studentDetails = {
    name: "abcd",
    age: 19,
    grade: "12th"
  };
  studentDetails.age = 30;
  console.log(studentDetails.age);
  ///02 Logic end
  const studentDetails02 = {
    name: "abcd",
    age: 19,
    grade: "12th"
  };
  console.log(Object.keys(studentDetails02));
  //03 Logic end
  console.log(Object.hasOwn(studentDetails, "age"));
  //04 Logic end
  const square = Math.pow(4,4);
  console.log(square);
  //05 Logic end
  function convertString(string){
   const result = string.split("").reverse().join("")
    console.log( result )
  }
  convertString("Naushad Ahmad")
  
  //06 Logic end
  
  class UserManager {
    constructor() {
      this.userMap = new Map();
    }
  
    // Add a new user record
    addUser(name, age, email) {
      if (this.userMap.has(name)) {
        console.log(`User with name '${name}' already exists.`);
        return;
      }
      this.userMap.set(name, { age, email });
      console.log(`User '${name}' added successfully.`);
    }
  
    // Update an existing user record
    updateUser(name, age, email) {
      if (!this.userMap.has(name)) {
        console.log(`User with name '${name}' does not exist.`);
        return;
      }
      this.userMap.set(name, { age, email });
      console.log(`User '${name}' updated successfully.`);
    }
  
    // Delete a user record
    deleteUser(name) {
      if (!this.userMap.has(name)) {
        console.log(`User with name '${name}' does not exist.`);
        return;
      }
      this.userMap.delete(name);
      console.log(`User '${name}' deleted successfully.`);
    }
  
    // Display all user records
    displayUsers() {
      console.log("All Users:");
      for (const [name, user] of this.userMap) {
        console.log(`Name: ${name}, Age: ${user.age}, Email: ${user.email}`);
      }
    }
  }
  
  // Create an instance of UserManager
  const userManager = new UserManager();
  
  // Add users
  userManager.addUser("John Doe", 30, "john.doe@example.com");
  userManager.addUser("Jane Doe", 25, "jane.doe@example.com");
  
  // Display all users
  userManager.displayUsers();
  
  // Update a user
  userManager.updateUser("John Doe", 31, "john.doe.updated@example.com");
  
  // Display all users
  userManager.displayUsers();
  
  // Delete a user
  userManager.deleteUser("Jane Doe");
  
  // Display all users
  userManager.displayUsers();