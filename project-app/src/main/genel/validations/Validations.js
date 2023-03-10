const checkIsTckn = (event) => {
    const value = event.target.value
    const valueLength = value.length
    if(!+value[valueLength - 1] || valueLength > 11){
        event.target.value = value.slice(0, valueLength - 1)
    }
}

const checkIsLetter = (event) => {
    const value = event.target.value
    const re = /[A-Za-z]/g
    try{
        event.target.value = value.match(re).join('')
    }catch(e){
        event.target.value = ''
    }
}

export {checkIsLetter, checkIsTckn};