var numberOfKeyButtons = document.querySelectorAll(".key").length;
for(var i = 0; i < numberOfKeyButtons; i++){

    document.querySelectorAll(".key")[i].addEventListener("click",function(){
        
        var audio = new Audio(/home/tifelabs/Desktop/animal - sounds/assets/sounds/cow.wav)
        audio.play()
    });

}