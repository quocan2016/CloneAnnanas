const cartHover = document.querySelector(".cart-icon");
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

const cart = document.querySelector(".product_cart");
const _listProduct = JSON.parse(localStorage.getItem("product")) || [];
console.log(_listProduct);
const listProduct = _listProduct.length > 0 ? new Map(_listProduct) : new Map();
function renderCart() {
  if (listProduct.size == 0) {
    cart.innerHTML = "";
  }
  if (listProduct.size > 0) {
    const nList = Array.from(listProduct);
    cart.innerHTML = nList.reduce((t, el) => {
      const [id, quantity] = el;
      if (listProduct.has(id)) {
        const value = JSON.parse(id);
        return (
          t +
          `
          <div
          class="card mb-3 border-0"
          style="max-width: 100%; height: 250px"
          >
          <div class="row g-4">
          <div class="col-md-3">
          <img
          src="${value.imgProduct}"
          class="d-block object-fit-cover w-100 h-100 img-product"
          />
            </div>
            <div class="col-md-9">
              <div class="card-body p-0">
              <div class="card-body-top">
              <h5 class="card-title name-product">
              ${value.nameProduct} <span class="id_product" style="visibility:hidden; opacity: 0">${value.id}</span>
              </h5>
              <span class="price">${value.priceProduct}</span>
              </div>
              <div class="card-body-bottom">
                <span class="price-saleoff">
                  <strong>Giá:</strong> ${value.priceProduct}
                </span>
                <span span class="status"> Còn Hàng </span>
              </div>
              <div class="card-body-service">
              <div class="service-left">
                <div>
                  <h6>Size</h6>
                  <input type="number" class="form-control size_product" value="${value.sizeProduct}" disabled>
                </div>
                <div>
                  <h6>Số Lượng</h6>
                  <input type="number" class="form-control quantity_product" value="${quantity}">
                </div>
              </div>
              <div class="service-right">
                <button class="btn btn-primary heart-btn">
                  <span>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000"
                      class="bi bi-heart"
                          viewBox="0 0 16 16"
                          >
                          <path
                          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                          />
                          </svg>
                          </span>
                </button>
                <button class="btn btn-dark remove_product">
                  <span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                    >
                    <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                    </svg>
                    </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   `
        );
      }
    }, "");
    const removeProduct = document.querySelectorAll(".remove_product");
    console.log(removeProduct);
    removeProduct.forEach(
      (el) =>
        (el.onclick = (e) => {
          // e.stopPropagation();
          const cardEl = getParentElement(e.target, "card");
          console.log(cardEl);
          removeItem({
            id: `${cardEl.querySelector(".id_product").innerHTML}`,
            nameProduct: cardEl.querySelector(".name-product").innerText.trim(),
            imgProduct: cardEl.querySelector(".img-product").src,
            sizeProduct: cardEl.querySelector(".size_product").value,
            priceProduct: cardEl.querySelector(".price").innerText,
 
          });
        })
    );
    const quantity = document.querySelectorAll(".quantity_product");
    quantity.forEach(
      (el) =>
        (el.onchange = (e) => {
          const cardEl = getParentElement(e.target, "card");
          const quantity = cardEl.querySelector(".quantity_product").value;
          changeQuantity({
            id: `${cardEl.querySelector(".id_product").innerHTML}`,
            nameProduct: cardEl.querySelector(".name-product").innerText.trim(),
            imgProduct: cardEl.querySelector(".img-product").src,
            sizeProduct: cardEl.querySelector(".size_product").value,
            priceProduct: cardEl.querySelector(".price").innerText,

          },Number(quantity));
        })
    );
    console.log(listProduct);
    totalPrice();
  }
}
renderCart();

function removeItem(product) {
  listProduct.has(JSON.stringify(product))
    ? listProduct.delete(JSON.stringify(product))
    : "";
  localStorage.setItem("product", JSON.stringify([...listProduct]));
  renderCart();
  console.log(listProduct);
}

function changeQuantity(product, quantity) {
  const key = JSON.stringify(product);
  console.log(listProduct)
  if (listProduct.has(key)) {
    listProduct.set(key, quantity);
  }
  localStorage.setItem("product", JSON.stringify([...listProduct]));
  renderCart();
}

function getParentElement(element, selectorParent) {
  // console.log(element);
  return element.parentElement.classList.contains(selectorParent)
    ? element.parentElement
    : getParentElement(element.parentElement, selectorParent);
}

const removeAll = document.querySelector(".removeAll");
removeAll.onclick = (e) => {
  const nM = Array.from(listProduct);
  for (let i = 0; i < nM.length; i++) {
    console.log(listProduct.has(nM[i][0]));
    if (listProduct.has(nM[i][0])) {
      listProduct.delete(nM[i][0]);
      localStorage.setItem("product", JSON.stringify([...listProduct]));
      renderCart();
    }
  }
};

function totalPrice() {
  if (listProduct.size > 0) {
    const totalPrice = document.querySelector(".total_price");
    const totalPrice1 = document.querySelector(".total_price1");
    const nM = Array.from(listProduct);
    const sum = nM.reduce((sumPrice, el) => {
      const [id, quantity] = el;
      const value = JSON.parse(id);
      return sumPrice + Number(value.priceProduct * quantity);
    }, 0);
    console.log(sum);
    totalPrice.innerText = Number(sum);
    totalPrice1.innerText = Number(sum);
  }
}
