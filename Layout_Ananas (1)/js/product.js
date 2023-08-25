const imgHover = document.querySelectorAll("#products .card");
const listProductEl = document.querySelector(".list-product");

const imgEvent = [
  ["/img/product/product1-hover.jpg", "/img/product/product1-normal.jpg"],
  ["/img/product/product2-hover.jpg", "/img/product/product2-normal.jpg"],
  ["/img/product/product3-hover.jpg", "/img/product/product3-normal.jpg"],
  ["/img/product/product4-hover.jpg", "/img/product/product4-normal.jpg"],
  ["/img/product/product5-hover.jpg", "/img/product/product5-normal.jpg"],
  ["/img/product/product6-hover.jpg", "/img/product/product6-normal.jpg"],
];
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
  // console.log(prevElement)
}
slider();

imgHover.forEach((el) => {
  el.addEventListener("mouseover", (event) => {
    const img = el.querySelector(".img-hover.img-out");
    const index = img.getAttribute("data-index");
    img.setAttribute("src", imgEvent[index][0]);
  });
  el.addEventListener("mouseout", (event) => {
    const img = el.querySelector(".img-hover.img-out");
    const index = img.getAttribute("data-index");
    img.setAttribute("src", imgEvent[index][1]);
  });
});

const fetchingData = async () => {
  const json = await fetch("../data/data-product.json");
  const data = await json.json();

  const html = data
    .map(
      (item, index) => `
    <div class="col-4">
    <div class="card border-0 flex-column">
      <div class="position-relative w-100">
        <img
          class="img-hover img-out w-100 object-fit-cover"
          src="/img/product/${item.img[0]}"
          alt=""
          data-index="${index}"
        />
        <button class="btn btn-danger position-absolute">
          <a class="text-decoration-none text-white text-uppercase d-block" href="/view/detailProduct.html?id=${item.id}">
            Xem Sản Phẩm
          </a>
        </button>
        <div class="position-absolute " style="right: 15px; bottom: 15px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#F21414" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
      </div>
      <div
        class="card-body flex-column d-flex px-3 py-2 text-center gap-2"
      >
        <h4 class="card-title mb-0">${item.name_product}</h4>
        <p class="card-name mb-0">${item.color_product}</p>
        <p class="card-price mb-0 fw-semibold fs-5"${item.price}</p>
      </div>
    </div>
  </div>
    `
    )
    .join("");
  listProductEl.innerHTML = html;
};

fetchingData();
