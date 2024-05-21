

window.onload = function () {

    console.log("saaaaaaaaas")
    const starsArea=document.getElementById("stars-area")
    for (let i = 0; i < 10; i++) {
        console.log("saaaaaaaaas")
        const star=document.createElement("button")
        star.classList.add("star")
        star.innerText="saaaaaaaaaaaaaaas";
        star.style.height=100;
        star.style.width=100;
        star.style.backgroundImage="url('../img/star.svg')";
        starsArea.appendChild(star)
    }

}
