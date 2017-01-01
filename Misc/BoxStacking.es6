'use strict';
// http://www.geeksforgeeks.org/dynamic-programming-set-21-box-stacking-problem/

// Let each box be represented as an array. Input is an array of boxes.
class BoxStacking {
  maxHeight(inputArr) {
    // store all possible rotations of the array

    const rotArray = inputArr.slice();
    console.log(rotArray);
    Array.map(inputArr, function (box, index, array) {
      //rotate the box and store it as a new object
      const rotbox1 = { },
        rotbox2 = { };

      rotbox1.l = box.l;
      rotbox1.b = box.h;
      rotbox1.h = box.b;

      rotArray.push(rotbox1);

      rotbox2.l = box.b;
      rotbox2.b = box.h;
      rotbox2.h = box.l;

      rotArray.push(rotbox2);
    });

    // sort the array by decreasing area

    rotArray.sort(function (a, b) {
      return b.l * b.b - a.l * a.b;
    });

    console.log(rotArray);


    let msh = [];
    // initialize the max stack height array
    for (let index = 0; index < rotArray.length; index++) {
      msh[index] = rotArray[index].h;
    }
    // calculate the max possible height with box i at top

    for (let outer = 1; outer < rotArray.length; outer++) {
      for (let inner = 0; inner < outer; inner++) {
        if (rotArray[outer].l < rotArray[inner].l &&
            rotArray[outer].b < rotArray[inner].b &&
            msh[inner] + rotArray[outer].h > msh[outer]) {
              msh[outer] = msh[inner] + rotArray[outer].h;
        }
      }
    }

    // pick the max height

    let max = 0;
    for (let i=0; i < msh.length; i++) {
      if (msh[i] > max) {
        max = msh[i];
      }
    }

    return max;
  }
}

const boxArray = new BoxStacking();
const result = boxArray.maxHeight([{l:4, b:6, h:7},{l:1, b:2, h:3},{l:4, b:5, h:6},{l:10, b:12, h:32}]);
console.log('result', result);
