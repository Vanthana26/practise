// Age to Days

function agetoDays(age){
    return age*365;
}
var result=agetoDays(65);
console.log(result);

//Less than 100

function lessThan100(a, b) {
	return (a + b) < 100;
}
var result=lessThan100(22,15);
console.log(result);

//Converts hours to seconds

function hourstoSeconds(hours){
    return hours*60*60;
}
var result=hourstoSeconds(10);
console.log(result);

//Sum of polygon angles

function polygon(n){
    return (n-2)*180;
}
var result=polygon(3);
console.log(result);

//Return Something to me!

b="Something" + " ";
let con,con2,con3;
con=something("is better than nothing");
con2=something("Bob Jane");
con3=something("something");
function something(a){
    return b+=a;
}
console.log("Return Something to me! :" +con +"," +con2 +"," +con3);

// less than or equal to zero

let Equal;
Equal=lessthan(-3);
console.log(Equal);
function lessthan(a)
{
        return (a)<0 ? true:false;
}

//using && operator

let operator,operator2,operator3,operator4;
operator=and(true,false);
operator2=and(true,true);
operator3=and(false,true);
operator4=and(false,false);
function and(a,b)
{
    return a && b ? true :false;
}
console.log("using the && operator:" +"" +operator+"" +operator2+"" +operator3+"" +operator4+"");

//The form problem

let chicken=2;
let cow=4;
let pig=4;
let leg,leg1,leg2;
leg=animal(2,3,5);
leg1=animal(1,2,3);
leg2=animal(5,2,8);
function animal(a,b,c)
{
    return(a*chicken)+(b*cow)+(c*pig);
}
console.log("The form problems:" + leg+"" +leg1+ "" +leg2+"");

//Equality check

let equal,equal1,equal2;
equal=checkequality(1,true);
equal1=checkequality(0,"0");
equal2=checkequality(1,1);
function checkequality(a,b)
{
    return a===b ? true : false;
}
console.log("Equality check:" +equal+"" +equal1+"" +equal2+"");

//Fix the expression
  
let x=4
let code=isSeven(4)
function isSeven(y)
{
    return x==y;
}
console.log












