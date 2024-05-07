//In this project, you will build a countdown timer using the date module.
//start code step 1
import { differenceInSeconds } from "date-fns";
//function for count down second
function* countdownTimer(second) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step 2: counter inilization
let timerIterator = countdownTimer(10);
//function to create a count a countdown timer
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();
    //if else condition apply
    if (!result.done) {
        //current date and time calls
        const now = new Date();
        ///calculate minutes in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        ///calculate remaining second in time
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); /// 1 second is equal to 1000 ms
    }
    else {
        //display result countdown complete
        console.log("Countdown Complete!");
    }
}
///invoke
displayCountdown();
