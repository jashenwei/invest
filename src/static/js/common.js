
// document.addEventListener("DOMContentLoaded",(event) => {
//   let prices = document.querySelectorAll('.price-number')
//   prices.forEach(item => {
//     item.innerHTML = '<span>' + item.innerText.split('').reverse().join('') .match(/\d{0,3}/g).join(' ').split('').reverse().join('') + '</span>'
//   });

// document.querySelectorAll('.card-swiper-wrap').forEach(n => {
//   const slider = new Swiper(n.querySelector('.item-swiper'), {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     centeredSlides: true,
//     // slidesPerGroup: 1,
//     pagination: {
//         el: n.querySelector('.swiper-pagination'),
//         type: "progressbar",
//       },
//     loop: false,
//     navigation: {
//       nextEl: n.querySelector('.swiper-button-next'),
//       prevEl: n.querySelector('.swiper-button-prev'),
//     },
//     breakpoints: {
//    640: {
//       slidesPerView: "auto",
//      spaceBetween: 20,
//      centeredSlides: false,
//    },
//  }
//   });
// });

// let bestswiper = new Swiper(".best-swiper", {
//   slidesPerView: 'auto',
//   spaceBetween: 12,
//   slidesPerGroup: 1,
//   loop: false,
//   freeMode:false,
//   loopFillGroupWithBlank: true,
//   pagination: {
//      el: ".best-swiper-pagination",
//    },
//   breakpoints: {
//   1014: {
//     slidesPerView: 'auto',
//     spaceBetween: 12,
//     freeMode:true,
//   },
//   840: {
//     loopFillGroupWithBlank: true,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     freeMode:false,
//   },
// }
// })
// let itemCardImgs = new Swiper(".item-card-img-wrap", {
//   slidesPerView: 'auto',
//   spaceBetween: 12,
//   slidesPerGroup: 1,
//   loop: false,
//   loopFillGroupWithBlank: true,
//   pagination: {
//      el: ".item-card-swiper-pagination",
//    },
//   breakpoints: {
//   840: {
//     pagination: null,
//     slidesPerView: 'auto',
//     spaceBetween: 12,
//   },
// }
// })
// let mainBannerswiper = new Swiper(".main-banner-swiper", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//       },
//   // breakpoints: {
//   // 640: {
//   //   slidesPerView: 2,
//   //   spaceBetween: 20,
//   // },
//   // 768: {
//   //   slidesPerView: 4,
//   //   spaceBetween: 40,
//   // },
//   // 1024: {
//   //   slidesPerView: 5,
//   //   spaceBetween: 50,
//   // },
// // }
// })

// let catalogtypes = new Swiper(".type-swiper", {
//   slidesPerView: 'auto',
//   spaceBetween: 55,
//   slidesPerGroup: 1,
//   loop: false,
//   freeMode:false,
//   loopFillGroupWithBlank: true,
//   pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//   breakpoints: {
//   1014: {
//     slidesPerView: 'auto',
//     spaceBetween: 55,
//     freeMode:true,
//   },
// }
// })

// let firstmenus = document.querySelectorAll('.first-level-name')
// firstmenus.forEach((item, i) => {
//   item.addEventListener("click",()=>{
//         item.nextElementSibling.style.left = 0
//     })
// });
// let menuslided = document.querySelector('.menu-slided')
// let secondlevel = document.querySelectorAll('.second-level')
// let closemenu = document.querySelectorAll('.menu-close')
// let openmenu = document.querySelectorAll('.menu-link')
// let backtofirst = document.querySelectorAll('.back-to-first')
// backtofirst.forEach((item, i) => {
// item.addEventListener("click",()=>{
//   let parent = item.parentElement
//   let grandparent = parent.parentElement
//       grandparent.style.left = "100vw"
//   })
// });

// for (let open of openmenu) {
//   open.addEventListener("click",()=>{
//     menuslided.style.left = 0
//   })
// }
// for (let close of closemenu) {
//   close.addEventListener("click",()=>{
//     menuslided.style.left = "100vw"
//     secondlevel.forEach((item, i) => {
//       item.style.left = "100vw"
//     });
//   })

// }

// let accords = document.querySelectorAll('.accord')
// console.log(accords)
// accords.forEach(item => {
//   let outside = item.querySelector('.accord-inside')
//   let arrow = item.querySelector('.accord-arrow')
//   item.addEventListener('click',() => {
//     outside.classList.toggle('accord-inside-active')
//     arrow.classList.toggle('accord-arrow-active')
//   })
// })

// let filterBtn = document.querySelector('.filters-filter')
// let filterClose = document.querySelector('.filter-menu-close')
// let filterMenu = document.querySelector('.filter-menu')
// if(filterBtn)
// {
//   filterBtn.addEventListener('click',() => {
//     filterMenu.classList.toggle('filter-menu-open')
//   })
//   filterClose.addEventListener('click',() => {
//     filterMenu.classList.remove('filter-menu-open')
//   })
//   let styleBtn = document.querySelector('.filters-styles')
//   let styleClose = document.querySelector('.style-menu-close')
//   let styleMenu = document.querySelector('.style-menu')
//   styleBtn.addEventListener('click',() => {
//     styleMenu.classList.toggle('style-menu-open')
//   })
//   styleClose.addEventListener('click',() => {
//     styleMenu.classList.remove('style-menu-open')
//   })

// }

//   let radio = document.querySelectorAll('input[name=deliverysposob]')
//   let delivery = document.querySelector('.cart-user-infos-radios-delivery')
//   let samovyvoz = document.querySelector('.cart-user-infos-radios-samovyvoz')
//   console.log('asdasdda')
//   radio.forEach(item => {
//     item.addEventListener('change',() => {
//       switch(item.value)
//       {
//               case 'delivery':
//                     delivery.style.display = 'flex'
//                     samovyvoz.style.display = 'none'
//                     break;
//               case 'samovyvoz':
//                     samovyvoz.style.display = 'flex'
//                     delivery.style.display = 'none'
//                     break;
//           }
//     })
//   });

// })
