

let darkBtn = document.querySelector(".d-btn");
let currMode = "light";
darkBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundImage = " url(./assets/darkmodebg.jpg)";
        darkBtn.innerText = "Disable D-Mode";
        darkBtn.style.color = "Red";
        document.querySelector(".intro").style.color = "white";
        document.querySelector(".title").style.color = "white";
        document.querySelector(".btn1").style.color = "white";
        document.querySelector(".login").style.color = "white";
        document.querySelector(".des-heading").style.color = "white";
        document.querySelector(".standout").style.color = "white";
        document.querySelector(".des-para").style.color = "rgb(230, 223, 223)";
        document.querySelector(".navbar").style.background = "black";
        document.querySelector(".navbar").style.color = "white";
        document.querySelector(".nav-btns1").style.color = "white";
        document.querySelector(".nav-btns2").style.color = "white";
        document.querySelector(".nav-btns3").style.color = "white";
        document.querySelector(".nav-btns4").style.color = "white";
        document.querySelectorAll(".item3").style.color = "green";
        document.getElementsByClassName(".footer").style.color = "white";


    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundImage = "url(./assets/modern-office-interior-with-white-walls-concrete-floor-white-computer-table-with-laptop-plant-3d-rendering-mock-up.jpg)";
        darkBtn.innerText = "Enable D-Mode";
        darkBtn.style.color = "rgb(2, 255, 2)";
        document.querySelector(".intro").style.color = "black";
        document.querySelector(".title").style.color = "black";
        document.querySelector(".btn1").style.color = "black";
        document.querySelector(".login").style.color = "black";
        document.querySelector(".des-heading").style.color = "black";
        document.querySelector(".standout").style.color = "black";
        document.querySelector(".des-para").style.color = "rgb(33, 33, 33)";
        document.querySelector(".navbar").style.background = "rgb(221, 224, 223)";
        document.querySelector(".navbar").style.color = "black";
        document.querySelector(".nav-btns1").style.color = "black";
        document.querySelector(".nav-btns2").style.color = "black";
        document.querySelector(".nav-btns3").style.color = "black";
        document.querySelector(".nav-btns4").style.color = "black";
        document.querySelectorAll(".item3").style.color = "green";
        

    }
    console.log(currMode);

}
)















