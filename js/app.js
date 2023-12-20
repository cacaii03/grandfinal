
navigateTo('home');

document.addEventListener('DOMContentLoaded', function () {
   
    const openButton = document.getElementById('openmarButton');
    

   
    const hiddenMotto ="The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.";

   
    openButton.addEventListener('click', function () {
        
        alert(hiddenMotto);
    });
});