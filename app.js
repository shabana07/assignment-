//Chapter: 17-20


// Task:1

// var arr = [[],[],[]]


// Task:2

// var arr = [
//                     [0, 1, 2, 3],
//                     [1, 0, 1, 2],
//                     [2, 1, 0, 1]
//                 ]
// document.write("<h3>Multidimensional Array</h3>")
// for(var one = 0; one <= 2; one++){
//     for(var two = 0; two <= 3; two++){
//     document.write(arr[one][two])
//     }
//     document.write("<br/>")
// }


// Task:3

// for(var arr_One = 1; arr_One <= 10; arr_One++){
//     document.write(arr_One +"<br/>")
// }


// Task:4

// var first = prompt("Enter a Number to show its multiplication table");
// var second = prompt("Enter length multiplication table");
// document.write("<h2>Multiplication table of <br/>"+first+" Length is "+second +"<br/><br/></h2>");
// for(var third = 1; third <= second; third++){
//     document.write(  first+" X " + third+" = "+first*third+"<br/>");
// }


// Task:5

// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruit = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for(var box = 0; box < fruit.length; box++){
//     document.write(fruit[box]+"</br>");
// }
//     document.write('</br></br>Element at index ' +fruit.indexOf('apple')+' is' +' apple'+"</br>");
//     document.write('Element at index ' +fruit.indexOf('banana')+' is ' +'banana'+"</br>");
//     document.write('Element at index ' +fruit.indexOf('mango')+' is ' +'mango'+"</br>");
//     document.write('Element at index ' +fruit.indexOf('orange')+' is ' +'orange'+"</br>");
//     document.write('Element at index ' +fruit.indexOf('strawberry')+' is ' +'strawberry'+"</br>");


// Task:6

// var first_Step = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//    document.write("<h2>Counting :</h2>"+first_Step);
// var second_Step = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var third_Step = second_Step.reverse();
//    document.write("<h2>Reverse first_Step:</h2>"+third_Step);

//  document.write("<h2>Even:</h2>");
// for( var i = 0; i <= 20; i=i+2){
//     document.write(i+",")
// }
//  document.write("<h2>Odd:</h2>");
// for( var i = 1; i <= 20; i=i+2){
//     document.write(i+",")
// }
//  document.write("<h2>Series:</h2>");
// for( var i = 2; i <= 20; i=i+2){
//     document.write(i+"k,")
// }


// Task:7

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order =prompt("Enter your name :");

// for(var i = 0; i < items.length; i++){
//     var one = items.indexOf(order);
//   if (order == "cake" ) {
//     document.write(order+ " is available at index" + one+"  in our bakery")
//     break;
//   }
//   else if (order == "apple pie" ) {
//     document.write(order+ " is available at index" + one+"  in our bakery")
//     break;
//   }
//   else if (order == "cookie" ) {
//     document.write(order+ " is available at index" + one+"  in our bakery")
//     break;
//   }
//   else if (order == "chips" ) {
//     document.write(order+ " is available at index" + one+"  in our bakery")
//     break;
//   }
//   else if (order == "patties" ) {
//     document.write(order+ " is available at index" + one+"  in our bakery")
//     break;
//   }else{
//     document.write("We are sorry "+order+ " is not avaialble in our bakery")
//     break;
// }
// }

//Task:8

// var number = [24, 53, 78, 91, 12];
// var one = Math.max(24, 53, 78, 91, 12);
// document.write("Array items : "+number+"<br/>"+"The largest number is "+one);


//Task:9

// var number = [24, 53, 78, 91, 12];
// var one = Math.min(24, 53, 78, 91, 12);
// document.write("Array items : "+number+"<br/>"+"The smallest number is "+one);


//Task:10

// var number = 5;
// for(var one = 1; one <=20; one++){
//     document.write(number*one+", ")
//  }


//Chapter: 21-25

//Task:1

// var one = prompt("Enter your first name : ");
// var two = prompt("Enter your last name : ");
// document.write(one+" "+two)


//Task:2

// var input = prompt("Enter your favorite mobile phone model :");
// var first = input.length;
// document.write("My favourite phone is : "+input+"<br/>"+"Length of string : "+first);


//Task:3

// var  one = "Hello World";
// var two = one.lastIndexOf("l");
// document.write("String: "+one+"<br/>"+"Index of 'n': "+two);


//Task:4

