document.body.onload = addNewDiv;
var mainbody = document.getElementById('mainbody');
var newDiv = addNewDiv();
mainbody.appendChild(newDiv);
function addNewDiv() {
	var newDiv = document.createElement('div');
	var innerHtml = '<label value="设置次数" style="display:block;"></label>' +
					'<input type="text" id="send-times" style="display:block; placeholder="设置弹幕发送次数"">' +
					'<input type="button" value="设置"" id="set-btn">';
	newDiv.innerHTML = innerHtml
	newDiv.setAttribute('id', 'send-danmu');
	newDiv.setAttribute('style', 'z-index:9999;width:200px;height:150px;position:fixed;right:10%;top:50%');
	return newDiv;
}

var btn = document.getElementById('set-btn');
btn.addEventListener('click', function() {
	var times = +document.getElementById('send-times').value;
	console.log('have add listener');
	console.log('the time is' + times);
	for (var i = 0; i < times; i ++) {
		console.log(times);
	  (function(i) {
	    setTimeout(function() {
	      console.log(i);
	      document.getElementById('js-send-msg').childNodes[1].value = '凸凸凸凸凸凸凸凸凸凸凸道歉' + i;
	      document.getElementById('js-send-msg').childNodes[5].click();
	    }, i * 10000);
	  })(i);
	}
})


