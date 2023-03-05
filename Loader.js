let loader = document.querySelector('.loader'); 

window.addEventListener('load', function() {
    loader.style.display='none';
    document.querySelector('.about-me__picture--mask').classList.add('animate__profile');
    document.querySelector('.about-me__info-title').classList.add('fade_up-title');
    document.querySelector('.about-me__info--para').classList.add('fade_up--para');
    document.querySelector('.about-me_links').classList.add('fade_up_links');
    document.querySelector('.about-me__img').classList.add('fade_in__img');
    document.querySelector('#remove').classList.remove('loading');
});
