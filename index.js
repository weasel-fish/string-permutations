function findAllPermutations(str) {
    let permsArray = []

    permutations('', str, permsArray, str.length)

    return permsArray
}

function permutations(fixed, str, arr, length) {
    if(fixed.length == length) {
        arr.push(fixed)
    } else {
        for(let i = 0; i < str.length; i++) {
            console.log(str.substring(1, i) + str.substring(i + 1))
            permutations(fixed + str[i], str.slice(0, i) + str.slice(i + 1), arr, length)
        }
    }
}