var times = 1000;
for (var i = 0; i < times; i ++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
      document.getElementById('js-send-msg').childNodes[1].value = '凸凸凸凸凸凸凸凸凸凸凸道歉' + i;
      document.getElementById('js-send-msg').childNodes[5].click();
    }, i * 10000);
  })(i);
}
