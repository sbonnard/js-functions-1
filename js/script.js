// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.log("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");

/**
 * Gives the sum of two numbers with an addition
 * @param {*} a 
 * @param {*} b 
 * @returns {number} Result of addition of a + b
 */
function getSum(a, b) {
    return a + b
}

console.log(getSum(5, 7));
console.log(getSum(10, 12));


/* ------------------------------------------------------*/

console.log("2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre.");

/**
 * Gives smallest value comparing two values
 * @param {number} a
 * @param {number} b
 * @returns {number} If a < b, returns = a. Else, returns = b
 */
function getMinNumber(a, b) {
    return Math.min(a, b)
}

console.log(getMinNumber(2, 85));
console.log(getMinNumber(72, 5));


/* ------------------------------------------------------*/

console.log("3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau.");

const tableName = [
    'Henry',
    'Patrick',
    'Minerva',
    'Jean-Luc',
    'Pedro',
    'Simone',
    'Gudule',
    'Victor',
    'Billie'
]

const tableNameScd = [
    'Jacqueline',
    'Julius',
    'Marcel',
    'Céline',
    'Raymonde',
    'Casper'
]

/**
 * Gives last value entry of an array determined by a's value.
 * @param {array} array Enter the array of your choice.
 * @returns {name} last value of the array.
 */
function getLastTableValue(array) {
    const i = array.length;
    return array[i - 1]
}

console.log(getLastTableValue(tableName));
console.log(getLastTableValue(tableNameScd));


/* ------------------------------------------------------*/

console.log("4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation.");

/**
 * increases a value with a percentage without %
 * @param {number} a arbitrary value to increase.
 * @param {number} percent percentage without % (ex : 1, 2, 3)
 * @returns {number} value "a" increased.
 */
function increaseValuePercent(a, percent) {
    return a * (1 + percent / 100);
}

console.log(increaseValuePercent(50, 25));
console.log(increaseValuePercent(97, 50));


/* ------------------------------------------------------*/

console.log("5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs.");

function getMaxValue(a, b, c) {
    return Math.max(a, b, c)
}

function getMaxValue(a, b, c) {
    return Math.max(a, b, c)
}

console.log(getMaxValue(25, 32, 1));
console.log(getMaxValue(5221, 58, 165164));


/* ------------------------------------------------------*/

console.log("6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau.");

const numArray = [15, 58, 96, 14, 5, 477, 22]
const numArray2 = [155, 758, 966, 414, 245, 4177, 22]

let sumArray = 0;

/**
 * Get the sum of all the values of an array.
 * @param {array} array Name the array you want the sum of.
 * @returns {number} Total sum of all the values of your array.
 */
function getSumArray(array) {
    for (const number of numArray) {
        sumArray += number;
    }
    return sumArray
}

console.log(getSumArray(numArray));
console.log(getSumArray(numArray2));


/* ------------------------------------------------------*/

console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre.");

let floorValue = 0;

/**
 * Get random number between 0 and the param value.
 * @param {number} a The max number to reach
 * @returns {number} The random number.
 */
function getRandomValue(a) {
    return Math.floor(Math.random() * (a + 1))
}


console.log(getRandomValue(5));
console.log(getRandomValue(100));


//Dé de JDR
function rollRPGDice(a) {
    return Math.floor(Math.random() * a + 1)
}
console.log(rollRPGDice(100));




/* ------------------------------------------------------*/

console.log("8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau.");

const numbersArray = [46, 88, 74, 22, 35, 65]
const numbersArray2 = [10, 20]

/**
 * get average of an array composed 
 * @param {array} array 
 * @returns {number}
 */
function getAverageValuesArray(array) {
    let averageArray = 0;
    for (const nbr of array) {
        averageArray += nbr;
    }
    return averageArray / array.length
}

//-----OU------ Ne marche pas avec mes fonctions

// function getAverageValuesArray2(array) {
//     return getSumArray(array) / array.length
// }

console.log(getAverageValuesArray(numbersArray));
console.log(getAverageValuesArray(numbersArray2));


/* ------------------------------------------------------*/

console.log("9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes.");

/**
 * Converts time in minutes in hours and minutes.
 * @param {time} time Time in minutes
 * @returns time in hours and minutes
 */
function convertTime(time) {
    let minute = Math.ceil(time % 60);
    let hour = Math.floor(time / 60);
    return `${hour} heures et ${minute} minutes.`
}

console.log(convertTime(121));
console.log(convertTime(778));


/* ------------------------------------------------------*/

console.log("10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau.");

let numTable = [75, 95, 88, 47, 14, 12, 1, 58];
let numTable2 = [75, 95, 88, 2, 14, 12, 100, 58];

/**
 * Get lowest value out of an array.
 * @param {array} array The array you want the lowest value of.
 * @returns {number} The lowest value in your array.
 */
function getMinTableValue(array) {
    return Math.min(...array)
}


console.log(getMinTableValue((numTable)));
console.log(getMinTableValue((numTable2)));


/* ------------------------------------------------------*/

console.log("11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale .");

const scores =
{
    Nicolas: 629,
    Samir: 857,
    Tom: 483,
    Loanne: 567
}
    ;

let bestscore;

function getKeyForMaxValue(object) {

}

console.log(getKeyForMaxValue(scores));
console.log();


/* ------------------------------------------------------*/

console.log("12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau.");

/**
 * Get a random value from an array using its indexes.
 * @param {array} array The array you want a random value from.
 * @returns {number} The random value.
 */
function getRandomValueArray(array) {
    return array[Math.floor(Math.random() * (array.length))]
}

// function getRandomValueArray(array){
// a = array.length;
// return getRandomValue(a)
// }

console.log(getRandomValueArray(numTable));
console.log(getRandomValueArray(numTable2));


/* ------------------------------------------------------*/

console.log("13/ Implémentez une fonction qui retourne le nombre de mots dans un texte.");

function name(params) {
    
}

console.log();
console.log();