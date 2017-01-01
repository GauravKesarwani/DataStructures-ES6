//Count Possible decodings of a given sequence

class TotalDecodedMsgs {
	findTotalDecodings(digits, len) {
    if (len === 0 ||len === 1) {
      return 1;
    }

    //initialize the count
    let count = 0;

    if (parseInt(digits.charAt(len - 1)) > 0) {
      count+= this.findTotalDecodings(digits,len - 1);
    }

    if ((parseInt(digits.charAt(len - 2)) === 1) || (parseInt(digits.charAt(len - 2)) === 2 && parseInt(digits.charAt(len - 1)) < 7)) {
      count+= this.findTotalDecodings(digits,len - 2);
    }

    return count;
	}
}

const totalDecodings = new TotalDecodedMsgs();
console.log('Total Number of decoded messages', totalDecodings.findTotalDecodings('1351', 4));
