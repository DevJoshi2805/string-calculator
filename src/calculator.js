import React from 'react'


const add = (numbers) => {
    if(!numbers) return 0;

    const delimiters = [',', '\n']
    var customDelimiters = numbers.match(/^\/\/(.)\n/)
    if (customDelimiters) {
        delimiters.push(customDelimiters[1])
        numbers = numbers.slice(4)
    }
    
    var numbersList = numbers.split(new RegExp(`[${delimiters.join("")}]`)).map((number) => parseInt(number))

    var negativeNumbers = numbersList.filter((number) => number < 0)
    if (negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
    
    return numbersList.reduce((sum, number) => sum + number)
}

export default add