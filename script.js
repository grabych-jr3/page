let btn = document.querySelector("#button");
let link = document.querySelector("#link");
let btnClick = document.querySelector("#btnClick")

let pornArray = ["http://m.porno365.pics/movie/33574", "http://wew.porno365.bond/movie/29749", "http://m.porno365.pics/movie/33623", "http://m.porno365.pics/movie/32286", "http://m.porno365.pics/movie/33676", "http://wew.porno365.bond/movie/26307", "http://m.porno365.pics/movie/33679", "http://wew.porno365.bond/movie/30266", "http://m.porno365.pics/movie/33698", "http://wew.porno365.bond/movie/26563", ];
pornArray.splice(0, 1)
pornArray.splice(3, 1)
function chooseElemFromPornArray() {
    let a = Math.floor(Math.random() * pornArray.length);
    let b = pornArray[a]
    return b;
}
function createRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
btn.addEventListener("click", function () {
    link.href = chooseElemFromPornArray();
    link.textContent = link.href
    btn.style.backgroundColor = createRandomColor();
    link.style.color = createRandomColor();
    if (btn.style.backgroundColor == btn.style.color){
        btn.style.color = "#fff";
    }
    if (link.style.color == "#ffffff"){
        link.style.color = "#000"
    }
})


function count() {
    let counter = 0;
    return function () {
        return counter += 1;
    };
}
function increaseNumber() {
    const counter = count();
    btn.addEventListener('click', function () {
        return btnClick.value = counter();
    });
}
increaseNumber();