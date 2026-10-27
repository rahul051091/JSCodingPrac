// // // const message = "Automation";
// // // function reverse(str){
// // //     const arr = str.split("")
// // //     const final=arr.reverse().join("")
// // //     return final

// // // }
// // // console.log(reverse(message))

// // // const message1 = "Automation";

// // // function reverseWithoutMethod(str) {
// // //   let reversedStr = ""; // Khali string jisme ulta karke dalenge

// // //   // Loop ko aakhiri index se shuru karenge aur 0 tak chalayenge
// // //   for (let i = str.length - 1; i >= 0; i--) {
// // //     reversedStr = reversedStr + str[i]; // Ek-ek character peeche se jodte jayenge
// // //   }

// // //   return reversedStr;
// // // }

// // // console.log(reverseWithoutMethod(message)); // Output: noitamotuA

// // // //const prices1 = [100, 250, 50, 400];
// // // // function getTotal (price){
// // // //    return price.reduce((sum,currentItem)=>{
// // // //         return sum=sum+currentItem
// // // //     },0)

// // // // }
// // // //console.log(getTotal(prices))

// // // const prices = [100,250,50,400]
// // // let sum = 0
// // // for(const item of prices){
// // //     sum=sum+item
// // // }
// // // console.log(sum)

// // // const testCases = [
// // //     { id: 1, name: "Login Test", status: "passed" },
// // //     { id: 2, name: "Checkout Test", status: "failed" },
// // //     { id: 3, name: "Profile Update", status: "passed" }
// // // ];
// // // function checkFailedTest(cases){
// // //      const failedTestCases = cases.find(s=>s.status === "failed")
// // //      return failedTestCases.id
// // // }
// // // console.log(checkFailedTest(testCases))

// // // const products = [
// // //     { name: "Car Cover", price: 2500 },
// // //     { name: "Floor Mats", price: 1200 },
// // //     { name: "Air Purifier", price: 6500 },
// // //     { name: "Microfiber Cloth", price: 300 }
// // // ];
// // // function sortingProducts(prices){
// // //     return prices.sort((a,b)=>a.price - b.price)

// // // }
// // // console.log(sortingProducts(products))

// // // const options = ["Login", "Signup", "Login", "Dashboard", "Settings", "Signup"];
// // // function removeDupes (items){
// // //     const updatedOptions= [...new Set (items)]
// // //     return updatedOptions

// // // }
// // // console.log(removeDupes(options))

// // const products = [
// //     { name: "Mouse", price: 500 },
// //     { name: "Keyboard", price: 1500 },
// //     { name: "Monitor", price: 10000 },
// //     { name: "Headphones", price: 2500 }
// // ];
// // function findProduct(pName){
// //     let maxPrice = pName[0]
// //     console.log(maxPrice)
// //     for(const items of pName){
// //         if(items.price >= maxPrice.price){
// //             maxPrice = items
// //         }
// //     }
// //     return maxPrice.name

// // }
// // console.log(findProduct(products))

// // const cheapproducts = [
// //     { name: "Mouse", price: 500 },
// //     { name: "Keyboard", price: 1500 },
// //     { name: "Monitor", price: 10000 },
// //     { name: "Headphones", price: 2500 }
// // ];

// // function findCheapItem(item){
// //     let cheapProduct = item[0] // cheapproduct stores  { name: "Mouse", price: 500 },
// //     for(const items of item){
// //         if(items.price < cheapProduct.price) // first loop 500 < 500 true , 2nd 500 < 1500 true again { name: "Mouse", price: 500 }
// //             cheapProduct = items // cheapproduct will store { name: "Mouse", price: 500 }
// //     }
// //     return cheapProduct.name
// // }
// // console.log(findCheapItem(cheapproducts))

// const products = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 10000 },
//     { name: "Headphones", price: 2500 }
// ];

// function findAffordableProducts(items){
//     return items.filter(p=>p.price <=2000).map(n=>n.name)
// }
// console.log(findAffordableProducts(products))

const rawPrices = ["₹500", "₹1,500", "₹10,000", "₹2,500"];
function onlyproduct (price){
    let updatePrices=[]
    for(const item of price){
        const cleaned = item.replace('₹',"")
        const newPrices = cleaned.replace(',',"").trim()
        updatePrices.push(Number(newPrices))

    }
    return updatePrices

}
console.log(onlyproduct(rawPrices))
