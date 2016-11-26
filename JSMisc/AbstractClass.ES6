'use strict';

class Widget {
  constructor() {
    if (this.constructor === Widget) {
      throw new TypeError('Abstract class cannot be instantiated directly.');
    }

    // enforce the implementation of schema method in child classes
    if (this.schema === undefined) {
      throw new TypeError('Classes extending the abstract widget class must implement schema');
    }
  }
}

let widget = new Widget();