function onTime(input) {
  let examH = Number(input[0]);
  let examM = Number(input[1]);
  let arrivalH = Number(input[2]);
  let arrivalM = Number(input[3]);

  let examTime = examH * 60 + examM;
  let arrivalTime = arrivalH * 60 + arrivalM;

  let diff = Math.abs(arrivalTime - examTime);

  if (examTime < arrivalTime) {
    console.log("Late");
    let h = Math.floor(diff / 60);
    let m = diff % 60;
    if (diff >= 60) {
      if (m < 10) {
        console.log(`${h}:0${m} hours after the start`);
      } else {
        console.log(`${h}:${m} hours after the start`);
      }
    } else {
      console.log(`${m} minutes after the start`);
    }
  } else if (examTime === arrivalTime || examTime - arrivalTime <= 30) {
    console.log("On time");
    if (diff > 0) {
      let m = diff % 60;
      console.log(`${m} minutes before the start`);
    }
  } else {
    console.log("Early");
    let h = Math.floor(diff / 60);
    let m = diff % 60;
    if (h > 0) {
      if (m < 10) {
        console.log(`${h}:0${m} hours before the start`);
      } else {
        console.log(`${h}:${m} hours before the start`);
      }
    } else {
      console.log(`${m} minutes before the start`);
    }
  }
}
onTime(["9", "30", "8", "15"]);
