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

// Day 6 - 'sorts the strings from shortest to longest'

export function sortByLength(strs) {
    strs.sort(function compare(a,b){
        if(a.length < b.length){
            return -1;
        }
        if(a.length > b.length){
            return 1;
        }
        if(a.length==b.length){
            return 0;
        }
        
    })
    return strs;
}

// Day 7 - 'returns total of vowels(1) and consonants(2) to be added'

export function countVowelConsonant(str) {
    var arr=str.split("");
    const reducer = function (sum, letter){
        if(letter=="a" || letter=="o" || letter=="e" || letter=="i" || letter=="y" || letter=="u"){
            sum+=1;
        }
        else{
            sum+=2;
        }
        return sum;
    };
    var sum = 0;
    return arr.reduce(reducer, sum);
  }

  // Day 9 - 'returns sum of all odd Fibonnci numbers'
  
  export function sumOddFibonacciNumbers(num) {
    var a=0, b=1, nextTerm, sum=1;
    for(var i=1; i<=num; i++){
        nextTerm = a+b;
        a=b;
        b=nextTerm;
        if(nextTerm%2==1 && nextTerm<=num){
            sum+=nextTerm;
        }   
    }
    return sum;
}

// Day 10 - 'returns largest product of adjacent values'

export function adjacentElementsProduct(nums) {
    let max, temp;
    for(let i=1;i<nums.length;i++){
        temp=nums[i]*nums[i-1];
        if(max==null){
            max=temp;
        }
        else if(temp>max){
            max=temp;
        }
    }
    return max;
}

// Day 11 - 'returns minimal number of jumps in between numbers'

export function avoidObstacles(nums) {
    nums.sort();
    var n=2;
    let check = function(value){
        return (value%n)!=0
    };
    while(n<nums[nums.length-1]){
        if (nums.every(check)){
            return n;
        }
        n++;
    }
    console.log("Not found.");
    return null;
}

// Day 12 - 'returns true for valid time'

export function validTime(str) {
    //  write code here.
    var spl = str.split(":");
    if(parseInt(spl[0])<=23 && parseInt(spl[0])>0 && parseInt(spl[1])<=59 && parseInt(spl[1])>0){
        return true;
    }
    return false;
}

// Day 13 - 'returns largest positive integer possible for digit count'

export function extractEachKth(nums, index) {
    let filt = function(num, idx, arr){
        var div = idx+1;
     if((div%index)==0){
         return false;
     }
     else{
         return true;
     }
    };
    var arr = nums.filter(filt);
    return arr;
}

// Day 14 - 'returns largest difference between adjacent values'

export function arrayMaximalAdjacentDifference(nums) {
    var diff = 0;
    for(let i=1;i<nums.length;i++){
        if(Math.abs(nums[i]-nums[i-1])>diff){
            diff=Math.abs(nums[i]-nums[i-1]);
        }
    }
    return diff;
}

// Day 15 - 'CSS Stuff, not implemented'

// Day 16 - 'insert dashes in between chars'

export function insertDashes(arr) {
    var spl = arr.split(" ");
    var final = '';
    for(let i=0; i<spl.length; i++){
        final = final.concat(" ", spl[i].split("").join("-"));
    }
    return final.trim();
}

// Day 17 - 'returns count of unique characters'

export function differentSymbolsNaive(str) {
    let s = new Set(str.split(""));
    return s.size;
}

// Day 18 - 'returns count of unique characters'

export function alphabetSubsequence(str) {
    let arr = str.toLowerCase().split("");
    for(let i=1; i<arr.length; i++){
        if(str.charCodeAt(i)<=str.charCodeAt(i-1)){
            return false;
        }
    }
    return true;
}