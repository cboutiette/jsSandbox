/**
 * Imperative Example
 */

function AppendNumberImperative (array)
{
    var index = 0
    var returnArray = []
    while (index < array.length){
        returnArray[index] = array[index] + ':' + index
        index++
    }
    return returnArray;
}

alert(AppendNumberImperative(['Chris', 'Mandy']))


/**
 * Declarative Example
 */

function AppendNumberDeclarative(array)
{
    var i = 1
    return array.map(appendToMe => appendToMe + ':' +  i++)
}

alert(AppendNumberDeclarative(['Mandy', 'Chris']))