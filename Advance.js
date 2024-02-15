

// function dupArray(arr){
//     return [...new Set(arr)]
// }

// let arr = [1, 4, 5, 8, 8, 5, 4]

// console.log(dupArray(arr))

// function splittingString(str){
//     return [...str]
// }
// let a = splittingString('suliam')
// console.log(a)

function getArguments(...args) {
    let total = 0
    for(let i = 0; i < args.length ; i++){
        total += args[i]
    }

    return total
}


console.log(getArguments(1, 548, 234));