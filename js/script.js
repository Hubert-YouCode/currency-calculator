// Kalkulator:
{
const formElement = document.querySelector(".js-form");
const changeElement = document.querySelector(".js-change");
const currencyElement = document.querySelector(".js-currency")
const sumElement = document.querySelector(".js-sum");
const exchangeElement = document.querySelector(".js-exchange");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    if (currencyElement.value === ("EUR")) {
        sum = (changeElement.value / 4.28);
        exchange = (4.28);
        symbol = ("€");

    };
    if (currencyElement.value === ("GBP")) {
        sum = (changeElement.value / 4.99);
        exchange = (4.99);
        symbol = ("£");

    };

    if (currencyElement.value === ("USD")) {
        sum = (changeElement.value / 3.76);
        exchange = (3.76);
        symbol = ("USD");

    };
    
    if (currencyElement.value === ("CHF")) {
        sum = (changeElement.value / 4.60);
        exchange = (4.60);
        symbol = ("CHF");

    };

    if (currencyElement.value === ("UAH")) {
        sum = (changeElement.value * 11.01);
        exchange = (11.01);
        symbol = ("UAH");

    };

    sumElement.innerText = (sum.toFixed(2)+ symbol);
    exchangeElement.innerText = (exchange);
});
}

// ciemny motyw

{
const button = document.querySelector(".button");
const body = document.querySelector(".background");
const themeName = document.querySelector(".themeName");
const form__button = document.querySelector(".form__button");
const article__link = document.querySelector(".article__link");
const form__strong = document.querySelector(".form__strong");




button.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (body.classList.contains("dark")){
        themeName.innerText = "Jasny motyw";
    } else {
        themeName.innerText = "Ciemny motyw";
    };

    if (body.classList.contains("dark")){
        button.classList = "buttonDark";
    } else {
        button.classList = "button";
    };

    if (body.classList.contains("dark")){
        form__button.classList = "form__button--dark"
    } else {
        form__button.classList = "form__button"
    };

    // Tu zaczyna się problem z modyfikatorami, mianowicie zmienia się klasa tylko jednego elementu "SUMA" i "DOLAR" Nie wiem w jaki sposób zrobić tak aby zmieniała się klasa w każdym z elementów.

    if (body.classList.contains("dark")){
        article__link.classList = "article__link--dark";
    } else {
        article__link.classList = "article__link";
    };

    if (body.classList.contains("dark")){
        form__strong.classList = "form__strong--dark";
    } else {
        form__strong.classList = "form__strong";
    };

});

}
