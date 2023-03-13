const checkIsTckn = (event) => {
    const value = event.target.value
    const valueLength = value.length
    const sayiMi = ! (typeof Number(value[valueLength - 1]) === "number")
    if(sayiMi || valueLength > 11){
        event.target.value = value.slice(0, valueLength - 1)
    }
    // İlk rakam için kontrol yapılacak
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

const formatPhoneNumber = (event) => {
    const value = event.target.value
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return event.target.value = phoneNumber;
    if (phoneNumberLength < 7) {
        return event.target.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return event.target.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
    )}-${phoneNumber.slice(6, 10)}`;
}

export {checkIsLetter, checkIsTckn, formatPhoneNumber};