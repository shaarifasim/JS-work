
var colors=["Tomato","red","Orange","DodgerBlue","MediumSeaGreen","Gray","SlateBlue","Violet","LightGray"];


for(var i=1;i<=24;i++){

var balloo=document.getElementById(`balloon${i}`);
balloo.style.backgroundColor=colors[Math.floor(Math.random()* colors.length)];
}




document.addEventListener('click', function(e){
    
    if (e.target.className === "baloon"){
        
                e.target.style.backgroundColor =colors[Math.floor(Math.random()* colors.length)];
                popped++;
                
    }   
});
var startingMintes = 1;
var time = startingMintes * 60;
var countDown = document.getElementById("Timer");

var settime = setInterval(updateCountDown, 1000)
function updateCountDown() {
    var minutes = Math.floor(time / 60)
    let second = time % 60;
    second = second < 1 ? '0' + second : second;
    countDown.innerText = `${minutes} : ${second}`;
    time--;}
