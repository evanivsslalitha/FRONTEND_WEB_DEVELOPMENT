var x=20;
var y=30
document.write("Addition is:",x+y);
document.write("<br>Subtraction is:",x-y);
document.write("<br>Division is:",x/y);
document.write("<br>Modulus is:",x%y);
document.write("<br>Multiplication is:",x*y);
document.write("<br>Increment Output is:",x++);
document.write("<br>Decrement Output is:",x--);
//logical operators
let z=false;
let k=true;
console.log(z&&k);
console.log(z||k);
console.log(!z);
console.log(!k);
let age=18;
let canvote=(age>=18)?"yes you can vote!":"No can't vote" ;
console.log(canvote);
let clname="III B.Tech CSE A2";
let cr="xyz";
let game="Cricket"
if(clname=="III B.Tech CSE A2")
{
    document.write("CR of the Class is: ",cr);
}
else if(game=="Cricket")
{
    document.write("Captain of Cricket Team is Dhonii");
}
else
{
    document.write("Invalid Input");

}
//conditional
switch(true)
{
    case 10>20:
        myAnswer="red color"
        break;
    case 20<30:
        myAnswer="green color"
        break;
    case 50>20:
        myAnswer="black color"
        break;
    case 100==200:
        myAnswer="orange color"
        break;
        myAnswer="None of the above"
        break;
}
document.write(myAnswer);
//Type Version
var a="99";
var b=99;
document.write(typeof(a));
document.write("<br><br>");
document.write(typeof(b));
var c=parseInt(a);
document.write("<br><br>");
document.write(typeof(c));
document.write("<br><br>");
var d=String(b);
document.write(typeof(d));
//dialog boxes
alert("This is an Alert Message to USer");
prompt("Please Enter Your Name: ");
confirm("Are You Sure: ");
    var women = confirm("Are you Women");
        if(women)
        {
            let name = prompt("please enter your NAme");
            document.write("Hello Madam:"+name+" Welcome to my page");

        }
        else
        {
            let name = prompt("please enter your name");
            document.write("Hello Mr."+name+" Welcome to mY page");
        }
//functions
function goodStart()
{
    document.write("Hello Welcome to Functions Concepts!")
}
goodStart();
goodStart();
goodStart();
// functions examples
