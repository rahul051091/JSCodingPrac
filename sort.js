const inventory = [
    { name: "Monitor", price: 10000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Headphones", price: 2500 }
];
function sortFunction (itemdata){
   let newArray = [...itemdata]
   const sortedArr = newArray.sort((a,b)=>a.price-b.price)
   const top2 = sortedArr.slice(0,2)
   return top2.map(n=>n.name)
   
}
console.log(sortFunction(inventory))