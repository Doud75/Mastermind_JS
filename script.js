let colors = ["blue","green","yellow","orange","red"];
let rand = [];
for(let i = 0; i < 4; i++) {
    rand[i] = colors[Math.floor(Math.random() * colors.length)]; 
}
let win = 0;
console.log(rand);
const boutonEntrer = document.querySelector("#entrez");
const boutonRetry = document.querySelector("#retry");
const boutonRed = document.querySelector("#red");
const boutonYellow = document.querySelector("#yellow");
const boutonBlue = document.querySelector("#blue");
const boutonGreen = document.querySelector("#green");
const boutonOrange = document.querySelector("#orange");

function placements(color, classe) {
    let colo1 = document.querySelector("#un");
    let colo2 = document.querySelector("#deux");
    let colo3 = document.querySelector("#trois");
    let colo4 = document.querySelector("#quatre");
    if(colo1.style.backgroundColor != "red" && colo1.style.backgroundColor != "yellow" && colo1.style.backgroundColor != "blue" && colo1.style.backgroundColor != "green" && colo1.style.backgroundColor != "orange") {
        colo1.style.backgroundColor = color;
        colo1.className = classe;
    }
    else if(colo2.style.backgroundColor != "red" && colo2.style.backgroundColor != "yellow" && colo2.style.backgroundColor != "blue" && colo2.style.backgroundColor != "green" && colo2.style.backgroundColor != "orange") {
        colo2.style.backgroundColor = color;
        colo2.className = classe;
    }
    else if(colo3.style.backgroundColor != "red" && colo3.style.backgroundColor != "yellow" && colo3.style.backgroundColor != "blue" && colo3.style.backgroundColor != "green" && colo3.style.backgroundColor != "orange") {
        colo3.style.backgroundColor = color;
        colo3.className = classe;
    }
    else if(colo4.style.backgroundColor != "red" && colo4.style.backgroundColor != "yellow" && colo4.style.backgroundColor != "blue" && colo4.style.backgroundColor != "green" && colo4.style.backgroundColor != "orange") {
        colo4.style.backgroundColor = color;
        colo4.className = classe;
    }
}

function mastermind() {
    let try1 = document.querySelector("#one")
    let try2 = document.querySelector("#two")
    let try3 = document.querySelector("#three")
    let try4 = document.querySelector("#four")
    let check1 = document.createElement("span");
    let check2 = document.createElement("span");
    check1.className = "rep1";
    check2.className = "rep2";
    let colo1 = document.querySelector("#un");
    let colo2 = document.querySelector("#deux");
    let colo3 = document.querySelector("#trois");
    let colo4 = document.querySelector("#quatre");
    var coloArr = [colo1.className, colo2.className, colo3.className, colo4.className, colo4.className];
    let badPlace = 0;
    let goodPlace = 0;
    let rand2 = [...rand];
    let coloArr2 = [...coloArr];
    for(let i = 0; i < coloArr.length; i++) {
        if(coloArr2[i] == rand2[i] && coloArr2[i] != 0 && rand2[i] != 0) {
            goodPlace += 1;
            rand2[i] = 0;
            coloArr2[i]=0;
        }
    } for(let i = 0; i < coloArr.length; i++) {
        if(rand2[i] != 0) {
            let idx = coloArr2.indexOf(rand2[i])
            if(idx != -1) {
                badPlace += 1;
                rand2[i] = 0;
                coloArr2[idx] = 0;
            }
        }
    }
    check1.innerHTML = goodPlace;
    check2.innerHTML = badPlace;

    if (coloArr[0] == rand[0] && coloArr[1] == rand[1] && coloArr[2] == rand[2] && coloArr[3] == rand[3]) {
        win = 1;
        boutonEntrer.onclick = "none";
        document.querySelector("#body").style.backgroundColor = "#14D03D";
    }
    let trys = new Array();
    let newSection = document.createElement("section");
    newSection.className = "trySection";
    for (let i = 1; i < 5; i++) {
        trys[i] = document.createElement("div");
        trys[i].className = "try"+i;
        newSection.appendChild(trys[i]);
    }
    document.body.appendChild(newSection);
    console.log(newSection);
    newSection.insertAdjacentElement("beforeend", check1);
    newSection.insertAdjacentElement("beforeend", check2);
    trys[1].style.backgroundColor = colo1.style.backgroundColor
    trys[2].style.backgroundColor = colo2.style.backgroundColor
    trys[3].style.backgroundColor = colo3.style.backgroundColor
    trys[4].style.backgroundColor = colo4.style.backgroundColor
    colo1.style.backgroundColor = "white"
    colo2.style.backgroundColor = "white"
    colo3.style.backgroundColor = "white"
    colo4.style.backgroundColor = "white"
    colo1.className = "placeHolder";
    colo2.className = "placeHolder";
    colo3.className = "placeHolder";
    colo4.className = "placeHolder";
    countInFonction(newSection);
}

let count = 0;
function countInFonction(newSection) {
    let check3 = document.createElement("span");
    check3.className = "count";
    count += 1;
    if(count >= 10) {
        count = 10;
        boutonEntrer.onclick = "none";
    }
    if(count >= 10 && win != 1) {
        document.querySelector("#body").style.backgroundColor = "#B60000";
    }
    check3.innerHTML = count;
    newSection.insertAdjacentElement("afterbegin", check3);
}

function refresh() {
    window.location.reload();
}

boutonRed.onclick = function() { placements("red", "red"); };
boutonYellow.onclick = function() { placements("yellow", "yellow"); };
boutonBlue.onclick = function() { placements("blue", "blue"); };
boutonGreen.onclick = function() { placements("green", "green"); };
boutonOrange.onclick = function() { placements("orange", "orange"); };
boutonEntrer.onclick = mastermind;
// boutonEntrer.addEventListener("click", countInFonction);

boutonRetry.onclick = refresh;


