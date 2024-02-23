const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

function updateTime() {
    days.innerHTML="HAI";
    const currentYear = new Date().getFullYear();
    //This for fetching new year o/p => in milliseconds
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    // console.log(newYear);

    //this is for fetching the current date
    const currentDate = new Date();

    //This is for diff b/w new year and current year
    const diff = newYear - currentDate;

    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minute = Math.floor((diff / 1000 / 60) % 60);
    const second = Math.floor((diff / 1000) % 60);

    /*
    1000ms=1s
    60s=1m
    60m=1hr
    24hrs=1day
    */
    //This is for finding no of days
    days.innerHTML=day<10?"0"+day:day; //it will print in the that location
    hours.innerHTML=hour<10?"0"+hour:hour;
    minutes.innerHTML=minute<10?"0"+minute:minute;
    seconds.innerHTML=second<10?"0"+second:second;
}
setInterval(updateTime,1000); //It will automatically call that function for every 1000 ms..

