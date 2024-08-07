
const usersName = ['abc','abc2','abc4','abc5','abc9','abc01'];

function checkUsersName (name) {
    index = 0;
    for (; index < usersName.length; index++) {
        if (name === usersName[index]) {
            console.log(`${name} is a valid user`);
            break;
        }
    }
    if (name !== usersName[index]) {
        console.log(`${name} is not a valid user`);
    }
}
checkUsersName("abc01");
checkUsersName("abc9");
//Logic 01 end
function priceCalculator(...prices) {
    //initialize a variable to hold the sum
    totalPrice = 0;
//call the forEach method to sum the params
    prices.forEach(function(price){
         totalPrice += price
    })
    // return totalPrice; 
    console.log(totalPrice);  
}
 priceCalculator(12,13,14,15);
 priceCalculator(122,153,14,915)
//Logic 02 end
const dataArray = [
    { name: 'Alice', number: 42 },
    { name: 'Bob', number: 35 },
    { name: 'Charlie', number: 58 },
    { name: 'David', number: 22 },
    { name: 'Eve', number: 17 },
    { name: 'Frank', number: 65 },
    { name: 'Grace', number: 81 },
    { name: 'Heidi', number: 49 },
    { name: 'Ivan', number: 28 },
    { name: 'Judy', number: 93 },
    { name: 'Kenny', number: 97 },
    { name: 'Laura', number: 91 },
    { name: 'Mallory', number: 74 },
    { name: 'Niaj', number: 98 },
    { name: 'Oscar', number: 66 },
    { name: 'Peggy', number: 93 },
    { name: 'Quentin', number: 44 },
    { name: 'Rupert', number: 97 }
  ];
  const filterData = dataArray.filter(function(data){
    return data.number > 90; 
  })
//   console.log(dataArray);
console.log(filterData.length);
for (let index = 0; index < filterData.length; index++) {
    // const element = filterData[index];
    // console.log("Congratulation! " + filterData[index].name + "you have clear the exam with the number:" + filterData[index].number );
    console.log(`Congratulation! ${filterData[index].name} you have cleared the exam with the number: ${filterData[index].number}`);
  
}
  
//Logic 03 end

const products = [
    { product: "T-Shirt", price: 15.99 },
    { product: "Jeans", price: 39.95 },
    { product: "Coffee Mug", price: 800.50 },
    { product: "Laptop", price: 799.99 },
  ];
 function findMaxPrice(){
    const maxPrice =  products.map( e => e.price);
  console.log(Math.max(...maxPrice));
  console.log(Math.min(...maxPrice));
 }
 findMaxPrice();
  
//Logic 04 end
const guests = ['Aman','naman','sohit','mohan','subham','farman'];
const printGuests = guests.toString()
//we can use here join() method also. It behaives like toString method but in join() we can
//also define a type of seperator array.join("*")
console.log(printGuests);
//Logic 05 end
const productDetails = {
    item: 'Laptop',
    model: 'Y1 plus',
    brand: 'Infnix',
    price: 28000,
    year: 2023
};

function detailsPrinter() {
    console.log('The product details are below:');
    for (const key in productDetails) {
        if (productDetails.hasOwnProperty(key)) {
            console.log(`${key}: ${productDetails[key]}`);
        }
    }
}

detailsPrinter();
//Logic 06 end
function otpGenerator (){
   const numbers = [0,1,2,3,4,5,6,7,8,9];
   let OTP = "";
   for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random()*9);
      OTP += numbers[index];  
  }
    console.log(`Your ${OTP} is here`);
}
otpGenerator()
//Logic 07 end
function getDays(eventDateP){
    const currentDate = new Date();
    const eventDate = new Date(eventDateP)
    const timeDifference = eventDate - currentDate; 
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
     console.log(daysDifference);
  }
  // const eventDateP = '07-01-2024';
  getDays('07-01-2024');
//Logic 08 end
function uniqueCharecterCheck(userName){
    const userNameSet = new Set(userName);
    if (userName.length === userNameSet.size) {
      console.log("The input strings contain unique character");
    } else {
      console.log("The input string contains duplicates");
    }
  }
  uniqueCharecterCheck("hmad246");
  //09 Logic end
  function countWordOccurrences(sentence) {
    // Create a map to store word occurrences
    const wordMap = new Map();
  
    // Split the sentence into words
    const words = sentence.toLowerCase().split(/\s+/);
  
    // Iterate over each word
    words.forEach((word) => {
      // Remove punctuation from the word
      const cleanWord = word.replace(/[^\w]/g, '');
  
      // If the word is already in the map, increment its count
      if (wordMap.has(cleanWord)) {
        wordMap.set(cleanWord, wordMap.get(cleanWord) + 1);
      } 
      // Otherwise, add the word to the map with a count of 1
      else {
        wordMap.set(cleanWord, 1);
      }
    });
  
    // Return the map of word occurrences
    return wordMap;
  }
  const sentence = "This is a test sentence. This sentence is just a test.";
  const wordCounts = countWordOccurrences(sentence);
  
  console.log(wordCounts);
  //logic 10 end

console.log("thank you for error free code");