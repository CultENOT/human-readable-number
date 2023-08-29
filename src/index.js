module.exports = function toReadable (number) {
    let result = 0;
    const preparedNumber = number.toString();
    const units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }   
    const dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    if (number < 20) {
        result = units[number]
    } else if (number % 10 === 0 && number < 100) {
        result = dozens[preparedNumber[0]]
    } else if (preparedNumber.length <= 2) {
        result = `${dozens[preparedNumber[0]]} ${units[preparedNumber[1]]}`
    } else if (number % 100 === 0) {
        result = `${units[preparedNumber[0]]} hundred`
    } else if (number % 10 === 0) {
        result = `${units[preparedNumber[0]]} hundred ${dozens[preparedNumber[1]]}`
    } else if (+preparedNumber[1] === 0 && number > 100) {
        result = `${units[preparedNumber[0]]} hundred ${units[preparedNumber[2]]}`
    } else if (+preparedNumber.slice(1, 3) > 10 && +preparedNumber.slice(1, 3) < 20) {
        result = `${units[preparedNumber[0]]} hundred ${units[preparedNumber.slice(1, 3)]}`
    } else{
        result = `${units[preparedNumber[0]]} hundred ${dozens[preparedNumber[1]]} ${units[preparedNumber[2]]}`
    }
    return result
}
