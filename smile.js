
window.onload = function () {
    //draw();
	startfnc();
};

function startfnc()
{
  //関数draw()を1000ミリ秒間隔で呼び出す
  //setInterval("draw()",10000);
  setInterval("draw()",Math.random() * 10000);
};

function disappear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    var canvas = document.getElementById('mycanvas');
    if (!canvas || !canvas.getContext) return false;
    var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	
    // 任意の文字をランダム描画
    ctx.globalAlpha = 0.5;

	 x = Math.floor(Math.random() * 200);
	 y = Math.floor(Math.random() * 200);
	 r = Math.floor(Math.random() * 100);


	/* Imageオブジェクトを生成 */
	var img = new Image();
	img.src = "smile.png";
	/* 画像を描画 */
	ctx.drawImage(img, x, y);
	
	canvas.addEventListener("click", mouseDownListner, false);
	
	setTimeout(clearcanvas, 3000);

	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function mouseDownListner(e) {
	var rect = e.target.getBoundingClientRect();
	//座標取得
	mouseX = e.clientX - rect.left;
	mouseY = e.clientY - rect.top;
	if (mouseX > x && mouseX < x + 30) {
		if (mouseY > y && mouseY < y + 30) {
		    	location.href = "https://release.co.jp/";
		}
	}
}

function clearcanvas(){
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
