
let searchBtn = $('#search-btn');
let searchForm = $('.header .search-form');

searchBtn.click( function(){

    searchBtn.toggleClass('fa-times');
    searchForm.toggleClass('active');
    navbar.removeClass("active")
    menuBtn.removeClass("fa-times");

});


let menuBtn = $("#menu-btn");
let navbar = $(".header .navbar");

menuBtn.click(function(){
    menuBtn.toggleClass("fa-times");
    navbar.toggleClass("active")
    searchForm.removeClass('active');
    searchBtn.removeClass('fa-times');
})


$('html, body').scroll(function(){
    searchBtn.removeClass('fa-times');
    searchForm.removeClass('active');
    navbar.removeClass("active")
    menuBtn.removeClass("fa-times");
})


AOS.init({
    duration: 400  //600 or 800 would be also nice
});