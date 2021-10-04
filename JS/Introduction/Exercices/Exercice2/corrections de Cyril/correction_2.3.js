let hour =  0;
let minute = 0;
let second = 0;


hour = parseInt(prompt("hour"));
minute = parseInt(prompt("minute"));
second = parseInt(prompt("second"));

// if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
//     alert("ERROR YOU HAVE TO ENTER NUMBER !");
// }

// if (hour < 0  || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
//     alert("INVALID NUMBER");
// }


document.write("<p>" + hour + " h " + minute + " m " + second + " s " + "</p>");

let newHour = hour ;
let newMinute = minute ;
let newSecond = second + 1;
let newDate = true;

switch (newDate) {
    case (hour != 23 && minute == 59 && second == 59) :
        newHour = hour +1;
        newSecond = 00;
        newMinute = 00;
        document.write("<p>" + newHour + " H " + newMinute + " M " + newSecond + " S " + "</p>");
        break;

    case  (hour !==23 && minute !== 59 && second ==  59) :
        newHour = hour;
        newSecond = 00;
        newMinute = minute + 1;
        document.write("<p>" + newHour + " H" + newMinute + " M " + newSecond + " S " + "</p>");
        break;
    
    case  (hour == 23 && minute == 59 && second ==  59) :
        newHour = 00;
        newSecond = 00;
        newMinute = 00;
        document.write("<p>" + newHour + " H" + newMinute + " M " + newSecond + " S " + "</p>");
        break;

    default :
    document.write("<p>" + newHour + " H" + newMinute + " M " + newSecond + " S " + "</p>");
}


