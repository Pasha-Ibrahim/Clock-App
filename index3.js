const count = document.getElementById("count");

setInterval(() => {
  const date = new Date();

  let saat = date.getHours();
  let deqiqe = date.getMinutes();
  let saniye = date.getSeconds();
  saat = saat < 10 ? "0" + saat : saat;
  deqiqe = deqiqe < 10 ? "0" + deqiqe : deqiqe;
  saniye = saniye < 10 ? "0" + saniye : saniye;
  count.innerText = `${saat}:${deqiqe}:${saniye}`;
}, 1000);
