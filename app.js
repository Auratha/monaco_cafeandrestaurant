let shootingimages = ["img/shooting/img1.jpg", "img/shooting/img2.jpg", "img/shooting/img3.jpg", "img/shooting/img4.jpg", "img/shooting/img5.jpg",
                      "img/shooting/img6.jpg", "img/shooting/img7.jpg", "img/shooting/img8.jpg", "img/shooting/img9.jpg", "img/shooting/img10.jpg",
                      "img/shooting/img11.jpg", "img/shooting/img12.jpg", "img/shooting/img13.jpg", "img/shooting/img14.jpg", "img/shooting/img15.jpg",
                      "img/shooting/img16.jpg", "img/shooting/img17.jpg", "img/shooting/img18.jpg", "img/shooting/img19.jpg"];
let index = 0;
const imgplace = document.getElementById('changeimg');


setInterval(function () {
    imgplace.src = shootingimages[index];
    index > shootingimages.length - 2 ? index = 0 : index++;
    console.log(index);
}, 3000);

