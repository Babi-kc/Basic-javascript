//  tutorial2###################################
// console
// console is the javascript object
// console.time('mycode execute time');  /* it shows code execute time*/
// console.log('Helllo');
// console.log(5+4);
// console.log(34);
// console.log(true);
// console.log([32,3,4,5]);
// console.log({hy:'this', marks:30});
// console.table({hy:'this', marks:30});
// console.warn('this is warning');
// // console.clear();
// // console.error('this is an error')
// console.timeEnd('mycode execute time')
// // console.log is the js function  used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
 

// tutorial3########################################
// Variable
// // var,let,const > keywords to make variable(we can assign value inside key..)
// var name="Babita";
// var channel;
// var marks="34"
// channel='learning'
// console.log(name,channel,marks)
// rule for creating js variable
/*
1 can not start with numbers
2 can start with letter,number,_ or $
3 are case sensitive*/
// var $city='kathmandu';
// console.log($city)

// const
// for value of variable not changes
// const ownersName="sita"
// ownersName='Babita'; can not do this
// console.log(ownersName);
// const fruits='orange';
// {
//     let city='bhaktapur'; /*local  varaible */
//     city:'pokhara'
//     console.log(city);
// }
// console.log(city)

// datatype#################################
/* 
1) primitive data type:string,number,boolean,null.undefined,symbol.
2) reference data type :array,object literal,function,dates
*/
// let arr = String([1,2,3,4]);
// console.log(arr.length,(typeof arr));
// let arr1 = [5,6,7,8]
// console.log(arr1,(typeof arr1))
// // javascript type conversion and coercion#####################
// let arr2 = String([1,2,3,4]);
// console.log(arr2,(typeof arr2))

// string:properties,method,template############

// function cyears(form){
//     form.dogage.value=form.myage.value =7

// }
// document.write(10 + 10)
// window.alert(10 + 10)

// naming variable: rules and best practice###### (first letter most start with  $, _,letter, we cant use special caracter)
var myName = "babita";
console.log (myName)

// if else condition#####
var today="raining"
if(today=="sunny"){
    console.log("dont take a raincoat");
}
else{
    console.log("take raincoat")
}



// leap year or not
// 2020
var year =2020
if(year % 4 === 0){
    if(year % 100 ===0){
        if(year % 400 ===0){
("the year" + year + "is leap year")

        }
        else{
("the year" + year + "is leap not year")

        }
("the year" + year + "is not leap year")
        
    }
    else{
("the year" + year + "is leap year")

    }
("the year" + year + "is leap year")
}
else{
("the year" + year + "is leap not year")

}
// 2021
var year =2021
if(year % 4 ===0){
    if( year % 100 ===0){
        if(year % 400 ===0){
    ("the year " + year + " is leap year")

        }
        else{
    ("the year " + year + " is not leap year")

        }
    ("the year " + year + " is not leap year")
       
    }
    else{
    ("the year " + year + " is leap year")

    }
    ("the year " + year + " is leap year")
}
else{
    ("the year " + year + " is not leap year")

}
// truthy and falsy value### 5 falsy value : NAN,"",undefined,null,0 except those 5 all are truthy value in js
if(0){
    console.log("we lost the game")
}
else{
    console.log("we won the game")
}

if(NaN){
    console.log("we lost the game")
}
else{
    console.log("we won the game")
}

// else if
var area = "circle"
var PI = 3.142, l=5,b=4,r=3;
if (area == "circle"){
    console.log("area of circle is:" + PI*r**2)
}
else if( area == "triangle")
{
    console.log("area of triangle is:" + (l*b)/2)
}
else if( area == "rectangle")
{
    console.log("area of rectangle is:" + (l*b))
}
else{
    console.log("please enter valid data")
}

// ternary operator(conditional)
var age =18
console.log((age>=18? "you can vote":"you cant vote"))

// switch statement
var area = "circle"
var PI = 3.142, l=5,b=4,r=3;
switch(area){
    case "circle":
    console.log("area of circle is:" + PI*r**2);
    break
    case "triangle":
    console.log("area of triangle is:" + (l*b)/2);
    break

    case "rectangle":
        console.log("area of rectangle is:" + (l*b))
    break
        default:
    console.log("please enter valid data")

}

// while loop
var num =0;
while(num<=15){
    console.log(num)
    num++;
}
// do while
var num =0;
do {console.log(num)
num++;}
    while(num<=15)

    // for loop
    for( var num =0; num<=15;num++){
    console.log(num)
        
    }

    // js program to print table for given number 8 using for loop
    for(var num=1; num<=10; num++){
        var tableof =8;
    console.log(tableof+ "*"+ num + "=" + tableof * num) ;

    }
