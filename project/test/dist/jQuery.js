var $ = (function () {
  'use strict';

  function jQuery (selector) {
    return new JQuery(selector)
  }

  class JQuery {
    constructor (selector) {
      this.selector = selector;
      this.init(selector);
    }

    init (selector) {
      if (typeof selector === 'string') {
        this.elements = [...document.querySelectorAll(selector)];
      } else if (typeof selector === 'function') {
        this.elements = [];
        document.addEventListener('DOMContentLoaded', selector);
      }
    }

    html (str) {
      if (str !== undefined) {
        this.elements.forEach(ele => {
          ele.innerHTML = str;
        });
        return this
      } else {
        return this.elements[0].innerHTML
      }
    }

    addClass (className) {
      this.elements.forEach(ele => {
        ele.classList.add(className);
      });
      return this
    }

    on (event, callback, useCapture = false) {
      this.elements.forEach(ele => {
        ele.addEventListener(event, callback, useCapture);
      });
      return this
    }

    val (str) {
      if (str !== undefined) {
        this.elements.forEach(ele => {
          ele.value = str;
        });
        return this
      } else {
        return this.elements[0].value
      }
    }

    append (child) {
      if (typeof child === 'string') {
        this.elements.forEach(ele => {
          ele.innerHTML += child;
        });
      }
    }
  }

  return jQuery;

})();
