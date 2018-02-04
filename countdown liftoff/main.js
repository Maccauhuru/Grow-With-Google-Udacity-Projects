/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

var time = 60;
while (time >= 0) {
    console.log(time === 50 ? "Orbiter transfers from ground to internal power" :
        time === 31 ? "Ground launch sequencer is go for auto sequence start" :
        time === 16 ? "Activate launch pad sound suppression system" :
        time === 10 ? "Activate main engine hydrogen burnoff system" :
        time === 6 ? "Main engine start" :
        time === 0 ? "Solid rocket booster ignition and liftoff!" :
        "T-" + time + " seconds");
    time--;
}