// function
// function name(params) {     } syntax

function sum(a,b) {
    var a =10,b = 20;
    var  total=a+b
    console.log(total)
}
sum();

/* function parameter are the name listed in the function's desinition
and function arguments are the real values passed to the function
*/

function sum(a,b) {
    var total = a+b;
    console.log(total)
    
}
sum();
sum(10,20);
sum(20,20);

// function expressions:create a function and put it into the variable
function sum(a,b) {
    var total = a+b;
    console.log(total)
    
}
var funExp =sum(5,15); 
// 
function sum(a,b) {
    return total = a+b;
    
}
var funExp =sum(5,15); 
console.log("the sum of two num is"+funExp);


// function anonymous: the function without name
var funExp =function (a,b) {
    return total =a+b;
    
}
var sum =funExp(15,15);
var sum1=funExp(20,15);
console.log(sum>sum1);


// ECMAscript######
    // var: function scop
    // let and const:block scope
    function biodata() {
        
        const myFirstName ="babita";
        console.log(myFirstName);
        if(true){
            const myLastName="Kc";
            console.log("inner" + myFirstName0);
            console.log("inner" + myLastName0);

        }
        // console.log("innerOuter" + myLastName);
    }
    biodata();


// tenplate string js program to print the table of 8
for(let num=1; num<=10;num++){
let tableof =12;
console.log(`${tableof}*${num}=${tableof*num}`)
}


// fat arrow function#########
// addition of 2 num
const sum=() =>`the sum of  two number is ${(a=10) + (b=10)}`;
console.log(sum());/*errrrrrrrrrrrrrrrrror why :(*/

//  Array#######
// when we feel storing multiple values in one variable then insted of var we use array

// Traversal in array#####
// if we want to get the single data at a time and also if we we want to change the data
var myname=["ram","sita","gita","hari","maya"]
    console.log(myname)
    // *******
    var myname=["ram","sita","gita","hari","maya"]
    console.log(myname[myname.length-1]);
    console.log(myname.length)
// we use for loop to navigate
var myname=["ram","sita","gita","hari","maya"]
 for(var i=0;i<=myname.length;i++){
console.log(myname[i])
 }

//  after es6 we have forin and forof loop###
// for in gives the index value 
var myname=["ram","sita","gita","hari","maya"]
for(let element in myname){
    console.log(element)
}
// for of gives the element inside the array
var myname=["ram","sita","gita","hari","maya"]
for(let element of myname){
    console.log(element)
}

// array.protype.foreach() ### call a function for each element in array
// it gives index element,value,array it is the combination of forin and forof loop

var myname=["ram","sita","gita","hari","maya"]
myname.forEach( function(element,index,array) {
    
    console.log(element+ " " +index + " " + array)
});/*traditional function*/


var myname=["ram","sita","gita","hari","maya"]
myname.forEach( (element,index,array)=> {
    console.log(element+ " " +index + " " + array)

});/*fat arrow function*/

// searching and filter array####
// array.protype.index()
// returns the first (least) index of an element within  the array equal
// to an element, or -1 if none is found.it search the element from the 0th index number
var myFriendsName =['sita','gita','tom','yama','binu']
console.log(myFriendsName.indexOf('gita',1));

// array. prototype.lastIndex of ()
// return the last (greatest)index of an element within the array equal
// to an element, or -1 if none is found.it search element last to first
var myFriendsName =['sita','gita','tom','yama','binu']
console.log(myFriendsName.lastIndexOf('gita',1));


// array.protype.includes()
// determines whether the array contains a value
// returing true or false as appropriate
var myFriendsName =['sita','gita','tom','yama','binu']
console.log(myFriendsName.includes('gita'));

// array.protoyype.find()
// arr.find(callback(element[,index[,array]])[,thisArg])
// returns the found element in the array,if some element in the array
// satisfies the testing function,or undefined if not found.
// only problem is that it return only one element
// const price = [200,300,350,400,450,500,600];
// // price<400
// const findElem = price.find((currVal)=>{
//     return currVal<400
// })
// console.log(findElem);

const price = [200,300,350,400,450,500,600];
console.log(price.find((currVal) => currVal < 400));

// array.prototype.findIndex()
// returns the found undex in the array,if an element in the array
// satisfies the testing function,or -1 if not found.

console.log(price.findIndex((currVal) => currVal < 400));

// array.prototype.filter()
// returns anew array containing all elemens of the calling array for 
// which the provided filtering function returns true
const price = [200,300,350,400,450,500,600];

// price<400
 const newPrice = price.filter((elem,index)=>{
return elem<400;
 })
