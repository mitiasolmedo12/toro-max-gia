const yesBtn = document. querySelector( "#yesBtn");

yesBtn.addEventListener("click", function () {
    alert("si sabia Aron maricon ajajjajajjajakajahj ")
});

const noBtn= document.querySelector("#noBtn")

noBtn.addEventListener("mouseover", function() { 

    const randomX = parseInt( Math.random() *100);
    const randomY= parseFloat( Math.random() *100);
    noBtn.style. setProperty ("top",randomY+"%");
    noBtn.style. setProperty("left" , randomX+"%");
    noBtn.style.setProperty("transform","traslate(-${randomX} %,-${ randomY}%)" );
})