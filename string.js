// -------------------- 1.String or not----------------

// let a = prompt("Enter the content");

// if (typeof a === 'string') 
// {
//   console.log('It is a string');
// } 
// else {
//   console.log('It is not string');
// }

// ------------------------2.Blank or not--------------------


// var a=prompt("Enter a value")
// let blank=a.trim();
// if(blank.length==0){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// ------------------------3.Array of words---------------------


// let str= prompt("Enter the words");
// 		let splitStr = str.split(" ");
// {   
//    console.log(splitStr);
// } 

//-----------------------------4.Extract------------------------

// let str = prompt("Enter a value")
// let str1 = prompt("Enter a StartRange")
// let str2 = prompt("Enter a EndRange")
// let str4= str.slice(str1,str2)
//  console.log(str4);

// ----------------------------5.Email address-------------------

// let e=prompt("Enter your email");
// let e1=e.search(/@/);
// let e2=e.slice(4,e1);
// let e3=e.replace(e2,"....");
// console.log(e3);

//--------------------------6.Parameterize the string----------------


// string = function (str1) {
//   return str1.toLowerCase().replaceAll(" ","-");
// }
// console.log(string("Hello world!!"));

//--------------------------7.Capitalize the string-------------------

//  let str = prompt("Enter a value");


//  let str1 = str.split(" ");
//  console.log(str1.length)


//  for (let i = 0; i < str1.length; i++) {
//      str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1); 
//      console.log(str1);
//  }
//  let str2=str1.join(" ");
//  console.log(str2)

//  console.log(str1)





//------------------------8.Suffix the string-------------------

// let num = prompt('Enter the value ')
//    onesplace=num%10;
//    tenthplace=num%100;
//    if (onesplace==1 && tenthplace!=11) {
//     console.log(num+"st");
//    } 
//    else if(onesplace==2 && tenthplace!=12) {
//     console.log(num+"nd");
//    }
//    else if(onesplace==3 && tenthplace!=13) {
//     console.log(num+"rd");
//    }
//    else {
//      console.log(num+"th");
//   }


//-----------------------9.Truncate the string-----------------

// var str = "Hi Welcome to DCKAP!!!"
// var str2 = str.split(' ',2);
// var str3 = str2.join(" ");
// console.log(str3);

//-----------------------10.Remove the occurrence----------------

// var str = "Something is better than nothing"
// var str2 = str.replace("is","");
// console.log(str2);

//---------------------11.Case-insensitive----------------------


// var a = prompt("Enter the string1");
// var b = prompt("Enter the string2");
// a=a.toLowerCase();
// b=b.toLowerCase();
// if(a.match(b)==null)
// {
//   console.log('Matched');
// }
// else{
//   console.log('Not Matched');
// }


//---------------------12.Case-insensitive(unicode charactres)---------------

// let input1 = prompt("Enter a value1");
// let input2 = prompt("Enter a value2");
// input1=input1.toUpperCase()
// input2=input2.toUpperCase()
// if(input1==input2){
//      console.log("True")
//  }
//  else{
//      console.log("false")
//  }

//----------------------13.Uppercase to lowercase-----------------------

// let strings = prompt('Enter a string to change' ); 
// let output = strings.split(''); 
// let ans = '';
//   for(i in output){ 
//         if(output[i].match(/[a-z]/)){ 
//                ans += output[i].toUpperCase()
//              }else{
//                      ans += output[i].toLowerCase() 
//                  } 
//                 }
//               console.log(ans);










//---------------------------Arrays--------------------------

//------------------------1.Return the first element--------------------

// var arr=array([1,2,3])
// function array(x){
//   return (x[0]);
// }
// console.log(arr)

//-----------------------2.Given number-----------------------

//  var arr = array ([1,2,3,4,5],3)
//  function array(x,y){
//     console.log(x)
//     return x.includes(y);
//  }
//  console.log(arr);

//-----------------------3.reverse--------------------------

// var arr = array ([1,2,3,4])
//  function array(x){
//     return x.reverse();
//  }
//  console.log(arr);

//--------------------4.pair management------------------------

// let a;
//  a=makePair(1,2);
//  a=makePair(51,21);
//   a=makePair(512124,215);
// function makePair(a,b)
//  {
//      return ([a,b]);
//  }
//  console.log(a);


//---------------------5.Find the index---------------------


// var index= array (["hi","edabit","fgh","abc"],"abc")
//   function array(x,y){
//      console.log(x)
//      return x.indexOf(y)
//   }
// console.log(index);

//--------------------------6.return the last element----------------

// let arr = ([1, 2, 3, 4, 5, 6, 7, 8]);
// let last = arr[arr.length - 1];
// console.log(last);


//-------------------------7.Array to string-----------------------

// var a = a2([1,2,3,4,5,6])
// function a2(x){
//     return x.join("");
// }
// console.log(a);

//---------------------8.string.length---------------------------

// var a = x("Hi Iam vanthana")
//  console.log(a) 

// function x(y){
//     let b = y.slice(-1);
//     let c = y.lastIndexOf(b);
//       c = c + 1;
//       return(c)
//      }






//---------------------------splice-------------------------

// let number =["a","b","c","d","e"]
// let b=number.splice(2,0,"1","2");
// let c= number.splice(5,0,"3");
// console.log(number);








