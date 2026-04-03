const count = document.getElementById("count");

setInterval(() => {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second= date.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second: second;
  count.innerText = `${hour}:${minute}:${second}`;
}, 1000);
