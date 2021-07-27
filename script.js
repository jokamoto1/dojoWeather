function removeCookie(a) {
    var a = document.querySelector(".cookie");
    a.remove();
}
var arr = ["#red1 span", "#red2 span", "#red3 span", "#red4 span", "#blue1 span", "#blue2 span", "#blue3 span", "#blue4 span"];
var i = 0;
function convert() {
    if (i === 0) {
        for (var b = 0; b < arr.length; b++) {
            var value = document.querySelector(arr[b]);
            var newTemp = Math.round((value.innerText * (9 / 5)) + 32);
            value.innerText = newTemp;
        }
        i++;
    } else if (i === 1) {
        for (var b = 0; b < arr.length; b++) {
            var value1 = document.querySelector(arr[b]);
            var newTemp1 = Math.round((value1.innerText - 32) * 5 / 9);
            value1.innerText = newTemp1;
        }
        i--;
    }
}