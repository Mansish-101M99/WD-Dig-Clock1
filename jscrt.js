
function timesNow() {
    let date = new Date();

    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let session1 = "AM";
    // let session2 = "PM";

    if (hr == 0) {
        hr = 12;
    }
    if (hr > 12) {
        hr -= 12;
        session1 = "PM";
    }
    if (hr < 10) {
        hr = "0"+ hr;
    }
    if (mn < 10) {
        mn = "0"+ mn;
    }
    if (sc < 10) {
        sc = "0"+ sc;
    }

    let time = hr + " : " + mn + " : " + sc + " " + session1;
    let g = document.getElementById("myGhanta");
    g.innerHTML = time;

    setTimeout(timesNow, 1000 /*in millisecs.*/ );
}

timesNow();