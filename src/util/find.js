const find = ( a, n ) => {
    return findByName( a, n ) || findByNumber( a, n );
}

const findByName = ( a, n ) => {
    return a.find( ( { name } ) => name === n );
}

const findByNumber = ( a, n ) => {
    return a.find( ( { number } ) => number === parseInt(n, 10));
}

module.exports = {
    find,
    findByName,
    findByNumber,
};