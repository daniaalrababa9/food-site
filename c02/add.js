var yourweight = prompt ('your weight');
var greeting ;
if (yourweight > 100) {
    greeting = 'fat';
} else if (yourweight > 50 && yourweight < 100) {
    greeting = 'average';
} else if (yourweight < 50) {
    greeting = 'skinny';   
} else {
    greeting = 'welcome!';
}

document.write('<h3>'+ greeting +'</h3>');

var today = new Date();
var hournow = today.getHours();
var greetin;
if (hourNow > 18) {
    greetin = 'Good evening!';
} else if (hourNow > 12) {
    greetin = 'Good afternoon!';
} else if (hournow > 0) {
    greetin = 'Good morning!';   
} else {
    greetin = 'welcome!';
}

document.write('<p>'+ greetin +'</p>');
