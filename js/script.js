
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

        if (body.classList.contains("dark")) {
            themeName.innerText = "Jasny motyw";
        } else {
            themeName.innerText = "Ciemny motyw";
        };

        if (body.classList.contains("dark")) {
            button.classList = "buttonDark";
        } else {
            button.classList = "button";
        };

        if (body.classList.contains("dark")) {
            form__button.classList = "form__button--dark"
        } else {
            form__button.classList = "form__button"
        };

        // Tu zaczyna się problem z modyfikatorami, mianowicie zmienia się klasa tylko jednego elementu "SUMA" i "DOLAR" Nie wiem w jaki sposób zrobić tak aby zmieniała się klasa w każdym z elementów.

        if (body.classList.contains("dark")) {
            article__link.classList = "article__link--dark";
        } else {
            article__link.classList = "article__link";
        };

        if (body.classList.contains("dark")) {
            form__strong.classList = "form__strong--dark";
        } else {
            form__strong.classList = "form__strong";
        };

    });

}

// Własna funkcja.
{
    const formElement = document.querySelector(".js-form");
    const changeElement = document.querySelector(".js-change");
    const currencyElement = document.querySelector(".js-currency")
    const sumElement = document.querySelector(".js-sum");
    
    const calculator = (amount, currency) => {

        const rateEUR = 4.28;
        const rateGBP = 4.99;
        const rateUSD = 3.76;
        const rateCHF = 4.60;
        const rateUHA = 11.01;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;

            case "CHF":
                return amount / rateCHF;

            case "UHA":
                return amount * rateUHA;

        }
    };
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +changeElement.value;
        const currency = currencyElement.value;

        const result = calculator(amount, currency);
        sumElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    });

    
}
