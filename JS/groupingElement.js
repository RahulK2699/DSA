/*
📋  input
[
 { name: 'apples', category: 'fruits', price: 100 },
 { name: 'oranges', category: 'fruits', price: 30 },
 { name: 'potatoes', category: 'vegetables', price: 20 }
];

📋  Output
{
 fruits: [
 { name: 'apples', category: 'fruits', price: 10 },
 { name: 'oranges', category: 'fruits', price: 30 }
 ],
 vegetables: [{ name: 'potatoes', category: 'vegetables', price: 20 }]
} 
*/

let arr = [
  { name: 'apples', category: 'fruits', price: 100 },
  { name: 'oranges', category: 'fruits', price: 30 },
  { name: 'potatoes', category: 'vegetables', price: 20 }
 ];

function groupingElement(arr) {
  let obj = {};
  arr.map((item) => {
    if(!obj[item.category]) obj[item.category] = [item] ;
    else obj[item.category].push(item);
  })
  return obj;
}

console.log(groupingElement(arr));