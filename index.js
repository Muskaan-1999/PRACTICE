//primitive datatype
var a = 'muskaan';
 var b = 7;
 var c = false;
 var d = null;
 var e = 

 console.log(typeof(e))
  
 // reffrential data type
 //array
 var names =['muskaan','nuzhath','nikhath','najaf']
  console.log(names.length)
  console.log(names)
  //using push
  names.push('nizami')
   console.log(names)
   //using unshift
   names.unshift('anjum')
   console.log(names)
   //using pop
   names.pop('nizami')
   console.log(names)
   //using shift
names.shift('anjum')
console.log(names)  
//using slice
let numbers =[2,3,5,7,11,13,17]
console.log(numbers.length)
//create another array by slicing numbers from index 3 to 5
let newarray= numbers.slice(3,6)
console.log(newarray)
// using splice
let fruits=['apple','mango','banana','strawberry','sapota','custardapple']
// replace strawberry from index 3 by blackberries
let removedelement = fruits.splice(3,1,'blackberries')
console.log(removedelement)
console.log( fruits)
// FUNCTIONS
function add(a,b){
    var sum=a+b;
    console.log(sum)
}
add(30,17)
 function multiply( m,z){
    var multiply=m*z;
    console.log(multiply)
 }   
  multiply( 37,17)
  //object
  var myself = {
    name: "muskaan",
    age:23,
    gender:"female",
    qualification: "BE",
    DEPT:"civil"
  }
  console.log(myself.DEPT)
  
  //ARRAY OF OBJECT
  var data=[
    { 
        name: "Muskaan",
        age: 23,
        gender:"female",
        qualification:"BE",
    },
    {
        name:"nikhath",
        age:26,
        gender:"female",
        qualification:"Bsc",
    },
    {
        name:"Dr Nuzhath",
        age:24,
        gender:"female",
        qualification:"Doctor of pharmacy",

    }
  ];
    
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);






    
  