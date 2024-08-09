
let selector = document.querySelector('#phone');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

const validate = new window.JustValidate('#form');
validate.addField('#name', [
    {
        rule: "required",
        errorMessage: "*Введите имя"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "*минимум 2 символа"
    },
]).addField('#phone', [
    {
        validator: (value)=> {
            const phones = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phones) && phones.length > 0)
        },
        errorMessage: '*Введите телефон'
    },
    {
        validator: (value)=> {
            const phones = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phones) && phones.length === 10)
        },
        errorMessage: '*Введите телефон полностью'
    },
]).addField('#email', [
    {
      rule:"required",
      errorMessage: "Введите Email",
    },
]).onSuccess(async function() {
    let data = {
      name: document.getElementById('name').value,
      tel: document.getElementById('phone').value,
      email: document.getElementById('email').value,
    }
    let responsive = await fetch("mail.php", {
        method: "POST",
        body:JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let result = await responsive.text();
    alert(result)
});
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type: 'loop',
      perPage: 2,
      focus: 'center',
      gap: '50px',
      pagination: false,
      breakpoints: {
		1800: {
			perPage: 1,
		},
        952: {
            arrows: false,
            pagination: true,
        }
  }
    } );
    splide.mount();
  } 
);
const myElement = document.getElementById('scrollTop');
function checkScroll() {
  if (window.scrollY >= 900) {
      myElement.style.display = 'block'; // Показать элемент
  } else {
      myElement.style.display = 'none'; // Скрыть элемент
  }
};
window.addEventListener('scroll', checkScroll);
new WOW().init();
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("open")
});
document.querySelector('.header__menu').addEventListener('click', event=> {
    event.menuClose = true;
});
document.querySelector('.hamburger').addEventListener('click', event=> {
    event.menuClose = true;
});
document.body.addEventListener('click', event=> {
    if(event.menuClose) return;
    document.querySelector('.header').classList.remove('open');
});
window.addEventListener('keydown', (e)=> {
    if(e.key === 'Escape') {
        document.querySelector('.header').classList.remove('open');
    }
});