// var first = "Pakistan";
// var second = first.indexOf("n");
// document.write("String: "+first+"<br/>"+"Index of 'n':"+second);


//Task:5

// var arr_One = "Pakistani";
// var arr_Two = arr_One.charAt(3);
// document.write("String: "+arr_One+"<br/>"+"Character at index 3: "+arr_Two);


//Task:6

//  var one = prompt("Enter your first name : ");
// var two = prompt("Enter your last name : ");
// var i = one.concat( two);
// document.write(i)


//Task:7

// var a = "Hyderabad";
// var i = a.replace("Hyderabad","Islamabad");
// document.write("City: "+a+"<br/>"+"After replacement: "+i);


//Task:8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var i = message.replace(/and/g,"&");
// document.write(i)


//Task:9

// var one = "472";
// var a = typeof(one);
// var b = parseInt(one);
// var c = typeof(b);
// document.write("Value: "+one+"<br/>"+"Type: "+a+"<br/>"+"Value: "+b+"<br/>"+"Type: "+c)



//Task:10

// var value = prompt("Enter value:");
// var type = value.toUpperCase();
// document.write("User input: "+value+"<br/>" +"Upper case: "+type)


//Task:11

// var input = prompt("Enter value :");
// var one = input.slice(0,1);
// var a= one.toUpperCase();
// var two = input.slice(1);
// var b = two.toLowerCase();
// document.write(a+b)


//Task:12

// var num = 35.36;
// var first = num.toString();
// var second= first.slice(0,2);
// var third = first.slice(3,5);
// document.write("Number : " +num);
// document.write("<br/>Result : " +second+third);


//Task:13

// var userName =prompt("Enter your name :");
// var name = userName.split("");
// var a = String.fromCharCode(33, 44, 46, 64);
// var b = a.split("");
// for(var c = 0; c < name.length; c++){
//   if (name[c] == String.fromCharCode(33) || name[c] == String.fromCharCode( 44) || name[c] == String.fromCharCode( 46) || name[c] == String.fromCharCode(64)) {
//     alert("please enter avalid username");
//   }
// }


//Task:14

// var one = ["cake", "apple pie", "cookie", "chips", "patties"];
// var two =prompt("Enter your name :");
// two.toLowerCase();

// for(var i = 0; i < one.length; i++){
//     var x = one.indexOf(two);
//   if (two == "cake" ) {
//     document.write(two+ " is available at index " +x+"  in our bakery")
//     break;
//   }
//   else if (two == "apple pie" ) {
//     document.write(two+ " is available at index " +x+"  in our bakery")
//     break;
//   }
//   else if (two == "cookie" ) {
//     document.write(two+ " is available at index " +x+"  in our bakery")
//     break;
//   }
//   else if (two == "chips" ) {
//     document.write(two+ " is available at index " +x+"  in our bakery")
//     break;
//   }
//   else if (two == "patties" ) {
//     document.write(two+ " is available at index " +x+"  in our bakery")
//     break;
//   }else{
//     document.write("We are sorry "+two+ " is not avaialble in our bakery")
//     break;
// }
// }


//Task:15

// var password = prompt("Enter password: ");
// var box = password.charCodeAt(0);
// if(box >= 48 && box <= 57){
//     document.write("Entered password: "+password+"<br/>");
//     document.write("Password can not begin with a number");
//     document.write("<br/>"+"Please Enter a valid password");
// }
// else if(password.length > 6){
//     document.write("Entered password: "+password+"<br/>")
//     document.write("Password can not be more than 6 characters")
//     document.write("<br/>"+"Please Enter a valid password")
// }else{
// document.write(" Valid password");

// }


//Task:16

// var university = 'University of Karachi';
// for(var univer = 0; univer <university.length; univer++){
//     document.write(university[univer]+"<br/>")
// }


//Task:17

// var type = prompt("Enter a value:" );
// var last = type.charAt(type.length-1);
// document.write("User input : "+type+"<br/>"+"Last character of input : "+last)


//Task:18

// var string = "The quick brown fox jumps over the lazy dog";
// var value = 'the';
// var count = 0;

//   for(var i = 0; i < string.length ; i++)
//   {
//     if (value.indexOf(string[i]) !== -1){
//       count += 1;
//     }
//   }
//   document.write("Text: "+ string+"<br/>" +"There are " +count/3+" occurrence(s) of word 'the'")   



































































































































