console.log(newPrice)

// array.protype.sort()
// the sort()method sorts the elements of an array in place and returns
// the sorted array. the default sort order is ascending,built upon
// comparing their sequences of UTF-16 code units values.
const months = ['March','Jan','Feb','Dec','Nov'];
console.log(months.sort());

// const array1 =[1,30,100,21.99]; error 
// console.log(array1.sort())


// sort and compare array###





// insert add replace delete element in array(CRUD)####
// array.prototype.push() push method adds one or more element to the end
// of an array and returns the new lenght of the array
const people=["ram","sita","gita","hari","maya"]
people.push("babita","kabita");
console.log(people);
// array.prototype.unshift()
// the unshift()methd adds one or more elements to the begininig
// of an array and returns the lenght of the array
const peoples=["ram","sita","gita","hari","maya"];
const count = peoples.unshift("babita","kabita");
console.log(peoples);
console.log(count)

// const myNumbers=[1,2,3,5];
// myNumbers.unshift(4,6)
// console.log(myNumbers)



// array.prototype.pop()=removes the last element form array and returns that element.
// this method change the lenght of  the array
 const surname =['kc','bhandari','dahal','dc']
console.log(surname.pop())
console.log(surname)

// arra.protype. sgift()=removes the first element from and array and returns
// that removes element.this method changes the lenght of the array
const surname =['kc','bhandari','dahal','dc']
console.log(surname.shift())
console.log(surname)  
//array.prototype.splice() =adds or removes element from array
/* add dec at the end of an array.
what is the return value of splice method
update june to June(update)?
delete june from an array
*/
const months = ['jan','march','april','june','july'];
// sol1
// const newMonth =months.splice(5,0,"Dec")
const newMonth =months.splice(months.length,0,"Dec")
console.log(months)
// sol2
const newMonth =months.splice(months.length,0,"Dec")
console.log(newMonth)
// sol3
// const months = ['jan','march','april','june','july'];
// const updateMonth =months.splice(3,1,"June")
// console.log(months)
const months = ['jan','march','april','june','july'];
const indexofMonth =months.indexOf("june");
if(indexofMonth != -1){
const updateMonth =months.splice(indexofMonth,1,"June")
console.log(months)
}
else{
    console.log('no data found')

}

// sol4
const months = ['jan','march','april','june','july'];
const indexofMonth =months.indexOf("june");
if(indexofMonth != -1){
const updateMonth =months.splice(indexofMonth,1)
console.log(months)
}
else{
    console.log('no data found')

} 


// map and reduce method
// array.protype.map()
// let newArray =arr.map(callback(currentValue[,index[,array]])){
    // return element for newArray,after executing somthing
// }[,thsArg]
// return a new array containing the result of calling a function on every element in this array.

const array1 =[1,4,9,16,25]
// num>9
//  let newArr =array1.map((currELem,index,arr)=>{
//      return currELem>9;
//  })
//  console.log(array1)
//  console.log(newArr)

// it returns new array without mutating the original array
let newarr =array1.map((currentElm,index,arr)=>{
return `index no= ${index} and  current value is ${currentElm} belongs to ${arr}`
})
console.log(newarr)

// find the square root of each element in an array?
// multiply each element by 2 and return only those element which are greater than 10
// sol1 let 
let  arr=[25,36,49,64,81];
let arrsqr = arr.map((currELemm)=> Math.sqrt(currELemm))
console.log(arrsqr)
// sol2(we can use chaining method)
// let arr =[2,3,4,5,8]
// let arr2 =arr.map((currentElm)=>{
// return currentElm*2
// }).filter((currentElm)=>{
// return currentElm>10
// })
// console.log(arr2)
// in short##
let arr =[2,3,4,5,8]
let arr2 =arr.map((currELem)=>currELem*2).filter((currentElm)=>currentElm>10) .reduce((currentElm)=>currentElm =+ Accumulator);
console.log(arr2);
// reduce method
// flatten an array means to convert the 3d or 2d array into a single dimensional array
// the reduce(method executes a reducer function(that you provide)
// on  each element of the array,resulting in single output value
// the reducer function takes four arguments: acumulator,value,index,array


let arr =[2,3,4,5,8]
let arr2 = arr.reduce((Accumulator,currELem,index,array)=>{
return Accumulator+=currELem;
});
console.log(arr2)
// how to flatten an array:convert 2d to 3d array into one dimensional array
  const arr=[
      ['arra_1','arra_2'],
      ['arra_3','arra_4'],
      ['arra_5','arra_6'],
  ];
  let flatarr =arr.reduce((Accumulator,currentValue)=>{
      return Accumulator.concat(currentValue);
  })
  console.log(flatarr);

