let points = ["12","4","10","2","1","20","24"];
let lot =  points.sort(function(a,b){return a-b;[]});
console.log(points)

// Question 1 (To show the array, but sorted)
console.log(lot);

// Question 2  (To show the min value)
console.log(lot[0]);
// Or
console.log(MinArray(points));
function MinArray(arr){
    return Math.min.apply(null,arr)
}


// Question 3 (To show the max value)
let lastIndex = points.length -1;
console.log(lot[lastIndex])
// OR
console.log(MaxArray(points));
function MaxArray(arr){
    return Math.max.apply(null,arr)
}

// Math.Random
console.log(Math.floor(Math.random()*10))

let colors = ["blue","red", "green","yellow","grey","purple","pink","orange","teal"]
// let color = colors.splice(0,2);
// console.log(color)
function changeBG(){
    let colorIndex = Math.floor(Math.random()*9);
    document.body.style.backgroundColor = colors[colorIndex];
}
function reset(){
    document.body.style.backgroundColor = "white";
}