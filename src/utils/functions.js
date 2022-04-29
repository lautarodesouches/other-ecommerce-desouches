export function formatNumber(number) {
    let formatOfNumber = new Intl.NumberFormat("es-AR");
    return "$" + formatOfNumber.format(number);
}

export function capitalize(sentence) {
    return sentence && sentence[0].toUpperCase() + sentence.slice(1);
}

export function notification(text, bg, time) {
    const body  = document.getElementsByTagName("body")[0];
    const div   = document.createElement("div");
    div.innerText = text;
    div.classList = `${bg} text-white p-3 rounded position-fixed m-2 top-0 end-0`;
    body.appendChild(div);
    setTimeout(() => {
        body.removeChild(div);
    }, time);
}

export function shuffle(array) {
    return array.sort((a, b) => 0.5 - Math.random());
}