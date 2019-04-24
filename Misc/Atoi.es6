// Implement atoi function which converts string to an integer


//Define your own exception object
function NumberFormatException (message) {
  this.name = 'Number Format Exception';
  this.message = message;
}

class AtoiImpl {
  atoi(str) {
    let sum = 0;
    for (let index = 0; index < str.length; index++) {
      const c = str.charCodeAt(index);
      if (c > 47 && c < 58) {
        sum = sum * 10 + c - 48;
      }
      else {
        throw new NumberFormatException('invalid number');
      }

    }
    return sum;
  }
}

const atoi = new AtoiImpl();
console.log('atoi', atoi.atoi('20739'));
