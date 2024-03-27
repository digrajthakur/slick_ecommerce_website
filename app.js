// header start
let heade = document.querySelector(".head-4");
let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  heade.classList.toggle("active");
  toggle.classList.toggle("fa-remove");
});

// product
const products = {
  man: [
    { name: "Adidas", image: "shoes 1.png", price: "$50" },
    {
      name: "Crocs",
      image:
        "https://contents.mediadecathlon.com/p2449853/a9d41b7755c66504ea51802fb198e643/p2449853.jpg?format=auto&quality=70&f=650x0",
      price: "$60",
    },
    {
      name: "Reebok",
      image:
        "https://img.eobuwie.cloud/eob_product_656w_656h(d/1/6/b/d16b56ec58dd8ac4582b1ccf66b0193b28b1004a_0000199955259_3__gh,jpg)/chaussures-nike-court-borough-mid-838938-111-white-white-white.jpg",
      price: "$70",
    },
    {
      name: "Oxford",
      image:
        "https://images-cdn.ubuy.co.in/1BO0SWFC-yuyuor-black-formal-shoes-men-loafers.jpg",
      price: "$70",
    },
  ],
  woman: [
    {
      name: "Comfy Feet",
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16530962/2021/12/24/9f9b34b2-cba5-415a-9718-c224263649f11640350292538-Puma-Unisex-Casual-Shoes-1941640350292216-1.jpg",
      price: "$40",
    },
    {
      name: "Nike",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/shoe/c/m/7/370550-5-puma-black-pink-alert-original-imafgfvvyjzh9uzx.jpeg?q=20&crop=false",
      price: "$55",
    },
    {
      name: "Reebok",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/10/UY/WF/BN/115418278/gl2-500x500.jpg",
      price: "$65",
    },
  ],
  boy: [
    {
      name: "Sneakers",
      image: "https://m.media-amazon.com/images/I/61VVeRf0z8L._SY625_.jpg",
      price: "$30",
    },
    {
      name: "Crocs",
      image:
        "https://contents.mediadecathlon.com/p2449853/a9d41b7755c66504ea51802fb198e643/p2449853.jpg?format=auto&quality=70&f=650x0",
      price: "$60",
    },
    {
      name: "Chic feet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcO-N4Usjq1_6zkfGGag79fEBGvMSBODk6uUPcDgBQqGD3qR3K9eUfNG1Sg-C2clkatg&usqp=CAU",
      price: "$45",
    },
    {
      name: "Soleful Step",
      image:
        "https://rukminim1.flixcart.com/image/800/800/k0r15e80/kids-shoe/w/g/j/1-kids-shoes-tryviz-original-imafkggdbvhf2zvv.jpeg?q=90",
      price: "$55",
    },
    {
      name: "Reebok",
      image:
        "https://img.eobuwie.cloud/eob_product_656w_656h(d/1/6/b/d16b56ec58dd8ac4582b1ccf66b0193b28b1004a_0000199955259_3__gh,jpg)/chaussures-nike-court-borough-mid-838938-111-white-white-white.jpg",
      price: "$70",
    },
  ],
  child: [
    {
      name: "Crocs",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/5/n/q/7-art-ca447-vellinto-pink-original-imagseqdfkrkcbav.jpeg?q=90&crop=false",
      price: "$20",
    },
    {
      name: "Saddle shoes",
      image:
        "https://specials-images.forbesimg.com/imageserve/64ee030e2225f394ebd8ae23/Ten-Little-Everyday-Original-Sneakers-in-red/960x0.jpg?cropX1=0&cropX2=798&cropY1=0&cropY2=632",
      price: "$35",
    },
    {
      name: "booties",
      image:
        "https://5.imimg.com/data5/KL/XF/AU/SELLER-3485907/kids-baby-shoes-250x250.jpg",
      price: "$45",
    },
  ],
};

// Order Placed Successfully & Cancelled successfully

let order = document.getElementById("btn");
let order1 = document.getElementById("btn-1");
let order2 = document.getElementById("btn-2");
let order3 = document.getElementById("btn-3");
let order4 = document.getElementById("btn-4");
let order5 = document.getElementById("btn-5");
let order6 = document.getElementById("btn-6");
let order7 = document.getElementById("btn-7");
let order8 = document.getElementById("btn-8");
let order9 = document.getElementById("btn-9");

// order
let flag = 0;
order.addEventListener("click", function () {
  if (flag == 0) {
    (order.innerHTML = "Cancel Order"), alert("Your order placed successfully");
    flag = 1;
  } else {
    (order.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag = 0;
  }
});
// order1

let flag1 = 0;
order1.addEventListener("click", function () {
  if (flag1 == 0) {
    (order1.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag1 = 1;
  } else {
    (order1.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag1 = 0;
  }
});
// order2

let flag2 = 0;
order2.addEventListener("click", function () {
  if (flag2 == 0) {
    (order2.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag2 = 1;
  } else {
    (order2.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag2 = 0;
  }
});
// order3

let flag3 = 0;
order3.addEventListener("click", function () {
  if (flag3 == 0) {
    (order3.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag3 = 1;
  } else {
    (order3.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag3 = 0;
  }
});
// order4

let flag4 = 0;
order4.addEventListener("click", function () {
  if (flag4 == 0) {
    (order4.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag4 = 1;
  } else {
    (order4.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag4 = 0;
  }
});
// order5

let flag5 = 0;
order5.addEventListener("click", function () {
  if (flag5 == 0) {
    (order5.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag5 = 1;
  } else {
    (order5.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag5 = 0;
  }
});
// order6

let flag6 = 0;
order6.addEventListener("click", function () {
  if (flag6 == 0) {
    (order6.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag6 = 1;
  } else {
    (order6.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag6 = 0;
  }
});
// order7

let flag7 = 0;
order7.addEventListener("click", function () {
  if (flag7 == 0) {
    (order7.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag7 = 1;
  } else {
    (order7.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag7 = 0;
  }
});
// order8

let flag8 = 0;
order8.addEventListener("click", function () {
  if (flag8 == 0) {
    (order8.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag8 = 1;
  } else {
    (order8.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag8 = 0;
  }
});
// order9

let flag9 = 0;
order9.addEventListener("click", function () {
  if (flag9 == 0) {
    (order9.innerHTML = "Cancel Order"),
      alert("Your order placed successfully");
    flag9 = 1;
  } else {
    (order9.innerHTML = "Buy Now"), alert("Your order cancelled successfully");
    flag9 = 0;
  }
});

// product section
function showProducts(category) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  products[category].forEach((product) => {
    const productBox = document.createElement("div");
    productBox.className = "product-boxs";
    productBox.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    productContainer.appendChild(productBox);
  });
}
