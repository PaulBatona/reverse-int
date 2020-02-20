module.exports = function reverse (n) {
    let str = String(n).split('').reverse().join('');
    if(n>0){
        return str;
    }
    else {
        return str.slice(0, -1);
    }
}

