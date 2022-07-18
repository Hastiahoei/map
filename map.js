const handy = new Map ([
    ["samsung" , 300],
    ["iphone13" ,200 ],
    ["samsung" ,90 ],
    ["samsung" ,450 ],
    ["htc" ,334 ],
    ["samsung" ,660 ]
])

handy.set("shiaomi",4)

handy.get("iphone13");
console.log(handy.get("iphone13"))
console.log(handy.get("samsung"))
console.log(handy.get("htc"))

let text ="";
handy.forEach(function(value, key){
    text += key + "=" + value + "=>"
})


let tex= "";
for (const x of handy.entries()) {
  text += x;
}
console.log(tex);