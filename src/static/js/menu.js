const radioButtons = document.querySelectorAll('.radio-button input[type="radio"]');

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
