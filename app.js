const range = document.querySelector('#range');
const pageviewsNum = document.querySelector('.pageviews-num');
const monthPrice = document.querySelectorAll('.month-price');
const discountSwitch = document.querySelector('#discount-switch');

const values = [20, 50, 100, 500, 1000];
const prices = [8, 12, 16, 24, 36];

range.addEventListener('input', () => {
    const currentValue = values[range.value];
    pageviewsNum.textContent = currentValue < 1000 ? `${currentValue}K` : `1M`;

    showPrice();
})

discountSwitch.addEventListener('click', showPrice)

function showPrice() {
    if (discountSwitch.checked) {
        monthPrice[0].textContent = `$${prices[range.value] / 100 * 75}.00`
        monthPrice[1].textContent = `$${prices[range.value] / 100 * 75}.00`
    } else {
        monthPrice[0].textContent = `$${prices[range.value]}.00`
        monthPrice[1].textContent = `$${prices[range.value]}.00`
    }
}

