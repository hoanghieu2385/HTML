var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 0) {
    greeting = 'Buoi sang vui ve!';
    className = 'morning';
} else if (hourNow > 12) {
    greeting = 'Buoi trua vui ve!';
    className = 'afternoon';
}else if (hourNow > 18) {
    greeting = 'Di ngu di! Hehe';
    className = 'evening';
} else {
    greeting = 'Loi roi babe!';
}

document.write('<h3>' + greeting + '</h3>');

var greetingElement = document.getElementById('greeting');
greetingElement.className = 'morning';

function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
    var Dem_gio = setInterval(Dong_ho, 100);



