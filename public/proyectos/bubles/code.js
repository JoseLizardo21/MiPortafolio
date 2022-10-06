let navegador = navigator.userAgent;
onmouseover = bubble;
ontouchstart = bubble;
ontouchmove = bubble;
function bubble(e) {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
        x = e.changedTouches[0].clientX + "px";
        y = e.changedTouches[0].clientY + "px";
    } else {
        x = e.clientX + "px";
        y = e.clientY + "px";
    }
  let div = document.createElement("div");
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  a = Math.floor(Math.random() * 9);
  div.style.boxShadow = `0 0 5px rgba(${r},${g},${b},${a}), 0 0 8px rgba(${r},${g},${b},${a}), 0 0 10px rgba(${r},${g},${b},${a})`;
  div.style.left = x;
  div.style.top = y;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 1000);
}
