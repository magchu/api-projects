document.querySelectorAll(".carousel").forEach(carousel => {

    const items = carousel.querySelectorAll(".carousel__item");
    const buttonHTML = Array.from(items, () => {
        return` <span class="carousel__button"></span>`;
    });

    console.log(buttonHTML)

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${buttonHTML.join("") }
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel_button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classlist.add("carousel__button--selected");
        })
    })

});