export const getStringRandom = (stringNumber, sliceNumber) => {
    return Math.random().toString(stringNumber).slice(sliceNumber);
}

export const convertNameFromGoogle = (name) => {
    return name.split(" ").join("").toLowerCase();
}
