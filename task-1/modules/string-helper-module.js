function firstCharacterUppercase(str) {
    let s = str.toLowerCase();

    return s.charAt(0).toUpperCase()
        + s.slice(1);
}

function convertString(str) {
    let marks = Array.from(',.!?;:()');
    let result = str.split(' ')
        .filter(x => x != '')
        .join(' ');

    for (let m of marks) {
        result = result.replaceAll(' ' + m, m);
        result = result.replaceAll(m, m + ' ');
        result = result.replaceAll(m + '  ', m + ' ');
    }

    return result.trimEnd();
}

function numberOfwordsPerLine(str) {
    let lenght = 0;

    let result = str.split(/[,.!?;:()\s]/)
        .filter(x => x != '');

    result.forEach((x) => lenght++);

    return lenght;
}

function uniqueWords(str) {
    let result = [];

    let words = str.split(/[,.!?;:()\s]/)
        .filter(x => x != '')
        .map(x => x.toLowerCase());

    let map = new Map();

    words.forEach((x) => {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    });

    map.forEach((value, key) => {
        result.push(`${key} - ${value} ${(value % 10 === 2 
            || value % 10 === 4 || value % 10 === 3) ? 'раза' : 'раз'}`);
    });
    
    return result.join(', ');
}

module.exports = { firstCharacterUppercase, convertString, numberOfwordsPerLine, uniqueWords }