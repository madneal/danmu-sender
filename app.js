document.body.onload = addNewDiv;
var mainbody = document.getElementById('mainbody');
var newDiv = addNewDiv();
mainbody.appendChild(newDiv);
function addNewDiv() {
	var newDiv = document.createElement('div');
	var innerHtml = '<input type="text" id="danmu-content" style="display:block;margin:5px;" placeholder="设置弹幕内容">' +
					'<input type="text" id="send-times" style="display:block;margin:5px;" placeholder="设置弹幕发送次数">' +
					'<input type="button" value="设置" id="set-btn" style="margin:5px;">' +
					'<input type="button" value="取消" id="cancel-btn" style="margin:5px;">';
	newDiv.innerHTML = innerHtml
	newDiv.setAttribute('id', 'send-danmu');
	newDiv.setAttribute('style', 'z-index:9999;width:8%;height:12%;position:fixed;right:0;top:50%;background:lightgray;opacity:0.6;');
	return newDiv;
}

var btn = document.getElementById('set-btn');
var cancelBtn = document.getElementById('cancel-btn');

var isCancel = false;
btn.addEventListener('click', function() {
	var times = +document.getElementById('send-times').value;
	var danmuContent = document.getElementById('danmu-content').value;
	var timer;
	for (var i = 0; i < times; i ++) {
		cancelBtn.addEventListener('click', function() {
			isCancel = true;
			times = 0;
			document.getElementById('danmu-content').value = '';
			clearTimeout(timer);
		})
		if (!isCancel) {
			(function(i) {
			  timer = setTimeout(function() {
			    console.log(i);
			    document.getElementById('js-send-msg').childNodes[1].value = danmuContent + i;
			    document.getElementById('js-send-msg').childNodes[5].click();
			  }, i * 10000);
			})(i);
		}

	}
})


