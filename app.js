function toggleMenu() {
  var headerCenter = document.getElementById("header-center");
  headerCenter.classList.toggle("menu-open");
}
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
// faq


// swiper faq

    var swiper = swiper(".review-slider", {
  spaceBetween:20,
  slidesPerView: 2,
  centeredSlides:true,
  autoplay:{
      delay:3000,
      disableOnInteraction:false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
   breakpoints: {
      0: {
          slidesPerView:1,
      },
      640:{
          slidesPerView:2,
      },
      768:{
          slidesPerView:2,
      },
      1024:{
          slidesPerView:3,
      },
   },
});
  
