// String cleaning
function stringClean(s) {
    let result = '';
    const number = '0123456789'
    for (let i = 0; i < s.length; i++) {
        if (!number.includes(s[i])) {
            result += s[i]
        }
    }
    return result
}

// String ends with?
function solutio(str, ending) {
    return str.endsWith(ending);
}

// Name Array Capping
function capMe(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
}

// Polish alphabet
function correctPolishLetters(string) {
    const polishMap = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
    };
    return string.split('').map(char => polishMap[char] || char).join('');
}

// Is the string uppercase?
String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase();
};

// A Needle in the Haystack
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`
}

// Dollars and Cents
function formatMoney(amount) {
    return `$${amount.toFixed(2)}`
}

// Surface Area and Volume of a Box
function getSize(width, height, depth) {
    let array = [];
    array.push(2 * (width * height + width * depth + height * depth))
    array.push(width * height * depth)
    return array
}

// No zeros for heroes
function noBoringZeros(n) {
    while (n % 10 == 0 && n !== 0) {
        n /= 10;
    }
    return n;
}

// String Templates - Bug Fixing #5
function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

// The Wide-Mouthed frog!
function mouthSize(animal) {
    if (animal.toLowerCase() === "alligator") {
        return "small"
    } else { return "wide" }
}

// Contamination #1 -String-
function contamination(text, char) {
    return char.repeat(text.length)
}

// Name Shuffler
function nameShuffler(str) {
    return str.split(" ").reverse().join(" ");
}

// Unique In Order
function uniqueInOrder(iterable) {
    let result = []
    let last

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== last) {
            result.push(last = iterable[i])
        }
    }
    return result
}

// Similary
const uniqueInOrde = iterable =>
    [...iterable].filter((element, index) => element != iterable[index + 1])

// Multiplication table for number
function multiTable(number) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${number * i}\n`;
    }
    return result.trim();
}

// Unfinished Loop - Bug Fixing #1
function createArray(number) {
    const newArray = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

// Return the day
function whatday(num) {
    return num == 1 ? "Sunday" : num == 2 ? "Monday" : num == 3 ? "Tuesday" : num == 4 ? "Wednesday" : num == 5 ? "Thursday" : num == 6 ? "Friday" : num == 7 ? "Saturday" : "Wrong, please enter a number between 1 and 7";
}

// Reversed Words
function reverseWords(str) {
    return str.split('').reverse().join('');
}

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(str) {
    let voyel = 'aeiouAEIOU';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!voyel.includes(str[i])) {
            result += str[i]
        } else {
            result += '!'
        }
    }
    return result;
}

// Build Tower
function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        let espaces = " ".repeat(nFloors - i - 1);
        let etoiles = "*".repeat(2 * i + 1);
        tower.push(espaces + etoiles + espaces);
    }
    return tower;
}

// MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase();
}
// Similarly
function makeUpperCas(str) {
    let string = str.toUpperCase();
    return string;
}

// Drawing a Cross!
function drawACross(n) {
    if (n < 3) {
        return 'Not possible to draw cross for grids less than 3x3!';
    }
    if (n % 2 === 0) {
        return 'Centered cross not possible!';
    }
    let result = '';
    for (let i = 0; i < n; i++) {
        let line = '';

        for (let j = 0; j < n; j++) {
            if (i === j || j === n - 1 - i) {
                line += 'x'
            } else {
                line += ' ';
            }

        }
        result += line += '\n';
    }
    return result.trim();
}

// Be Concise I - The Ternary Operator
const describeAge = n => `You're a(n) ${n <= 12 ? "kid" : n <= 17 ? "teenager" : n <= 64 ? "adult" : "elderly"}`;

// Merge two arrays
function mergeArrays(a, b) {
    let result = [];

    for (let i = 0; i < a.length || i < b.length; i++) {
        if (i < a.length) result.push(a[i]);
        if (i < b.length) result.push(b[i]);
    }
    return result
}


// Tidy Number (Special Numbers Series #9)
function tidyNumber(n) {
    let toString = n.toString()
    for (let i = 0; i < toString.length; i++) {
        if (toString[i] > toString[i + 1]) {
            return false;
        }
    }
    return true
}

