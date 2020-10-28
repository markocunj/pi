function isti_znakovi(string) {

    const charMap = {};
    let max = 0;
    let isti_znakovi = '';

    for(let char of string){
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            isti_znakovi = char;
        }
    }

    return max; 
}

console.log(isti_znakovi("baaaccd")) // → 3
console.log(isti_znakovi("ba2dll")) // → 2