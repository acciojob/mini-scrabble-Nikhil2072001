//your code here
const msg = document.querySelector("#txt");
const res = document.querySelector('#para');
msg.addEventListener('input',function(){
	var s = this.value;
	res.textContent =s.length;
});