//   string in js####
// js string is zero or more characters written inside quotes,use for storing and manipulatimg text
// can be use single of double quotes and can be created as primitives
// from string literals or as objects using the string( )constructor

// how to fing length of the string
// string.prototype.lenght
let myName ='Babita';
console.log(myname.length)

// escape character

// let sentence ="My name is babita and im "UI/UX" dev"
// console.log(sentence)error to over come from this error we use:
let sentence ="My name is babita and im \"UI/UX\" dev"
console.log(sentence)
// if you dont want to mess,simply use the alternate quotes
 let sentence ='My name is babita and im "UI/UX" dev'
console.log(sentence)
// finding a string  in a string
// string.prototype.index(searchValue[,fromIndex])
// the indexof()method returns the index of (the position of)the firstoccurance of a specified text in a string
const myData ="I am  a student"
console.log(myData.indexOf("student"))
// string.prototype.lastindex(searchValue[,fromIndex])
const myData ="I am  a student"
console.log(myData.lastindexOf("student"))
// searching for a string in a string,it search a string  for a specified
// value and returns the position of the match
const myData ="I am  a student"
let searchData =myData.search("student")
console.log(searchData);
// this method cannot take a second start position argument

// Exatracting string parts:there are 3 method
// slice(start,end)
// subString(start,end)
// subStr(start,end)


//  display only 280 characters of string like the one used in twitter?
let myTwitt ="display only 280 characters of string like the one used in twitter?display only 280 characters of string like the one used in twitter?display only 280 characters of string like the one used in twitter?display only 280 characters of string like the one used in twitter?display only 280 characters of string like the one used in twitter?display only 280 characters of string like the one used in twitter?"
let myActualtwitt = myTwitt.slice(0,280)
console.log(myActualtwitt)
console.log(myActualtwitt.length)

// replacing string content()
// String.prototype.replace(searchFor,replaceWith)
// The replace()method replaces a specified value
// with another value in a stiring.
let myBiodata ='my name is Babita and  Babita'
let myNewdata =myBiodata.replace('Babita','babita')
console.log(myBiodata)
console.log(myNewdata)

// extracting string characters
// 3 methods for extracting string characters
// 1 charAt(position)
// 2 chartCodeAt(position)
// 3 Property access[]
// 1 sol
let myWorld ="Hello world"
console.log(myWorld.charAt(0))
// 2 sol
// The charCodeAt()method returns the unicode of the character at a specified index in a string
// the method returns a UTF-16 code
// (an integer bet 0 and 65535)
let myWorld ="Hello world"
console.log(myWorld.charCodeAt(0))
//3 sol
// ECMAScript 5 (2009) allows property access [] on strings
let myWorld ="Hello world"
console.log(myWorld[0])
// some useful method##
// uppercae lowaer case
let myAge = 'twenty'
console.log(myAge.toLowerCase());
console.log(myAge.toUpperCase());
// the concat()method:it joins 2 or more method
let fName="Babita"
let lName="kc"
console.log(fName.concat(lName))
console.log(fName.concat("",lName))
console.log(fName + lName)
console.log(`${fName} ${lName}`)
// string trim(): it removes the last and first white space but not between
let myWorld ="         Hello world           "
console.log(myWorld.trim()) 
// converting a string to an array
// a string can be converted to an array with the Split()methhod
var text ="a,b,c,d,e,f,g"//string
console.log(text.split(",")); //split on commas
console.log(text.split(" "));//split on space
console.log(text.split("|"));//split on pipe

// ###### date and time in js

// dataobject contain a number that represents millisecond since 1jan 1970 UTC
// there are 4 ways to create a new data object"
// 1. new Date()
// 2. new date(year,month,day,hours,minutes, second,milliseconds)
// 3.it takes 7 arguments
// new Date(milliseconds)
// we cant not avoide month sectiom
// 4.new date9date string

// new Date()
// Date object are created with the new Date()constructor.
let currentDate = new Date();
// console.log(currentDate)
// console.log(new Date())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toString())

console.log(Date.now()) // it returns millisecond since jan1 1970

// new Date(year,month,..)
// 7 number specify year,month,day,hour,minute,second, and millisecond (in that order)
// js count months from 0 to 11: jan is 0 and dec is 11
var d =new Date(2021,0,5,20,30,30,0)
console.log(d.toLocaletring())

// new Date(datestring)
// new date(dateString)creates a new data object from a date string
var d =new Date("June 6,2021 8:54:00")
console.log(d.toLocaleTimeString())
// new Date millisecond
// new Date(millisecond)creates a date object as zero time plus millisecond

