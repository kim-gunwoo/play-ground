const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);
const menuAdd = document.querySelector('#menuAdd');
const product = ["햄버거", "순대국", "정식당", "중국집", "구내식당"];
const imgs = [
  'https://d2twywxul87hjh.cloudfront.net/event/naver-place/one-hundred-new/landing1.png',
  'https://d2twywxul87hjh.cloudfront.net/event/naver-place/one-hundred-new/landing2.png',
  'https://d2twywxul87hjh.cloudfront.net/event/naver-place/luckydraw/landing1-v2.png',
  'https://d2twywxul87hjh.cloudfront.net/event/naver-place/luckydraw/landing2-v2.png',
  'https://velog.velcdn.com/images/reasonz/post/e608a669-21b4-4c61-9051-cef3daf54d1d/image.png'
]
const colors = [];

const imgElems = [];

imgs.forEach((img) => {
  const imgElem = new Image();
  imgElem.src = img;
  imgElems.push(imgElem);
  imgElem.addEventListener('load', () => {
    
  });
})

const newMake = () => {
  const [cw, ch] = [$c.width / 2, $c.height / 2];
  const arc = Math.PI / (product.length / 2);
  for (let i = 0; i < product.length; i++) {
    ctx.beginPath();
    if (colors.length == 0) {
      for (var l = 0; l < product.length; l++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        colors.push("rgb(" + r + "," + g + "," + b + ")");
      }
    }
    ctx.fillStyle = colors[i % (colors.length)];
    ctx.moveTo(cw, ch);
    ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
    ctx.fill();
    ctx.closePath();
  }

  ctx.fillStyle = "#fff";
  // ctx.font = "18px Pretendard";
  ctx.font = "300px Pretendard";
  ctx.textAlign = "center";

  for (let i = 0; i < product.length; i++) {
    const angle = (arc * i) + (arc / 2);

    ctx.save();

    ctx.translate(
      cw + Math.cos(angle) * (cw - 50),
      ch + Math.sin(angle) * (ch - 50)
    );

    ctx.rotate(angle + Math.PI / 2);


    ctx.drawImage(imgElems[i], 0, 0, 3000, 3000, -315, 400, 1500, 1500);


    product[i].split(" ").forEach((text, j) => {
      // ctx.fillText(text, 0, 30 * j);
      ctx.fillText(text, 0, 300);
    });

    ctx.restore();
  }
}

const rotate = () => {
  $c.style.transform = `initial`;
  $c.style.transition = `initial`;
  // const alpha = Math.floor(Math.random()*100);
  const alpha = 30;

  setTimeout(() => {
    // const ran = Math.floor(Math.random() * product.length);
    const ran = 20;
    const arc = 360 / product.length;
    // const rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4) + alpha;
    const rotate = 5000;
    $c.style.transform = `rotate(-${rotate}deg)`;
    $c.style.transition = `2s`;

  }, 1);
};


function add() {
  if (menuAdd.value != undefined && menuAdd.value != "") {
    product.push(menuAdd.value);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors.push("rgb(" + r + "," + g + "," + b + ")");
    newMake();
    menuAdd.value = "";
  }
  else {
    alert("메뉴를 입력한 후 버튼을 클릭 해 주세요");
  }
}




newMake();
