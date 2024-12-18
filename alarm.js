//take input time
let alarmTime = "18:15";

//validate input
if (!/^\d{2}:\d{2}$/.test(alarmTime)) {
    let [hours, minutes] = alarmTime.split(":")

    if (Number(hours) >= 0 && Number(hours) <= 23 && Number(minutes) >= 0 && Number(minutes) <= 59) {
        console.log("Time format is correct")
    }
    else {
        console.log("please insert hours between 0 to 23 and minutes between 0 to 59")
    }
}
else {
    // console.log("time format is not correct, kindly use eg: 12:30")

    //compare current time with alarm time every second
    let alarmCheck = setInterval(() => {

        //get current time
        let now = new Date();
        let currH = now.getHours();
        let currM = now.getMinutes();


        if (`${currH}:${currM}` === alarmTime) {
            console.log("Time's up! 🎉⏰");
            clearInterval(alarmCheck);
        }
    }, 1000);

}




