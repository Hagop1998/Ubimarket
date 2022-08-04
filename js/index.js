// /////////////////// loading categories //////////
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
    document.querySelector(".loader").style.display = "none";
}



// import { productListArray } from "./script2.js";

// /////////////////// categories///////////////////////////

fetch("http://universities.hipolabs.com/search?country=United+States")
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    data = data.splice(0, 20);
    const categoryDiv = document.getElementById("categoryDiv");
    for (const cat of data) {
      const liCategory = document.createElement("div");
      liCategory.innerHTML = `${cat.alpha_two_code}  ${cat.country} `;
      // liCategory.className = "lists-a";
      categoryDiv.appendChild(liCategory);
    }
    $(".slider").slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 3,
      prevArrow: false,
      nextArrow: false,
      dots: false,
      widthVariable: true,
    });
  });



// ////////////////sircle-image///////////////////////

const listSotres = [
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
  {
    photo_url: "./circle-slick-slider/5da8b8502c022.jpg",
    name: "Book-Center",
    isSponsered: "sponsored",
    link: "index6.html",
  },
];

const storeImgg = document.getElementById("storeImg");
if (storeImgg) {
  for (const list of listSotres) {
    const mainaaaa = document.createElement("a");
    const mainImg = document.createElement("img");
    const mainH4 = document.createElement("h4");
    const mainH5 = document.createElement("h5");

    mainImg.src = list.photo_url;
    mainH4.innerHTML = list.name;
    mainH5.innerHTML = list.isSponsered;
    mainaaaa.href = list.link;

    mainaaaa.className = "storeItem";
    mainH5.className = "sliderr-h5";
    mainH4.className = "sliderr-h4";
    mainaaaa.appendChild(mainImg);
    mainaaaa.appendChild(mainH4);
    mainaaaa.appendChild(mainH5);
    storeImgg.appendChild(mainaaaa);
  }
}

$(".sliderr").slick({
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  dots: false,
  widthVariable: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
});




























////////////////////////////////cards////////////////////////////
const queryString = window.location.search;
// console.log("uurl", queryString);

const cards = [
  {
    images: "./cards/1588002143014.jpg",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 1,
    rating: 4,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/5da47539c3f9c.jpg",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 2,
    rating: 5,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/325daf113fd512d.png",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 3,
    rating: 2,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/2075fdcd2dc4e5fd.png",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 4,
    rating: 4,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/2075fde5014945f4.png",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 5,
    rating: 1,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/2075fe1c0e9db221.png",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 6,
    rating: 5,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/6066b995295fa.jpg",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 7,
    rating: 3,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/20661b0cb8b103ac.png",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 8,
    rating: 2,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/5da47539c3f9c.jpg",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 9,
    rating: 4,
    reviews: "(0 reviews)",
  },
  {
    images: "./cards/1588002143014.jpg",
    paragraph: "Lorem, ipsum dolor",
    price: "$ 28.80",
    link: "index5.html",
    id: 10,
    rating: 5,
    reviews: "(0 reviews)",
  },
];



const createProductDivv = (card) => {
  const productA = document.createElement("a");
  productA.href = card.link;
  productA.className = "grid-container";



  const bottomDiv = document.createElement("div");
  const productParagraph = document.createElement("p");




  const productImage = document.createElement("img");
  productImage.src = card.images;
  productImage.className = "img-product";


  productParagraph.innerHTML = card.paragraph;


  const productPrice = document.createElement("span");
  productPrice.innerHTML = card.price;
  productPrice.className = "price";



  const productRating = document.createElement("div");



  for (let i = 0; i < card.rating; i++) {
    const productRatingImg = document.createElement("i")
    productRatingImg.className = "fa fa-star"
    productRating.appendChild(productRatingImg);
  }
  
  const productReviews = document.createElement("span");
  productReviews.innerHTML = card.reviews;
  productReviews.className = "reviews"
  productRating.appendChild(productReviews);


  const productFirstDiv = document.createElement("div");
  productFirstDiv.appendChild(productImage);

  bottomDiv.appendChild(productParagraph);
  bottomDiv.appendChild(productPrice);


  productA.appendChild(productFirstDiv);
  productA.appendChild(bottomDiv);
  productA.appendChild(productRating);

  return productA;
};



















const productCard = document.getElementById("productCards");
if (productCard) {
  for (const card of cards) {
    let car = createProductDivv(card);
    // car.className = "card";
    // car.className = "grid-container";
    productCard.appendChild(car);
  }
}


























const productCardsim = document.getElementById("productCardss");
if (productCardsim) {
function getMultipleRandom(cards, num) {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

let randomList = getMultipleRandom(cards, 5);

console.log("shuffled card is :", randomList);

const createsimilarproductdiv = (spl) => {
  const SimilarA = document.createElement("a");
  const bottomDiv = document.createElement("div");
  const productImage = document.createElement("img");
  const productParagraph = document.createElement("p");
  const productPrice = document.createElement("span");

  
  const productRating = document.createElement("div");
  for (let i = 0; i < spl.rating; i++) {
    const productRatingImg = document.createElement("i");
    productRatingImg.className = "fa fa-star";
    // productRating.className = "productRating";
    productRating.appendChild(productRatingImg);
  }

  const productReviews = document.createElement("span");
  productReviews.innerHTML = spl.reviews;
  productReviews.className = "reviews";
  productRating.appendChild(productReviews);


  productImage.src = spl.images;
  productImage.className = "img-product2";
  productParagraph.innerHTML = spl.paragraph;
  SimilarA.href = spl.link + "?id=" + spl.id;
  // bottomDiv.className = "grid-containerr";
  productPrice.innerHTML = spl.price;
  productPrice.className = "price";

  SimilarA.appendChild(bottomDiv);
  bottomDiv.appendChild(productImage);
  bottomDiv.appendChild(productParagraph);
  bottomDiv.appendChild(productPrice);
  bottomDiv.appendChild(productRating);

  return SimilarA;
};

// const similarProductCard = document.getElementById("productCards");
for (const spl of randomList) {
  let car2 = createsimilarproductdiv(spl);
// car2.className = "grid-containerr";
// car2.className = "gridd";
car2.classList.add("grid-containerr", "gridd");
  productCardsim.appendChild(car2);
}

}

// ///////////////// scroll to top////////////////////

const toTop = document.querySelector(".to-top");
if (toTop) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });
}

// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = () => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// };
// loginBtn.onclick = () => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// };
// signupLink.onclick = () => {
//   signupBtn.click();
//   return false;
// };

// var btnContainer = document.getElementById("slide");
// var btns = btnContainer.getElementsByClassName("slide signup");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active");
//     this.className += "active";
//   });
// }

///////////////sircle images/////////////////////
// $(".sliderr").slick({
//   infinite: true,
//   slidesToShow: 10,
//   slidesToScroll: 1,
//   centered: true,
//   prevArrow: false,
//   nextArrow: false,
//   dots: false,
//   widthVariable: true,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

///////////////////////// images////////////////////////
$(".autoplay").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centered: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

// ////////////////// toggle password/////////////////
var state = false;
function Toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    state = true;
  }
}
