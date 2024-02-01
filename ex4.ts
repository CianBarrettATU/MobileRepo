let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);
let num: number = 4;
console.log("Value assigned to num is: " + num);
let str: string = "Hello";
console.log("Value assigned to string: " + str);

let myArray: number[] = [1,2,3];

let myArray2: Array<number> = [1,2,3];

for(let i = 0; i < myArray.length; i++){
    console.log("the value of item" + (i+1)+ "is " + myArray[i]);
}

myArray.forEach(function(item){
    console.log("The valus is " + item);
})

myArray.forEach((item)=>{
    console.log("The valus is " + item);
})

let unknown: any = "Whatever you want";
console.log("The value of unknown is: " + unknown);