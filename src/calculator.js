import React from 'react'


const add = (numbers) => {
    if(!numbers) return 0;

    var numbersList = numbers.split(",").map((number) => parseInt(number))
    return numbersList.reduce((sum, number) => sum + number)
}

export default add