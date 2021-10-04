let a;
let b;
let temp;

a = prompt ("saisir la valeur de a");
b = prompt ("saisir la valeur de b");

temp = b;
b = a;
a = temp;

document.write( a + " " + b);