// Day 1 - 'returns ammount of total equal candy to be eaten'
export function candies(children, candy) {
    return Math.floor(candy/children)*children;
}

// Day 2 - 'returns number of years it will take to hit threshold based off of deposit & rate'

export function depositProfit(deposit, rate, threshold) {
    //  write code here.
    var years=0;
    while(deposit<=threshold){
        deposit=deposit*((rate/100)+1);
        years++;
    }
    return years;
}

// Day 3 - 'returns an array with sub-arrays of size size'

export function chunkyMonkey(values, size) {
    //  write code here.
    var result = [];
    for(var i=0;i<values.length;i=i+size){
        result.push(values.slice(i,i+size));
    }
    return result;
}

// Day 4 - 'returns current century'

export function centuryFromYear(num) {
    //  write code here.
    if(num%100==0){
        return(Math.floor(num/100));    
    }
    return(Math.floor(num/100)+1);
    
}