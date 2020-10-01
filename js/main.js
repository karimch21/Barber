
$(function () {
  $('.main-wrap').click(function () {
    $('.main-wrap').toggleClass('active');
    $('.main').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.main-list a').click(function(){
    $('.main').removeClass('active');
    $('body').removeClass('lock');
    $('.main-wrap').removeClass('active');
  })

  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });


  const swiperSlider1 = document.querySelector('.swiper-container'),
        swiperSlider2 = document.querySelector('.works__box');       


  var swiper = new Swiper(swiperSlider1, {
    autoHeight: true, //enable auto height
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
      },
    },
  });


  var swiper = new Swiper(swiperSlider2, {
    autoHeight: true, //enable auto height
    spaceBetween: 20,
    pagination: {
      el: '.works__box-pagination',
      clickable: true,
    },
  });


  //E-mail Send
  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  // const fileInput = document.querySelector('input[type="file"]');

  // fileInput.addEventListener('change', (e) => {
  //   let files = e.currentTarget.files;
  //   console.log(files);

  //   if (files.length) {
  //     fileInput.closest('label').querySelector('span').textContent = files[0].name;
  //   } else {
  //     fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
  //   }

  // });

  let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let modal = document.querySelector('.modal');
              let modalClose = document.querySelector('.modal__close');
              let body = document.querySelector('body')
              modal.classList.add('active');
              body.classList.add('lock');
              modalClose.onclick = function () {
                modal.classList.remove('active');
                body.classList.remove('lock');
              }
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();

        fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
      }
    });
  }

  validateForms('.form', { email: { required: true, email: true }, tel: { required: true } }, '.thanks-popup', 'send goal');


});