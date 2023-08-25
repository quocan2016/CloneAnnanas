const fechingData = async () => {
  const json = await fetch("../data/data-product.json");
  const listProductt = await json.json();

  const url_string = window.location.href;
  const url = new URL(url_string);
  const id = url.searchParams.get("id");
  const productItem = listProductt.filter((item) => item.id == id)[0];
  const productDetail = document.querySelector(".product-detail");
  console.log(JSON.parse(sessionStorage.getItem("product_item")));

  const html = `
  <div class="container col-lg-10">
  <div class="row mb-2">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="border-bottom: 3px solid #000">
          <li class="breadcrumb-item">
            <a class="text-decoration-none text-dark" href="#">Giày</a>
          </li>
          <li class="breadcrumb-item">
            <a class="text-decoration-none text-dark" href="#">Track 6</a>
          </li>
          <li
            class="breadcrumb-item active fw-semibold fw-bold"
            aria-current="page"
          >
            Track 6 Jazico - Low Top
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="row">
    <div class="col-md-7">
      <div class="mg-product">
        <div class="img-main">
          <img
            src="/img/product/${productItem.img[0]}"
            alt=""
            style="width: 100%"
            class="img_product"
          />
        </div>
        <div class="img_icon overflow-x-hidden">
          <span class="prev-product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="#000"
              class="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              ></path>
            </svg>
            ></span
          >
          <div
            class="d-flex align-center img_icon_container flex-nowrap w-100"
          ></div>
          <span class="next-product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="#000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </span>
        </div>
      </div>
  </div>
  <div class="col-5">
    <div class="ms-4 post_product">
      <h2 class="name_product">
      ${productItem.name_product}
      </h2>
      <div class="d-flex justify-content-between my-4">
        <span> Mã sản phẩm: <span class="id_product">${
          productItem.id
        }</span> </span>
        <span> Tình trạng: New Arrival </span>
      </div>
      <h4 class="price_product">${productItem.price}</h4>
      <div>
        <hr class="hr_product" />
        <div class="d-flex gap-2 py-3">
          <span class="box-color"> </span>
          <span class="box-color"> </span>
          <span class="box-color"> </span>
        </div>
        <hr class="hr_product" />
      </div>
      <div class="row">
        <div class="col-6">
          <h5>SIZE</h5>
          <select
            class="form-select border-3 size_product"
            aria-label="Default select example"
          >
          <option selected></option>
          ${productItem.product_detail
            .map((item) => `<option value="${item.size}">${item.size}</option>`)
            .join("")}
          </select>
        </div>
        <div class="col-6">
          <h5>SỐ LƯỢNG</h5>
          <select
            class="form-select border-3 quantity_product"
            aria-label="Default select example"
          >
          </select>
        </div>
      </div>
      <div class="row mt-3 gy-3">
        <div class="col-12 d-flex gap-1">
          <button
            type="button"
            class="btn btn-dark w-75 p-4 btnAddProduct"
            style="
              font-size: 18px;
              font-weight: bold;
              text-transform: uppercase;
            "
          >
            Thêm vào giỏ hàng
          </button>
          <button
            type="button"
            class="btn btn-dark w-25 p-4"
            style="
              font-size: 18px;
              font-weight: bold;
              text-transform: uppercase;
            "
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#f15e2c"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div class="col-12">
            <a href="/view/cart.html">
            <button
            type="button"
            class="btn btn-dark w-100 p-4 border-0"
            style="
              background-color: #f15e2c;
              font-size: 18px;
              font-weight: bold;
              text-transform: uppercase;
            "
          >
            Thanh toán
          </button></a>
        </div>
        <div class="col-12">
          <div class="infor-product">
            <div
              class="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Thông tin sản phẩm
                  </button>
                </h2>
                <hr class="hr_product" />
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <span class="accordion-text">Gender: Unisex</span>
                    <span class="accordion-text"
                      >Size run: 35 – 46</span
                    >
                    <span class="accordion-text"
                      >Upper: Canvas/Leather</span
                    >
                    <span class="accordion-text">Outsole: Rubber</span>
                    <img
                      src="/img/productDetail/Size-chart-1-e1559209680920.jpg"
                      alt=""
                      style="width: 100%"
                    />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Quy định đổi sản phẩm
                  </button>
                </h2>
                <hr class="hr_product" />
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc
                        kĩ trước khi quyết định.
                      </li>
                      <li>
                        Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa
                        hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm
                        khi mua online là 14 ngày, kể từ ngày nhận hàng.
                      </li>
                      <li>
                        Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn
                        nguyên tem, hộp, nhãn mác.
                      </li>
                      <li>
                        Sản phẩm đổi không có dấu hiệu đã qua sử dụng,
                        không giặt tẩy, bám bẩn, biến dạng.
                      </li>
                      <li>
                        <span class="accordion-text">
                          Ananas chỉ ưu tiên hỗ trợ đổi size. Trong
                          trường hợp sản phẩm hết size cần đổi, bạn có
                          thể đổi sang 01 sản phẩm khác:
                        </span>
                        <span
                          >- Nếu sản phẩm muốn đổi ngang giá trị hoặc có
                          giá trị cao hơn, bạn sẽ cần bù khoảng chênh
                          lệch tại thời điểm đổi (nếu có).</span
                        >
                        <span class="accordion-text">
                          - Nếu bạn mong muốn đổi sản phẩm có giá trị
                          thấp hơn, chúng tôi sẽ không hoàn lại tiền.
                        </span>
                      </li>
                      <li>
                        Trong trường hợp sản phẩm - size bạn muốn đổi
                        không còn hàng trong hệ thống. Vui lòng chọn sản
                        phẩm khác.
                      </li>
                      <li>
                        Không hoàn trả bằng tiền mặt dù bất cứ trong
                        trường hợp nào. Mong bạn thông cảm.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Bảo hành thế nào ?
                  </button>
                </h2>
                <hr class="hr_product" />
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul class="p-0">
                      <li class="mb-2" style="list-style: none">
                        <span class="accordion-text">
                          Mỗi đôi giày Ananas trước khi xuất xưởng đều
                          trải qua nhiều khâu kiểm tra. Tuy vậy, trong
                          quá trình sử dụng, nếu nhận thấy các lỗi: gãy
                          đế, hở đế, đứt chỉ may,...trong thời gian 6
                          tháng từ ngày mua hàng, mong bạn sớm gửi sản
                          phẩm về Ananas nhằm giúp chúng tôi có cơ hội
                          phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về
                          bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung
                          tâm bảo hành Ananas ngay trong trung tâm
                          TP.HCM trong giờ hành chính:
                        </span>
                      </li>
                      <li style="list-style: none">
                        <span class="accordion-text">
                          Địa chỉ: 170-172, Đinh Bộ Lĩnh, P.26 , Q.Bình
                          Thạnh, TP.HCM Hotline: 028 2211 0067
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  `;

  productDetail.innerHTML = html;

  const formSelect = document.querySelector(".form-select");

  formSelect.onchange = (e) => {
    const quantity_product = productItem?.product_detail.filter(
      (item) => item.size == e.target.value
    )[0].quantity;
    const html = listQuantity(quantity_product)
      .map((quantity) => `<option value=${quantity}>${quantity}</option>`)
      .join("");
    document.querySelector(".quantity_product").innerHTML = html;
  };

  const listQuantity = (value) => {
    if (value == 1) return [1];
    if (value < 10) return [1].push(value);
    const arr = [1, 10];
    for (let i = 50; i <= value; i += 50) {
      arr.push(i);
    }
    return arr;
  };

  const slideArr = [
    "Hello Ananas",
    "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE",
    "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH",
  ];
  const imgIconItemArr = [
    "/img/productDetail/Pro_AV00173_1.jpeg",
    "/img/productDetail/Pro_AV00173_2.jpeg",
    "/img/productDetail/Pro_AV00173_3.jpeg",
    "/img/productDetail/Pro_AV00173_4.jpeg",
    "/img/productDetail/Pro_AV00173_5.jpeg",
    "/img/productDetail/Pro_AV00173_6.jpeg",
    "/img/productDetail/Pro_AV00173_7.jpeg",
    "/img/productDetail/Pro_AV00173_8.jpeg",
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

  const imgIcon = document.querySelector(".img_icon");

  const loadValueImg = imgIconItemArr.reduce((total, value) => {
    return (total += `
          <div><img class="img-item" src="${value}" alt="" style="width: 100%;"/></div>
      `);
  }, "");

  const loadImg = function () {
    return loadValueImg;
  };

  // imgIcon.querySelector(".img_icon_container").innerHTML = loadImg();

  // imgIcon.querySelector(".next-product").onclick = (e) => {
  //   const w = getParentElement(e.target, "img_icon").querySelector(
  //     ".img_icon_container img"
  //   ).width;
  //   getParentElement(e.target, "img_icon").querySelector(
  //     ".img_icon_container"
  //   ).style = `transform: translateX(-${w * 2}px);`;
  // };

  function getParentElement(element, selectorParent) {
    // console.log(element);
    return element.parentElement.classList.contains(selectorParent)
      ? element.parentElement
      : getParentElement(element.parentElement, selectorParent);
  }

  const cartHover = document.querySelector(".cart-icon");

  cartHover.onclick = (e) => {
    const elementCartProduct = cartHover.querySelector(".cart-product");
    if (!elementCartProduct.contains(e.target)) {
      if (elementCartProduct.classList.contains("d-none")) {
        elementCartProduct.classList.remove("d-none");
        elementCartProduct.classList.add("d-block");
      } else {
        elementCartProduct.classList.remove("d-block");
        elementCartProduct.classList.add("d-none");
      }
    }
  };

  window.onclick = (e) => {
    const elementCartProduct = cartHover.querySelector(".cart-product");
    if (!cartHover.contains(e.target)) {
      elementCartProduct.classList.remove("d-block");
      elementCartProduct.classList.add("d-none");
    }
  };

  const cart = document.querySelector(".cart-icon");
  // const products = JSON.parse(localStorage.getItem("listProduct")) || [];

  const btnAdd = document.querySelector(".btnAddProduct");
  const imgProduct = document.querySelector(".img_product");
  const _listProduct = JSON.parse(localStorage.getItem("product")) || [];
  const listProduct = _listProduct.length > 0 ? new Map(_listProduct) : new Map();
  btnAdd.onclick = (e) => {
    e.stopPropagation();

    const postProduct = getParentElement(e.target, "post_product");
    addProduct({
      id: `${postProduct.querySelector(".id_product").innerText}`,
      nameProduct: postProduct.querySelector(".name_product").innerText,
      imgProduct: imgProduct.src,
      sizeProduct: postProduct.querySelector(".size_product").value,
      priceProduct: postProduct.querySelector(".price_product").innerText,

    });

    console.log(listProduct);
    //   for (const item of newMap.entries()) {
      //     let prod = item[1];
      //     if (item[0] === id) {
        //       const quantity = `${
          //         const quantity = `${
            //         parseInt(prod.quantityProduct) +
            //         parseInt(postProduct.querySelector(".quantity_product").value)
            //       }`;
            //       }`;
            //       prod.quantityProduct = quantity;
    //       newMap.set(id, prod);
    //     }
    //   }
    // } else {
    //   const product = {
    //     nameProduct: postProduct.querySelector(".name_product").innerText,
    //     imgProduct: imgProduct.src,
    //     sizeProduct: postProduct.querySelector(".size_product").value,
    //     priceProduct: postProduct.querySelector(".price_product").innerText,
    //     quantityProduct: postProduct.querySelector(".quantity_product").value,
    //   };
    //   newMap.set(id, product);
    // }

    // const indexProduct = listProduct.findIndex((item) => {
    //   return (
    //     item.nameProduct ===
    //       postProduct.querySelector(".name_product").innerText &&
    //     item.sizeProduct === postProduct.querySelector(".size_product").value
    //   );
    // });
    // if (indexProduct != -1) {
    //   listProduct[indexProduct].quantityProduct++;
    // } else {
    //   const product = {
    //     nameProduct: postProduct.querySelector(".name_product").innerText,
    //     imgProduct: imgProduct.src,
    //     priceProduct: postProduct.querySelector(".price_product").innerText,
    //     sizeProduct: postProduct.querySelector(".size_product").value,
    //     quantityProduct: postProduct.querySelector(".quantity_product").value,
    //   };
    //   listProduct.push(product);
    // }
    // localStorage.setItem("listProduct", JSON.stringify(listProduct));
    renderCart();
  };
  function addProduct(product) {
    if (listProduct.has(JSON.stringify(product))) {
      listProduct.set(
        JSON.stringify(product), // key chuoi
        listProduct.get(JSON.stringify(product)) + // value cu
          parseInt(document.querySelector(".quantity_product").value) // value moi
      );
    } else {
      listProduct.set(JSON.stringify(product), 1);
    }
    localStorage.setItem("product", JSON.stringify([...listProduct]));
    
    console.log(listProduct.keys());
  }
  function renderCart() {
    displayCart();
    const rCart = document.querySelector(".card-product-img");
    if (rCart) {
      const nM = Array.from(listProduct);
      rCart.innerHTML = nM.reduce((t, el) => {
        console.log(el);
        const [id, quantity] = el;
        if (listProduct.has(id)) {
          const value = JSON.parse(id);
          return (
            t +
            `
              <div class="row g-2 mt-1">
                <div class="col-md-4">
                  <img
                    src="${value.imgProduct}"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body p-0">
                    <h6 class="card-title fw-bold" style="font-size: 14px">${value.nameProduct}</h6>
                    <span class="d-block fw-bold" style="font-size: 14px">${value.priceProduct}</span>
                        <div
                          class="d-flex justify-content-between"
                          style="font-size: 12px"
                        >
                          <span>Size:</span>
                          <span>${value.sizeProduct}</span>
                        </div>
                        <div
                          class="d-flex justify-content-between"
                          style="font-size: 12px"
                        >
                          <span>Số lượng:</span>
                          <span>${quantity}</span>
                  </div>
                </div>
              </div>
              <hr class="hr_product" />
            `
          );
        }
      }, "");
    }
    totalPrice();
    const countCart = cart.querySelector(".count_cart");
    const nM = Array.from(listProduct);
    countCart.innerText = nM.reduce((sumProduct, el) => {
      const [id, quantity] = el;
      let value = JSON.parse(id);
      return sumProduct + Number(quantity);
    }, 0);
  }

  function displayCart() {
    if (listProduct.size > 0) {
      cart.innerHTML = `
            <span
            class="count_cart"
            style="
              display: block;
              text-align: center;
              color: white;
              font-weight: bold;
            "
            >2</span>
            <img src="/img/icon_gio_hang.svg" alt="" class="cart-icon-hover" />
            <div class="cart-product d-none">
              <div style="padding: 15px">
                <h5 class="fw-bold text-uppercase" style="font-size: 24px">
                  Giỏ hàng
                </h5>
                <hr/ class="my-1">
                <div
                  class="card card-product-img"
                  style="background-color: #f0f0ec"
                ></div>
                <div class="d-flex justify-content-between">
                  <span class="fw-bold text-uppercase" style="color: #000"
                    >Tổng cộng:
                  </span>
                  <span class="fw-bold text-uppercase total_price" style="color: #808080"
                    >0</span
                  >
                </div>
                <div class="col-12">
                  <button
                    class="btn btn-dark w-100 my-3"
                    style="
                      font-weight: bold;
                      font-size: 16px;
                      text-transform: uppercase;
                    "
                  >
                    Thêm Vào yêu thích
                  </button>
                </div>
                <div class="col-12">
                    <a href="/view/cart.html">
                    <button
                    class="btn btn-dark w-100 border-0"
                    style="
                      font-weight: bold;
                      font-size: 16px;
                      text-transform: uppercase;
                      background-color: #f15e2c !important;
                    "
                  >
                    Thanh Toan
                  </button></a>
                </div>
              </div>
            </div>`;
    } else {
      cart.innerHTML = `
          <span
            class="count_cart"
            style="
                display: block;
                text-align: center;
                color: white; 
                font-weight: bold;
          "
          >
              0
          </span>
          <img src="/img/icon_gio_hang.svg" alt="" class="cart-icon-hover" />
          <div class="cart-product d-none" style="height: 400px;">
            <div style="padding: 15px">
              <h5 class="fw-bold text-uppercase" style="font-size: 24px">
                Giỏ hàng
              </h5>
              <hr class="hr_product">
              <h6>
                Không có sản phẩm nào trong giỏ hàng
              </h6>
            </div>
          </div>`;
    }
  }
  renderCart();

  function totalPrice() {
    if (listProduct.size > 0) {
      const totalPrice = document.querySelector(".total_price");
      const nM = Array.from(listProduct);
      const sum = nM.reduce((sumPrice, el) => {
        const [id, quantity] = el;
        const value = JSON.parse(id);
        return sumPrice + Number(value.priceProduct * quantity);
      }, 0);
      console.log(sum);
      totalPrice.innerText = Number(sum);
    }
  }
};

fechingData();
