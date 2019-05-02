
var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

//alert("hello world");

var myImage = document.querySelector("img");
var imgSelCnt = 0;

myImage.onclick = function (){
    alert("痛っ！つつくのはやめて！");
    var mySrc =myImage.getAttribute("src");
    if(imgSelCnt===2){
        if(mySrc==="images/owl-img-dark.jpg"){
            myImage.setAttribute("src", "images/owl-img-blue.jpg");
        } else {
            myImage.setAttribute("src", "images/owl-img-dark.jpg");
        }
        imgSelCnt = 0;
    } else {
        imgSelCnt++;
    }
}

var myButton = document.querySelector("button");

function setUserName(){
    var myName = prompt("あなたの名前を入力してください。")
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool," + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool," + storedName;
}

myButton.onclick = function(){
    setUserName();
}