var d = new Date(0);
var d = new Date(1609574531435);
var d = new Date(86400000*2);
console.log (d.toLocaleString)

// how to get indivisual date
const curreDate = new Date();
console.log(curreDate.toLocaleString());
console.log(curreDate.getFullYear());
console.log(curreDate.getMonth());
console.log(curreDate.getDate());
console.log(curreDate.getDay());
//how to get indivisual time
const curreTime =new Date()
console.log(curreTime.getHours())
console.log(curreTime.getMinutes())
console.log(curreTime.getSeconds())
console.log(curreTime.getMilliseconds())

// how to set indivisual time
const currTime=new Date();
// console.log(currTime.setTime());
console.log(currTime.setHours(5));
console.log(currTime.setMinutes(5));
console.log(currTime.setSeconds(5));
console.log(currTime.setMilliseconds(5));
// use for purposes like debounce
let msg =['hello world'];
let a= setTimeout ((a,b)=>
console.log('${a} ${b}'),
1000,...msg);


// math object in js:it allows you to perform mathematical tasks on number

// console.log(Math,PI);
console.log(Math,PI);
// Math.round(:returns the value of x rounded to its nearest integer
let num=10.2565;
console.log(Math.round(num));
// Math.pow()::returns the value of x to the power of y
console.log(Math.pow(2,3));
// Math.sqrt():returns the squre root of x
console.log(Math.sqrt(25));
// Math.abs():returns the absolute(positive)value of x
console.log(Math.abs(-55));
// math.ceil():returns the value of x rounded up to its nearest integer
console.log(Math.ceil(4.51));
// Math/flor(): returns the value of x rounded down to its nearest integer
console.log(Math.floor*4.7);
// Math.min:can be used to find the lowest value on a list of  argument
console.log(Math.min(0,150,30,160.-200));
// Math.math:opposite of min
// Math.random():returns number between 0(inclusive),and 1()



// Math.trunc():returns the integer part of a number
console.log(Math.trunc(4.4));

// DOM in js #############: it is  object model,which deals with the document,the html element themselves,eg
// document and all traversal you whoul do in it, events etc.
// ex: change the bg color to red
// document.body.style.background="red;"
// BOM is the browser object mode, which deals with browser components
// aside from the document,likehistory,location,navigator and screen
// (as well as some other that vary by browser)
// orientationin simple meaning all the window operations
// which comes under the BOM are performed usng BOM
// ...........................

// events in js############
// 4 ways of writing event in js
// 1 using inline events alert();
// 2 by calling a function 
// 3 using inline events(html onclick="" property and element.onclick)
// 4 using event listeners(addEventlistener and IE's attachEvent)


// Event object####: is the parent object of the of the event object
// eg: mouseevent,focusevent,jeyboardevent etc
// MouseEvent:the event related with mouse

// timing based event in js
/*
 setTimeout()
 setInterval()
 clearInterval()
 clearTimeout()
 */

//  oops in js
// object literal: a key: value pair data structure
// storing variable  and function together in one container
// 1st Way
// let bioData ="thapa";
// console.log(bioData);
// let bioData={
//     myName:"babita",
//     myAge:25,
//     getData:function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);

//     }
// }
// // console.log(bioData.myName);
// console.log(bioData.getData());
// bioData.getData();


// 2nd way n need to write function as well after es6
// let bioData={
//         myName:"babita",
//         myAge:25,
//         getData(){
//             console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    
//         }
//     }
// bioData.getData();

// what if we want object as a value inside an object
// let bioData={
//         myName:{
//         firstName:"Babita",
//         lastName:"kc",
//         },
//         myAge:25,
//         getData(){
//             console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    
//         }
//     }
// console.log(bioData.myName.lastName);
// what is this object?##
// it containe current context.the thi object can have different values depending on where it is placed

// closures function#############
// hasving access to the parent scope even after the parent  function has close
// function greet(message){
//     return function(name){
//         console.log(message+ '' + name);
//     }
// }
// let msg = greet("hello");
// msg("joe");

// Type conversion##########
// convert one data type to another

// template literals #######
// windows############
console.log(window.outerHeight); /*outer height*/
console.log(window.innerHeight); /*inner height*/
console.log(window.scrollY); /*it gives scorll position of y or vertical  */
console.log(window.scrollx); /*it gives scorll position of x or horizontal  */
console.log(window.navigator);
console.log(window.btoa("hello nepal")); /*convert to base 64*/
console.log(window.atob("svg")); /*convert to base 64 to resource*/

// protypes
// 

// chaining methods




