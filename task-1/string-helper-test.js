const { firstCharacterUppercase,
    convertString,
    numberOfwordsPerLine,
    uniqueWords } = require('./modules/string-helper-module.js');


console.log( firstCharacterUppercase('hElLo WoRlD!') );    
console.log( convertString('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.') );
console.log( numberOfwordsPerLine('Вот  пример строки,в которой') );
console.log( uniqueWords('Текст, в котором слово текст несколько раз встречается и слово тоже.') );