const formInputRequire = document.querySelectorAll(".form-input.require");
const formInputMin = document.querySelectorAll('.form-input[class*="min"]');
const formEmail = document.querySelectorAll('.form-input[class*="email"]');
const formPass = document.querySelector('.form-input[class*="pass"]');
const repass = document.querySelector('.form-input[class*="repass"]');
const arr = JSON.parse(localStorage.getItem("arr")) || [];

document.querySelector(".form").onsubmit = (e) => {
  e.preventDefault();
  formInputRequire.forEach((element) => {
    require(element.parentElement, "*Vui lòng nhập trường này!");
  });

  formEmail.forEach((element) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    checkRegex(
      element.parentElement,
      "*Vui lòng nhập đúng định dạng email",
      regex
    );
  });

  formInputMin.forEach((element) => {
    const min = Array.from(element.classList)
      .find((item) => item.includes("min"))
      .split(":")[1];
    minLength(
      element.parentElement,
      `*Vui lòng nhập nhiều hơn ${min} ký tự`,
      Number(min)
    );  
  });

  checkDuplicatePass(formPass.parentElement, "*Mật khẩu không khớp", repass);

  const form = document.querySelectorAll(".form-input");
  const checkArr = Array.from(form).some((element) => {
    return Number(element.parentElement.getAttribute("invalid"));
  });
  console.log(checkArr);
  if (!checkArr) {
    const v = {};
    form.forEach((element) => {
      v[element.getAttribute("name")] = element.value;
      console.log(element.getAttribute("name"));
      element.value = "";
    });
    // console.log(v);
    arr.push(v);
    localStorage.setItem("arr", JSON.stringify('arr'))
    console.log(arr);
    alert("Đăng ký thành công!!");
  }
};

const require = (el, msg) => {
  const value = el.querySelector(".form-input").value;
  if (value === "") {
    el.setAttribute("invalid", 1);
    el.querySelector(".msg-error").innerText = msg;
  } else {
    el.setAttribute("invalid", 0);
    el.querySelector(".msg-error").innerText = "";
  }
};

const minLength = (el, msg, min) => {
  const value = el.querySelector(".form-input").value;
  const invalid = Number(el.getAttribute("invalid"));
  if (!invalid) {
    if (value.length >= min) {
      el.setAttribute("invalid", 0);
      el.querySelector(".msg-error").innerText = "";
    } else {
      el.setAttribute("invalid", 1);
      el.querySelector(".msg-error").innerText = msg;
    }
  }
};

const checkRegex = (el, msg, regex) => {
  const value = el.querySelector(".form-input").value;
  const invalid = Number(el.getAttribute("invalid"));

  if (!invalid) {
    if (value.match(regex)) {
      el.setAttribute("invalid", 0);
      el.querySelector(".msg-error").innerText = "";
    } else {
      el.setAttribute("invalid", 1);
      el.querySelector(".msg-error").innerText = msg;
    }
  }
};

const checkDuplicatePass = (el, msg, repass) => {
  const value = el.querySelector(".form-input").value;
  const invalid = Number(el.getAttribute("invalid"));
  if (!invalid) {
    if (value === repass.value) {
      el.setAttribute("invalid", 0);
      el.querySelector(".msg-error").innerText = "";
      repass.parentElement.querySelector(".msg-error").innerText = "";
    } else {
      el.setAttribute("invalid", 1);
      el.querySelector(".msg-error").innerText = msg;
      repass.parentElement.querySelector(".msg-error").innerText = msg;
    }
  }
};
