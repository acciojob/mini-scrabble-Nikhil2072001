//your code here
const msg = document.querySelector("#evaluatedText");
const res = document.querySelector('#letterCount');
msg.addEventListener('input',function(){
	var s = this.value;
	res.textContent =s.length;
});