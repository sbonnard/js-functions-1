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
 * Get the increase of a by using a percentage of 25%.
 * @param {number} a The value that will be increased.
 * @returns {number} The result = a increased of 25%.
 */
function getIncreasePercent(a) {
    const tax = 1.25;
    return a * tax
}

console.log(getIncreasePercent(47));
console.log(getIncreasePercent(82));


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

let sumArray = 0;

/**
 * Get the sum of all the values of an array.
 * @param {array} array Name the array you want the sum of.
 * @returns {number} Total sum of zall the vazlues of your array.
 */
function getSumArray(array) {
    for (const number of numArray) {
        sumArray += number;
    }
    return sumArray
}

console.log(getSumArray(numArray));
console.log();


/* ------------------------------------------------------*/

console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre.");

let floorValue = 0;

/**
 * Get random number between 0 and the param value.
 * @param {number} a The max number to reach
 * @returns {number} The random number.
 */
function getRandomValue(a) {
    return Math.floor(Math.random(1) * a)
}

console.log(getRandomValue(5));
console.log(getRandomValue(100));


/* ------------------------------------------------------*/

console.log("8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau.");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes.");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau.");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale .");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau.");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("13/ Implémentez une fonction qui retourne le nombre de mots dans un texte.");

console.log();
console.log();