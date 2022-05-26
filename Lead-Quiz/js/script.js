// плавный переход
const fadeIn = (element, timeout, display) => {
    element.style.opacity = 0;
    element.style.display = display || 'block';
    element.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 10);
};

const bonusPage = document.getElementById('bonuses-page');
const mainPage = document.getElementById('main-page');
const bonusesBtn = document.querySelectorAll('.bonuses');

bonusesBtn.forEach((btn) => {
    btn.onclick = () => {
        mainPage.hidden = true;
        bonusPage.hidden = false;
        fadeIn(bonusPage, 1000);
    };
});


// квиз
$(document).ready(function () {
    let step = 1;
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const code = document.getElementById('code');

    function changeStep() {
        $('#step-' + step).fadeOut(300, function () {
            $('#step-' + ++step).fadeIn(300);
        });
    }

    $('.btn-next').on('click', () => {
        if (step === 1 && name.value.length > 5 && phone.value.length > 0) changeStep();
        else if (step === 2 && code.value.length >= 4) changeStep();
    });

    // маска-номер
    $(document).ready(() => {
        $('#phone').mask("+7 (999) 99-99-999");
    });

});