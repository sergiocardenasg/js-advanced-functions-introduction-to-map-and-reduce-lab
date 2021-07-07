// Your code here
function mapToNegativize(sourceArray) {
    let negativeArr = [];
    for (let i = 0; i < sourceArray.length; i++) {
        negativeArr.push(sourceArray[i] * -1);
    };
    return negativeArr;
;}

function mapToNoChange(sourceArray) {
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArr.push(sourceArray[i]);
    };
    return newArr;
;}

function mapToDouble(sourceArray) {
    let doubledArr = [];
    for (let i = 0; i < sourceArray.length; i++) {
        doubledArr.push(sourceArray[i] * 2);
    };
    return doubledArr;
;}

function mapToSquare(sourceArray) {
    let squaredArr = [];
    for (let i = 0; i < sourceArray.length; i++) {
        squaredArr.push(sourceArray[i] ** 2);
    };
    return squaredArr;
;}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    };
    return total;
;}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    };
    return true;
;}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    };
    return false;
;}