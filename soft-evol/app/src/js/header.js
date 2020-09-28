'use strict';

const srch = document.getElementById('srch'),
    srchInp = document.getElementById('srch-inp'),
    burger = document.getElementById('burger');


//show input field by clicking srch img

srch.addEventListener('click', function() {
    this.style.display = 'none';
    srchInp.style.display = 'block';
});

//show nav menu by clicking burger

burger.addEventListener('click', function() {
    this.style.display = 'none';
});