//orbit
const block = document.querySelectorAll('.main-block__block3 label')
const main = block[2]

block.forEach(function (e, index) {


  e.addEventListener('click', () => {

    //console.log(l.length)
    if (e !== main) {
      e.animate({
        "paddingTop": "5px"
      }, 400)
      e.animate({
        "opacity": "0.5"
      }, 550)
      main.animate({
        "paddingTop": "5px"
      }, 400)

      main.animate({
        "opacity": "0.5"
      }, 550)
    }
  });
})
const rs = document.querySelectorAll('.block_block input[type="radio"]');
// const b1 = document.querySelector('#b1');
// const b2 = document.querySelector('#b2');
// const b3 = document.querySelector('#b3');
// const b4 = document.querySelector('#b4');
// const b5 = document.querySelector('#b5');
const labels = document.querySelectorAll('label input[type="radio"]');

labels.forEach((label) => {
  label.parentElement.addEventListener('click', (event) => {
    if (event.target !== label) {

      const b3Text = document.querySelector('#b3 .radio-button__label').textContent;
      const labelText = event.currentTarget.querySelector('.radio-button__label').textContent;
      document.querySelector('#b3 .radio-button__label').textContent = labelText;
      event.currentTarget.querySelector('.radio-button__label').textContent = b3Text;

    }
  });
});
//slider
// Получаем видимую часть слайда
let viewport = document.getElementById("viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;

// Назначаем цвет индикатор слайда зелёный
viewSliders[0].style.backgroundColor = "#FF1A1A";

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
  // Делаем индикатор слайда красный
  viewSliders[viewSlide].style.backgroundColor = "#858585";
  // Условие, если номер слайда меньше четырёх
  if (viewSlide < 4) { // Если верно то
    // Увеличиваем номер слайда на один
    viewSlide++;
  } else { // Иначе
    // Номер слайда равен нулю
    viewSlide = 0;
  }
  // Закрашиваем индикатор слайда в зелёный
  viewSliders[viewSlide].style.backgroundColor = "#FF1A1A";
  // Меняем позицию всего слайда
  slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
  // Делаем индикатор слайда красный
  viewSliders[viewSlide].style.backgroundColor = "#858585";
  // Условие, если номер слайда больше нуля
  if (viewSlide > 0) { // Если верно то
    // Уменьшаем номер слайда
    viewSlide--;
  } else { // Иначе
    // Номер слайда равен четырём
    viewSlide = 4;
  }
  // Закрашиваем индикатор слайда в зелёный
  viewSliders[viewSlide].style.backgroundColor = "#FF1A1A";
  // Меняем позицию всего слайда
  slider.style.left = -viewSlide * viewport + "px";
});




//const { event } = require("jquery");
//dropdown
const dButtons = document.querySelectorAll('.dropdown-trigger button');

// Loop through dropdown buttons and add event listeners
dButtons.forEach(button => {
  button.addEventListener('click', () => {

    // Get dropdown menu and toggle 'is-active' class
    const dropdownMenu = button.parentElement.nextElementSibling;
    dropdownMenu.classList.toggle('is-active');
    // Toggle 'is-active' class and rotate arrow icon
    button.parentElement.classList.toggle('is-active');
    const arrowIcon = button.querySelector('svg');
    arrowIcon.classList.toggle('rotate-180');
  });
});


// Get all dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Loop through dropdown items and add event listeners
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get selected option and set button text
    const selectedOption = item.textContent;
    const dropdownButton = item.closest('.dropdown').querySelector('.user');
    dropdownButton.textContent = selectedOption;
    // Hide dropdown menu
    const dropdownMenu = item.closest('.dropdown-menu');
    dropdownMenu.classList.remove('is-active');
    const arrowIcon = document.querySelector('.dropdown-trigger svg');

    arrowIcon.classList.remove('rotate-180');

  });
});

