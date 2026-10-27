const inventory = [
  { name: "Mouse", category: "Electronics" },
  { name: "Shirt", category: "Apparel" },
  { name: "Keyboard", category: "Electronics" },
  { name: "Jeans", category: "Apparel" },
  { name: "Headphones", category: "Electronics" },
];
function categoryFuncion(items) {
let obj={}
for(const item of items){
    let categoryName = item.category
    if(!obj[categoryName])
        {
          obj[categoryName]=[]   
        }
        
        obj[categoryName].push(item.name)
}
return obj
}
console.log(categoryFuncion(inventory));