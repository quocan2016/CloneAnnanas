var app = angular.module("myApp", []).controller("myCtrl", function ($scope) {
  $scope.catelogys = [
    {
      img: "catalogy-1.jpg",
      link: [
        {
          title: "New Arrivals",
          href: "/view/product.html",
        },
        {
          title: "Best Seller",
          href: "",
        },
        {
          title: "Sale-off",
          href: "",
        },
      ],
    },
    {
      heading: "Giày Nam",
      img: "catalogy-2.jpg",
      link: [
        {
          title: "New Arrivals",
          href: "/view/product.html",
        },
        {
          title: "Best Seller",
          href: "",
        },
        {
          title: "Sale-off",
          href: "",
        },
      ],
    },
    {
      heading: "Giày Nam",
      img: "catalogy-3.jpg",
      link: [
        {
          title: "New Arrivals",
          href: "",
        },
        {
          title: "Best Seller",
          href: "",
        },
        {
          title: "Sale-off",
          href: "",
        },
      ],
    },
    {
      heading: "Giày Nam",
      img: "catalogy-3.jpg",
      link: [
        {
          title: "New Arrivals",
          href: "/view/product.html",
        },
        {
          title: "Best Seller",
          href: "",
        },
        {
          title: "Sale-off",
          href: "",
        },
      ],
    },
  ];
});
const slideArr = [
  "Hello Ananas",
  "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE",
  "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH",
];

function slider() {
  const sliderElement = document.querySelector(".slider");
  const prevElement = sliderElement.querySelector(".prev");
  const nextElement = sliderElement.querySelector(".next");
  const textElement = sliderElement.querySelector(".slide-text");

  var i = 0;
  textElement.textContent = slideArr[i];

  function sliderEngine() {
    i++;
    if (i > slideArr.length - 1) i = 0;
    textElement.textContent = slideArr[i];
  }

  let sliderRun = setInterval(sliderEngine, 1500);

  sliderElement.onmouseover = () => {
    clearInterval(sliderRun);
  };

  sliderElement.onmouseout = () => {
    sliderRun = setInterval(sliderEngine, 1500);
  };

  function prev() {
    i--;
    if (i === 0 || i < 0) {
      i = slideArr.length - 1;
      textElement.textContent = slideArr[i];
    } else {
      textElement.textContent = slideArr[i];
    }
  }
  function next() {
    i++;
    if (i >= slideArr.length - 1) {
      i = 0;
      textElement.textContent = slideArr[i];
    } else {
      textElement.textContent = slideArr[i];
    }
  }
  prevElement.onclick = () => {
    prev();
  };
  nextElement.onclick = () => {
    next();
  };
  console.log(prevElement);
}
slider();
