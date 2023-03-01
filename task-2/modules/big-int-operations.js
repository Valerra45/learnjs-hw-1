function add(a, b) {
    let m = Array.from(a).reverse();
    let n = Array.from(b).reverse();

    let result = [];

    let len = Math.max(m.length, n.length);
    
    let c = 0;

    for (let i = 0; i < len; i++) {
        c += (m[i] == null ? 0 : +m[i]) + (n[i] == null ? 0 : +n[i]); 
  
        result.push(c % 10);

        c = Math.floor(c / 10);
    }

    if (c > 0) {
        result.push(c);
    }

    return result.reverse().join('');
} 

function sub(a, b) {
    let m;
    let n;
    let result = [];

    if (a.length > b.length) {
        m = Array.from(a).reverse();
        n = Array.from(b).reverse();
    } else if (a.length < b.length) {
        m = Array.from(b).reverse();
        n = Array.from(a).reverse();
    } else {
        if (a.localeCompare(b) < 0) {
            m = Array.from(b).reverse();
            n = Array.from(a).reverse();
        } else {
            m = Array.from(a).reverse();
            n = Array.from(b).reverse();
        }
    }

    let c = 0;

    for (let i = 0; i < m.length; i++) {
        c += (m[i] == null ? 0 : +m[i]) - (n[i] == null ? 0 : +n[i]) + 10;

        result.push(c % 10);

        c = c < 10 ? -1 : 0; 
    }

    while (result.at(-1) == 0) {
        result.pop();
    }

    return result.reverse().join('');
}

function mul(a, b) {
    let result = [];
    let m = Array.from(a).reverse();
    let n = Array.from(b).reverse();

    m.unshift(m.length);
    n.unshift(n.length);

    let cr = 0;

    for (let i = 1; i < m.length; i++) {
        for (let j = 1; j < n.length; j++) {
            cr = (m[i] == null ? 0 : +m[i]) * (n[j] == null ? 0 : +n[j]);

            let k = i + j - 1;

            while (cr > 0) {
                cr += (result[k] == null ? 0 : +result[k]);

                result[k] = cr % 10;
                cr = Math.floor(cr / 10);

                if ((result[0] == null ? 0 : +result[0]) < k) {
                    result[0] = k;  
                }

                k++;
            } 
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] == null) {
            result[i] = 0;
        }
    }

    result.shift();

    return result.reverse().join('');
}

// реализованно деление длинного числа на обычное
function div(a, b) {
    let result = [];
    let m = Array.from(a);

    let n = +b;
    
    let x = 0;
    let k = 0;

    for (let i = 0; i < m.length; i++) {
        x = x * 10 + +m[i];

        if (x < b && k === 0 && i < m.length) {
            continue;
        }
        
        k = 1;

        result.push(Math.floor(x / b));

        x = x % b;
    }

    return result.length === 0 ? '0' : result.join('');
}

module.exports = { add, sub, mul, div }