var time = document.getElementById("time"); // 计时器文本框
start = document.getElementById("start"); // 开始按扭
pause = document.getElementById("pause"); // 暂停按钮
reset = document.getElementById("reset"); // 重置按钮
ss = 1;
h = 0;
m = 0;
s = 0;
interval = undefined;

function count() {
	ss++;
	if ((ss % 100) == 0) {
		s++;
		ss = 1;
	};
	if (s > 0 && (s % 60) == 0) {
		m++;
		s = 0;
	};
	if (m > 0 && (m % 60) == 0) {
		h++;
		m = 0;
	};

	time.value = h + ":" + m + ":" + s + ":" + ss;
};

start.onclick = function() {
	if (interval == undefined) {
		interval = setInterval(count, 10); // setInterval的第一个参数是"count()"  或者是count，，不能是count()!!!
	}
};
pause.onclick = function() {
	clearInterval(interval);
	interval = undefined;
};
reset.onclick = function() {
	clearInterval(interval);
	interval = undefined;
	ss = 1;
	h = m = s = 0;
	time.value = "0:0:0:00";
};

