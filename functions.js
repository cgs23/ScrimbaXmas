// Day 1 - 'returns amount of total equal candy to be eaten'

export function candies(children, candy) {
    return Math.floor(candy/children)*children;
}

// Day 2 - 'returns number of years it will take to hit threshold based off of deposit & rate'

export function depositProfit(deposit, rate, threshold) {
    var years=0;
    while(deposit<=threshold){
        deposit=deposit*((rate/100)+1);
        years++;
    }
    return years;
}

// Day 3 - Splits the original array into sub-arrays of length 'size''

export function chunkyMonkey(values, size) {
    var result = [];
    for(var i=0;i<values.length;i=i+size){
        result.push(values.slice(i,i+size));
    }
    return result;
}

// Day 4 - 'returns century of given year'

export function centuryFromYear(num) {
    if(num%100==0){
        return(Math.floor(num/100));    
    }
    return(Math.floor(num/100)+1);
    
}

// Day 5 - 'returns a reversed string'

export function reverseAString(str){
    // var arr = str.split("");
    // arr.reverse();
    // return arr.join("");
    return str.split("").reverse().join("");
}

