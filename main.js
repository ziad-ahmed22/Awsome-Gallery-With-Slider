let items = document.querySelectorAll("ul li");
let divImgs = document.querySelectorAll(".box");

divImgs.forEach((img) => {
  img.classList.add("show");
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    divImgs.forEach((img) => {
      img.classList.remove("show");
    });
    document.querySelectorAll(e.target.dataset.img).forEach((e) => {
      e.classList.add("show");
    });
  });
});

let imgsArr = document.querySelectorAll(".gallery img");
let imageDiv = document.querySelector(".img-slide");
let sliderCon = document.querySelector(".slider");
let bulletsDiv = document.querySelector(".bullets");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let closeBtn = document.querySelector(".close");
let bigBtns = document.querySelectorAll(".content .big");
let currentIndex = 0;

createSlider();
let spans = document.querySelectorAll(".bullets span");
let imgs = document.querySelectorAll(".img-slide img");

checker();
bulletsCheck();
zoomImage();
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlider);

function createSlider() {
  imgsArr.forEach((image, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", image.getAttribute("src"));
    img.alt = `image${index + 1}`;
    imageDiv.appendChild(img);

    let span = document.createElement("span");
    span.dataset.index = index;
    bulletsDiv.appendChild(span);
  });
}
function checker() {
  spans.forEach((span) => {
    span.classList.remove("active");
  });
  spans[currentIndex].classList.add("active");

  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  imgs[currentIndex].classList.add("active");
}
function nextSlide() {
  if (currentIndex < imgsArr.length - 1) {
    currentIndex++;
    checker();
  } else {
    currentIndex = 0;
    checker();
  }
}
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    checker();
  } else {
    currentIndex = imgsArr.length - 1;
    checker();
  }
}
function closeSlider() {
  sliderCon.style.display = "none";
  document.body.style.overflow = "visible";
}
function bulletsCheck() {
  spans.forEach((span) => {
    span.addEventListener("click", (e) => {
      currentIndex = e.target.dataset.index;
      checker();
    });
  });
}
function zoomImage() {
  bigBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      currentIndex = e.currentTarget.dataset.num - 1;
      sliderCon.style.display = "block";
      document.body.style.overflow = "hidden";
      checker();
    });
  });
}

let moreInfoBtn = document.querySelectorAll(".content .more-info");
let moreInfoDiv = document.querySelector(".img-info");
let closeInfoBTn = document.querySelector(".close-info");
let imgInfo = document.querySelector(".img-info img");
let titleInfo = document.querySelector(".img-info .title");
let contentInfo = document.querySelector(".img-info .content");

moreInfoBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showImg(e);
    showInfo();
  });
});
closeInfoBTn.addEventListener("click", hideInfo);

function showImg(e) {
  console.log(e.currentTarget);
  imgInfo.src = e.currentTarget.dataset.src;
  titleInfo.innerHTML = e.currentTarget.dataset.title;
  contentInfo.innerHTML = e.currentTarget.dataset.p;
}
function showInfo() {
  moreInfoDiv.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function hideInfo() {
  moreInfoDiv.style.display = "none";
  document.body.style.overflow = "visible";
}
