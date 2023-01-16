function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function avarege() {
    return sum(...arguments) / arguments.length
}
console.log(avarege(4,4,4,4,4,4,4));
