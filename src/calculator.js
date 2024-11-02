import React from 'react'

const add = (numbers) => {
    if(!numbers) return 0;

    const delimiters = [',', '\n']
    var customDelimiters 
    // = numbers.match(/^\/\/(.*?)\n/)
    // if (customDelimiters) {
    //     delimiters.push(customDelimiters[1])
    //     numbers = numbers.slice(4)
    // }

    if (numbers.startsWith("//")) {
        numbers = numbers.slice(2)
        var customPatters = numbers.split("\n")[0]
        numbers = numbers.substring(customPatters.length + 1)
        
        var customDelimiters = customPatters.match(/\[(.*?)\]/g)
        if (customDelimiters) {
            customDelimiters.forEach(d => delimiters.push(d.slice(1,-1)) )
        } else {
            delimiters.push(customPatters)
        }
    }
    
    var numbersList = numbers.split(new RegExp(`[${delimiters.join("")}]`)).filter(Boolean).map((number) => parseInt(number))
    
    var negativeNumbers = numbersList.filter((number) => number < 0)
    if (negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)

    return numbersList.filter((number) => number <= 1000).reduce((sum, number) => sum + number)
}

export default add