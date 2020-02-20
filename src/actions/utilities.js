export const capitalize = str => {
    return str[0].toUpperCase() + str.slice(1);
}

export const formatString = str => {
    const splitString = str.split('-');
    let final = '';
    splitString.forEach( item => {final = `${final} ${capitalize(item)}`} );
    return final;
}