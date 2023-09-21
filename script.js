/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

const numbers = "0123456789".split('').toString();
const lower_case = "abcdefghijklmnopqrstuvwxyz".split('');
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const special_characters = "!@#$%^&*()-+".split('');

function minimumNumber(n, password) {
    const minPasswordLen = 6;
    const p = password.split('');
    let minChars = 0, nc = 0, lc = 0, uc = 0, sc = 0;
    
    if(p.length < 4) return minPasswordLen - p.length;
    
    for(let i = 0; i < p.length; i++) {
        if(numbers.includes(p[i])) nc++;
        else if(lower_case.includes(p[i])) lc++;
        else if(upper_case.includes(p[i])) uc++;
        else if(special_characters.includes(p[i])) sc++;
    }

    if(nc === 0) minChars++;
    if(lc === 0) minChars++;
    if(uc === 0) minChars++;
    if(sc === 0) minChars++;
    
    if((p.length === 4 || p.length === 5) && nc >= 1 && lc >= 1 && uc >= 1 && sc >= 1) return minPasswordLen - p.length;
    if(p.length + minChars < minPasswordLen) return minPasswordLen - (p.length + minChars - 1);    
    
    return minChars;
}