// Numbers in strings
function solv(s) {
    let maxNumber = 0;
    let currentNumber = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        } else {
            if (currentNumber) {
                let num = +(currentNumber);
                if (num > maxNumber) {
                    maxNumber = num;
                }
                currentNumber = "";
            }
        }
    }
    if (currentNumber) {
        let num = +(currentNumber);
        if (num > maxNumber) {
            maxNumber = num;
        }
    }
    return maxNumber;
}

// Trimming a string
function trim(str, size) {
    // Si la taille de la chaîne est inférieure ou égale à la taille demandée, on retourne la chaîne telle quelle
    if (str.length <= size) {
        return str;
    }

    // Si la taille est supérieure, on tronque la chaîne
    const trimmed = str.slice(0, size);

    // Si la taille spécifiée est inférieure ou égale à 3, on tronque directement sans espace supplémentaire
    return size <= 3 ? trimmed + "..." : trimmed.slice(0, size - 3) + "...";
}

// Remove String Spaces
function noSpace(x) {
    return x.split(' ').join('');
}
// Same
function noSpac(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            result += x[i]
        }
    }
    return result;
}

// Simple string reversal
function solve(str) {
    let reversedChars = str.split('').filter(c => c !== ' ').reverse(); // On inverse les caractères non-espaces
    let result = "";
    let index = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += ' '; // On ajoute l'espace si présent
        } else {
            result += reversedChars[index++]; // On ajoute les caractères inversés
        }
    }
    return result;
}

// Stop gninnipS My sdroW!
function spinWords(str) {
    return str.split(' ').map((mot) =>
        mot.length >= 5 ? mot.split('').reverse().join('') : mot).join(' ')
}


// Initialize my name
function initializeNames(str) {
    let arr = str.split(' ')
    return arr.map((mot, i) => i === 0 || i === arr.length - 1 ? mot : mot[0] + '.').join(' ')
}

// Split Strings
function solution(str) {
    let newStr = ""
    if (str == "") return []
    if (str.length % 2 != 0) {
        newStr += str + "_"
    } else newStr += str

    return newStr.match(/(\w\w)/g)
}

// String repeat
function repeatStr(n, s) {
    return s.repeat(n);
}

// Is my string repeating the same character over and over ?
function hasOneChar(s) {
    return s === s[0].repeat(s.length)
}

// You only need one - Beginner
function check(a, x) {
    return a.includes(x) 
}

// L1: Bartender, drinks!
function getDrinkByProfession(param) {
    let mot = param.toLowerCase()
    return mot == "jabroni" ? "Patron Tequila" 
    : mot == "school counselor" ? "Anything with Alcohol" 
    : mot == "programmer" ? "Hipster Craft Beer" 
    : mot == "bike gang member" ? "Moonshine"
    : mot == "politician" ? "Your tax dollars"
    : mot == "rapper" ? "Cristal"
    : "Beer" 
}


// Who is going to pay for the wall?
function whoIsPaying(name){
    return name.length > 2 ? [name , name.slice(0, 2)] : [name]
}


// Name on billboard
function billboard(name, price = 30){
    return [...name].reduce((sum) => sum + price, 0)
    return name.repeat(price).length;
} 


// UEFA EURO 2016
function uefaEuro2016(teams, scores){
    return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : scores[0] < scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    : `At match ${teams[0]} - ${teams[1]}, teams played draw.`
}

// CSV representation of array
function toCsvText (array) {
    return array.join('\n')
}

// Remove First and Last Character Part Two
function array (string) {
    let array = string.split(",")
    return array.length <= 2 ? null : array.map((a, i) => i == 0 || i == array.length -1 ? '' : a).join(' ').trim()
}

// Sort and Star
function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

// Stringy Strings
function stringy(size) {
    let str = "10".repeat(size)
    return str.slice(0, size)
}

// Capitalize Word
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

// Welcome to the City
function sayHello( name, city, state ) {
    return `Hello ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// Short Long Short
function soluton (a, b) {
    return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r'
      ? `${name} plays banjo`
      : `${name} does not play banjo`;
}
function countWords(str) {
    if (str.trim() === "") return 0;
    return str.trim().split(/\s+/).length;
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
    return string.endsWith('!') ? string.slice(0, -1) : string
}