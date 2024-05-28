const write01 = document.getElementById("write01");
const totalAmount = 2000;
const discount = 20/100;
const totalDiscount = totalAmount * discount ;
const finalPrice = totalAmount-totalDiscount;
write01.innerText = "The final price after discount is: " + finalPrice;
//01 Logic end
const username = "admin";
const password = "12345";
const write02 = document.getElementById("write02");
if (username == "admin" && password == "12345") {
    write02.innerText = "Login Successful";
} else{
    write02.innerText = "Invalid credentials";
}
//02 Logic end
const write03 = document.getElementById("write03");
const amountInINR = 9000;
const USD = 82;
const amountInUSD = amountInINR / USD;
const roundedAmount = Math.round(amountInUSD)
write03.innerText = `The ${amountInINR} in USD: ${roundedAmount}`;
//03 Logic end

function finalPrice04 (){
    const adultCount = document.getElementById("adult").value;
    const seniorCount = document.getElementById("senior").value;
    const childCount = document.getElementById("child").value;
    //console.log(adultCount+seniorCount+childCount); why the result is as string
    //define the ticket price
    const adultPrice = 150;
    const seniorPrice = 120;
    const childPrice = 100;
    //count the price
    const finalPrice = (adultPrice * adultCount) + (seniorPrice * seniorCount) + (childPrice * childCount);
    //display the final price
    const priceDisplay = document.getElementById("priceDisplay");
    priceDisplay.innerText = `Total ticket price is ${finalPrice} INR`;
    console.log(finalPrice);
}
//04 Logic end
function showDeliveryTime() {
    const deliveryOption = document.getElementById('deliveryOption').value;
    
    switch (deliveryOption) {
        case "standard":
            delivery = " might take 3-5 days";
            break;
        case "express":
            delivery = " might take 1-2 days";
            break;
        case "overnight":
            delivery = " would be delivered the next day";
            break;
        default:
            delivery = "Please! Provide details";
            break;
    }
    document.getElementById('deliveryTime').innerText = "Delivery " + delivery;
}
//05 Logic end

function submitForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    if (typeof name !== "string") {
        console.log(`Name Should Be A String..`);
      } else if (typeof email !== "string") {
        console.log(`Email Should Be A String..`);
      } else if (typeof age !== "number") {
        console.log(`Age Should Be A Number..`);
      } else {
        console.log(`Yahh!!! All the fields are proper.`);
      }
}
//06 Logic end
const count = document.getElementById("count");
let i = 0;
while (i < 10) {
    console.log(i+1);
    count.innerText = i+1;

    i = i + 1;
}
//08 Logic end
const arr = [1, 2, "name2", 4, "name3"];
let firstString = null;

for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
        firstString = arr[index];
        break;
    }
}

console.log(`The first string founded is ${firstString}`); // Output: "name2"

//09 Logic end

const arr10 = [1,-2,34,-9,-5,2,-5];
for (let index = 0; index < arr10.length; index++) {
    let element ;

    if (arr10[index] >= 0) {
        element = arr10[index];
        console.log(element);
    }
    
    
}

//10 Logic end
console.log();
console.log("Thank you for error free code!");
