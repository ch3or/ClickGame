let a = 0;
function circle() {
    a++;
    var w = window.innerWidth - 150;
    var h = window.innerHeight - 150;
    var audio = new Audio('./hitHurt.wav');
    audio.loop = false;
    var randomtop = Math.floor(Math.random() * h) + 1;
    var randomleft = Math.floor(Math.random() * w) + 1;
    document.getElementById('circle').style.top= randomtop + 'px';
    document.getElementById('circle').style.left= randomleft + 'px';
    document.getElementById('display').innerHTML= 'Score: ' + a;
    audio.play(); 
}