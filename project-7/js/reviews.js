// // reviews
// const reviewsContainer = document.querySelector('#reviews__container');

// getProducts();

// async function getProducts() {
//     const response = await fetch('./js/reviews.json');
//     console.log(response);


//     const productsArray = await response.json();
//     console.log(productsArray);

//     renderProducts(productsArray);
// }



// function renderProducts(productsArray) {
//     productsArray.forEach(function (item) {
//         const productHtml = ` <div class="rev" id="${item.id}" data-aos="fade-up"
//         data-aos-duration="1500">
//                                 <div class="img__name">
//                                     <img src="images/dest/${item.img}" alt="alt">
//                                     <h2>${item.name}</h2>
//                                 </div>  
//                                 <p class="coment">${item.coment}</p>
//                             </div>`;
//         reviewsContainer.insertAdjacentHTML('beforeend', productHtml);
//     });
// }
// // reviews