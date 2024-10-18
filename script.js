//mobile nav menu fuctionality

const toggleNav = () => {
    const openBtn = document.querySelector(".hamburger_btn");
    const closeBtn = document.querySelector(".close_mobile_nav");
    const mobileMenu = document.querySelector(".mobile_menu");

    const openMenu = () => {
        mobileMenu.classList.add("showmenu");
    };

    openBtn.addEventListener("click", openMenu);

    const closeMenu = () => {
        mobileMenu.classList.remove("showmenu");
    };
    closeBtn.addEventListener("click", closeMenu);

    mobileMenu.onclick = () => {
        mobileMenu.classList.remove("showmenu");
    };
};

toggleNav();

const imagesArr = [
    "images/nails1.jpg",
    "images/nails2.jpg",
    "images/nails3.jpg",
    "images/nails4.jpg",
    "images/nails5.jpg",
];

//image slider functionality
const createSlides = () => {
    const sliderPar = document.querySelector(".image_slider");
    imagesArr.map((image) => {
        const imgTag = document.createElement("img");
        imgTag.setAttribute("src", `${image}`);
        imgTag.setAttribute("class", "slides");
        sliderPar.append(imgTag);

        let currentImage = imagesArr.indexOf(image);
        const scrollRight = () => {
            if (currentImage < imagesArr.length - 1) {
                currentImage++;
            } else {
                currentImage = 0;
            }
            imgTag.setAttribute("src", `${imagesArr[currentImage]}`);
            sliderPar.style.backgroundImage = `url(${imagesArr[currentImage]})`;
            sliderPar.style.backgroundSize = "cover";
            sliderPar.style.backgroundPosition = "center";
            sliderPar.style.objectFit = "cover";
        };

        const scrollLeft = () => {
            if (currentImage > 0) {
                currentImage--;
            } else {
                currentImage = imagesArr.length - 1;
            }
            imgTag.setAttribute("src", `${imagesArr[currentImage]}`);
            sliderPar.style.backgroundImage = `url(${imagesArr[currentImage]})`;
            sliderPar.style.backgroundSize = "cover";
            sliderPar.style.backgroundPosition = "center";
            sliderPar.style.objectFit = "cover";
        };

        const intervalId = setInterval(() => {
            scrollRight();
        }, 5000);

        const scrollLeftBtn = document
            .querySelector(".scroll_left")
            .addEventListener("click", () => {
                scrollLeft();
                clearInterval(intervalId);
            });
        const scrollRightBtn = document
            .querySelector(".scroll_right")
            .addEventListener("click", scrollRight);
    });
};

createSlides();
