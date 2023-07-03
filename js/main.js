let header = document.getElementById('header');


window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})


if(window.innerWidth < 991){
    let hamburger = document.querySelector('.hamburger .fa');
    let navigation = document.querySelector('.navigation');
    hamburger.addEventListener('click',()=>{
        if(navigation.style.height == '0px'){
            navigation.style.height = navigation.scrollHeight + 'px';
        } else {
            navigation.style.height = '0px';
        }
    })
}