// Add event listener to close dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector('.dropdown-menu').classList.remove('is-active');
      dropdown.querySelector('.dropdown-trigger').classList.remove('is-active');
      const arrowIcon = dropdown.querySelector('.dropdown-trigger svg');
      if (arrowIcon.parentElement.classList.contains('is-active')) {
        arrowIcon.classList.add('rotate-180');
      } else {
        arrowIcon.classList.remove('rotate-180');
      }
    }
  });
});
const radioButtons = document.querySelectorAll('.radio-button input[type="radio"]');


// $(".block_block").click(function () { // задаем функцию при нажатиии на элемент с классом start
//   $("span").animate({
//    transform: "translateY(40px)",
//     transform: "rotate(90deg)"
//   }, 1000);
// });



radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    radioButtons.forEach(rb => {
      const label = rb.closest('.radio-button').querySelector('.radio-button__label');
      const custom = rb.closest('.radio-button').querySelector('.radio-button__custom');

      if (rb.checked) {
        label.style.fontSize = '18px';
        custom.style.borderColor = '#f00';
        custom.style.background = '#f00';
      } else {
        label.style.fontSize = '16px';
        custom.style.borderColor = '#444';
        custom.style.backgroundColor = 'transparent';
      }
    });
  });
});




// const d = document.querySelectorAll('.main-block2 .block2-cont1')

// d.forEach(a => {
//   a.addEventListener('click', (e) => {
//     if (e.target === a) {
//       a.classList.add('.active');
//     }
//   })
// })

const windowPathname = window.location.pathname;
if (window.location.pathname === '/') {
  // Если текущий путь соответствует '/old-page.html', перенаправляем пользователя на '/new-page.html'
  window.location.replace('/index.html');
}
//появление блока-инпута
const searchButton = document.querySelector('.buttonForHeader.search');
const searchBlock = document.querySelector('.block_search');
const links = document.querySelector('.header-container-block__links ')
const l = document.querySelector('.langsButton')
const s = document.querySelector('.search')
const glasses = document.querySelector('.glasses')
const exitS = document.querySelector('.exitFromSearch')
const action = document.querySelector('.header-container-block__action')
searchButton.addEventListener('click', () => {
  searchBlock.classList.toggle('active');
  glasses.classList.toggle('active');
  buts.forEach(but => {
    but.classList.toggle('active');
  })
  exitS.classList.toggle('active')
  s.classList.toggle('active');
  links.classList.toggle('active');
  action.style.justifyContent = 'flex-end';
});
exitS.addEventListener('click', () => {
  action.style.justifyContent = 'flex-start';
  searchBlock.classList.toggle('active');
  glasses.classList.toggle('active');
  buts.forEach(but => {
    but.classList.toggle('active');
  })
  exitS.classList.toggle('active')
  s.classList.toggle('active');
  links.classList.toggle('active');
});
//модальное окно для меню
const openModalButton = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelectorAll('.close-modal');
const modal = document.querySelectorAll('.container-modalMenu');

openModalButton.forEach(but => {
  but.addEventListener('click', () => {
    modal.forEach(m => {
      m.style.display = 'flex';
      closeModalButton.forEach(c => {
        c.addEventListener('click', () => {
          m.style.display = 'none';
        });
      })
    })
  });
})

const buts = document.querySelectorAll('.langsButton');
const langs = document.querySelectorAll('.langs');
buts.forEach(but => {
  //const langs = but.nextElementSibling;
  but.addEventListener('click', () => {
    langs.forEach(lang => {
      lang.classList.toggle('active')
      document.addEventListener('click', function (e) {
        if (!but.contains(e.target) && !lang.contains(e.target)) {
          lang.classList.remove('active');
        }
      });
    })
  })

})


var scrollDiv = document.createElement("div");
scrollDiv.style.width = "100px";
scrollDiv.style.height = "100px";
scrollDiv.style.overflow = "scroll";
scrollDiv.style.position = "absolute";
scrollDiv.style.top = "-9999px";
document.body.appendChild(scrollDiv);

// Получаем ширину скролла
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

// Удаляем элемент-контейнер
document.body.removeChild(scrollDiv);


const hM = document.querySelector('.modal-content')
hM.style.paddingLeft = scrollbarWidth + "px";


