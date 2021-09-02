var startDate = new Date('2020,8,29');
var nowDate = new Date();
var gap = nowDate.getTime() - startDate.getTime();
var dDay = Math.floor(gap/ (1000 * 60 * 60 * 24))+1;
document.getElementById('dday').innerText = dDay;