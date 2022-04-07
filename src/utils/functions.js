export function formatNumber(number) {
    let formatOfNumber = new Intl.NumberFormat('es-AR');
    return '$' + formatOfNumber.format(number);
}