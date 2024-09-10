function showAlert() {
    alert('你好，这是一个简单的网站！');
}
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "xcm.jpg") {
        myImage.setAttribute("src", "xcm2.jpg");
    } else {
        myImage.setAttribute("src", "xcm.jpg");
    }
};
