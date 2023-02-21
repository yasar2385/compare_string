// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function single_insert_or_delete(s1, s2) {
  var count;
  [s1, s2] = [s1.toLocaleLowerCase(), s2.toLocaleLowerCase()];
  count = 0;
  if (s1 === s2) {
    return 0;
  } else {
    if (s1.length === s2.length) {
      return 2;
    } else {
      if (s1.length - s2.length === -1) {
        if (s1 === s2.slice(0, -1)) {
          return 1;
        } else {
          for (
            var i,
              _pj_c = 0,
              _pj_a = Array.from(Array(s2.length).keys()),
              _pj_b = _pj_a.length;
            _pj_c < _pj_b;
            _pj_c += 1
          ) {
            i = _pj_a[_pj_c];
            if (s1 === s2.slice(0, i) + s2.slice(i + 1)) {
              return 1;
            }
          }
        }
      } else {
        if (s1.length - s2.length === 1) {
          if (s1.slice(0, -1) === s2 || s1.slice(1) === s2) {
            return 1;
          } else {
            for (
              var i,
                _pj_c = 0,
                _pj_a = Array.from(Array(s1.length).keys()),
                _pj_b = _pj_a.length;
              _pj_c < _pj_b;
              _pj_c += 1
            ) {
              i = _pj_a[_pj_c];
              if (s2 === s1.slice(0, i) + s1.slice(i + 1)) {
                return 1;
              }
            }
          }
        } else {
          return 2;
        }
      }
    }
  }
}

console.log(single_insert_or_delete('python', 'java'));
console.log(single_insert_or_delete('python', 'python'));
console.log(single_insert_or_delete('js', 'ejs'));
console.log(single_insert_or_delete('java', 'javascript'));
