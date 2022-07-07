// function isEqual(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2)
// }

// const obj1 = {
//   name: 'xxx',
//   age: 18,
// }

// const obj2 = {
//   name: 'xxx',
//   age: 18,
// }

// console.log(isEqual(obj1, obj2))

// const obj1 = {
//   a: undefined
// }

// const obj2 = {
// }

// console.log(isEqual(obj1, obj2))

// function isEqual(obj1, obj2) {
//   const obj1Str = JSON.stringify(obj1)
//   const obj2Str = JSON.stringify({...obj1, ...obj2})
//   console.log('obj1Str :>> ', obj1Str);
//   console.log('obj2Str :>> ', obj2Str);
//   return obj1Str === obj2Str
// }

// const obj1 = {
//   name: 'xxx',
//   age: 18,
// }

// const obj2 = {
//   age: 18,
//   name: 'xxx'
// }

// console.log(isEqual(obj1, obj2))

// const obj1 = {
//   name: 'xxx',
//   age: 18,
// }

// const obj2 = {
//   age: 18,
//   name: 'xxx'
// }

// console.log(isEqual(obj1, obj2))

// function isEqual(obj1, obj2) {
//   const obj1Keys = Object.keys(obj1)
//   const obj2Keys = Object.keys(obj2)

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false
//     }
//   }

//   return true
// }

// const obj1 = {
//   name: 'xxx',
//   age: 18,
//   a: undefined
// }

// const obj2 = {
//   age: 18,
//   name: 'xxx',
//   a: undefined
// }

// const obj1 = {
//   a: {
//     b: 1
//   }
// }

// const obj2 = {
//   a: {
//     b: 1
//   }
// }

// console.log(isEqual(obj1, obj2))

// function isEqual(obj1, obj2) {
//   const obj1Keys = Object.keys(obj1)
//   const obj2Keys = Object.keys(obj2)

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== null && typeof obj1[key] === 'object') {
//       if (!isEqual(obj1[key], obj2[key])) {
//         return false
//       }
//     } else {
//       if (obj1[key] !== obj2[key]) {
//         return false
//       }
//     }
//   }

//   return true
// }

// const obj1 = {
//   a: {
//     a1: {
//       a2: {
//         a3: 1
//       }
//     }
//   },
//   b: 1
// }

// const obj2 = {
//   a: {
//     a1: {
//       a2: {
//         a3: 1
//       }
//     }
//   },
//   b: 1
// }

// console.log(isEqual(obj1, obj2))

// const obj1 = {
//   a: 'xxx',
//   b: [1,2,3],
//   c: {
//     c1: {
//       c2: [
//         [1,2,3],
//         [2,3,4]
//       ]
//     }
//   }
// }

// const obj2 = {
//   a: 'xxx',
//   b: [1,2,3],
//   c: {
//     c1: {
//       c2: [
//         [1,2,3],
//         [2,3,4]
//       ]
//     }
//   }
// }


// console.log(JSON.stringify(obj1))
// console.log(isEqual(obj1, obj2))


// function isEqual(obj1, obj2) {
//   return helperEqualCompare(obj1, obj2, helperDefaultCompare);
// }

// function helperEqualCompare(val1, val2, compare, func, key, obj1, obj2) {
//   if (
//     val1 &&
//     val2 &&
//     !isNumber(val1) &&
//     !isNumber(val2) &&
//     !isString(val1) &&
//     !isString(val2)
//   ) {
//     if (isRegExp(val1)) {
//       return compare("" + val1, "" + val2, key, obj1, obj2);
//     }
//     if (isDate(val1) || isBoolean(val1)) {
//       return compare(+val1, +val2, key, obj1, obj2);
//     } else {
//       let result, val1Keys, val2Keys;
//       let isObj1Arr = isArray(val1);
//       let isObj2Arr = isArray(val2);
//       if (
//         isObj1Arr || isObj2Arr
//           ? isObj1Arr && isObj2Arr
//           : val1.constructor === val2.constructor
//       ) {
//         val1Keys = Object.keys(val1);
//         val2Keys = Object.keys(val2);
//         if (func) {
//           result = func(val1, val2, key);
//         }
//         if (val1Keys.length === val2Keys.length) {
//           return isUndefined(result)
//             ? val1Keys.every(function (key, index) {
//                 return (
//                   key === val2Keys[index] &&
//                   helperEqualCompare(
//                     val1[key],
//                     val2[val2Keys[index]],
//                     compare,
//                     func,
//                     isObj1Arr || isObj2Arr ? index : key,
//                     val1,
//                     val2
//                   )
//                 );
//               })
//             : !!result;
//         }
//         return false;
//       }
//     }
//   }
//   return compare(val1, val2, key, obj1, obj2);
// }

// // Object.is
// function helperDefaultCompare(val1, val2) {
//   if (val1 === val2) {
//     return val1 !== 0 || 1 / val1 === 1 / val2;
//   } else {
//     return val1 !== val1 && val2 !== val2;
//   }
// }

// function getType(target) {
//   const type = typeof target;
//   if (type !== "object") {
//     return type;
//   }

//   return Object.prototype.toString
//     .call(target)
//     .replace(/^\[object (\S+)\]$/, "$1")
//     .toLocaleLowerCase();
// }

// function isDate(target) {
//   return getType(target) === "date";
// }

// function isBoolean(target) {
//   return getType(target) === "boolean";
// }

// function isArray(target) {
//   return getType(target) === "array";
// }

// function isUndefined(target) {
//   return getType(target) === "undefined";
// }

// function isNumber(target) {
//   return getType(target) === "number";
// }

// function isString(target) {
//   return getType(target) === "string";
// }

// function isRegExp(target) {
//   return getType(target) === "regexp";
// }


// const obj1 = {
//   a: 1,
//   b: {
//     b1: {
//       b2: [
//         [1,2,3],
//         [2,3,4]
//       ]
//     }
//   },
//   c: /ccc/,
//   d: new Date(2022-7-7),
//   e: undefined,
//   f: 
// }

// const obj2 = {
//   a: 1,
//   b: {
//     b1: {
//       b2: [
//         [1,2,3],
//         [2,3,4]
//       ]
//     }
//   },
//   c: /ccc/,
//   d: new Date(2022-7-7),
//   e: undefined
// }

// console.log(isEqual(obj1, obj2))


function isEqual(a, b, aStack = [], bStack = []) {
  // 处理 0 和 -0，之前介绍 Object.is 时学过
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // 必须使用 ===，因为 null == undefined
  if (a == null || b == null) return a === b;
  // 获取值的类型
  let className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // 字符串、数字、正则表达式、日期和布尔值按值进行比较。
    case '[object RegExp]':
    // 正则表达式转为字符串以进行比较，'' + /a/i === '/a/i'
    case '[object String]':
      // 基本类型和其对应的包装类型是等价的，比如 '5' 和 new String('5')
      return '' + a === '' + b;
    case '[object Number]':
      // 处理 NaN，之前介绍 Object.is 时学过
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // 将日期和布尔运算转换为数字原始值。
      // 日期是通过它们的毫秒表示法来比较的。
      // 请注意，无效的日期与毫秒表示的 "NaN "是不相等的。
      return +a === +b;
  }

  let areArrays = className === '[object Array]';
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // 具有不同构造函数的对象是不等价的。
    let aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor &&
      typeof bCtor === 'function' && bCtor instanceof bCtor)
      && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }

  // 使用两个栈来处理循环引用递归爆栈的情况，之前讲深拷贝时讲过
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a) return bStack[length] === b;
  }

  // 将第一个对象添加到所遍历的对象栈中
  aStack.push(a);
  bStack.push(b);

  // 递归地比较数组
  if (areArrays) {
    // 如果长度都不一致，就不需要后续的递归处理了，直接返回 false
    length = a.length;
    if (length !== b.length) return false;
    // 深度比较
    while (length--) {
      if (!isEqual(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // 递归地比较对象
    let keys = Object.keys(a), key;
    length = keys.length;
    // 确保两个对象包含相同数量的属性，然后再进行深层平等的比较
    if (Object.keys(b).length !== length) return false;
    while (length--) {
      // 深度比较每个成员
      key = keys[length];
      if (!(key in b && isEqual(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // 从遍历的对象栈中删除第一个对象
  aStack.pop();
  bStack.pop();
  return true;
};

const obj1 = {
  a: NaN,
  b: {
    b1: {
      b2: [
        [1,2,3],
        [2,3,4]
      ]
    }
  },
  c: /ccc/,
  d: new Date(2022-7-7),
  e: undefined,
  f: -0
}

const obj2 = {
  a: NaN,
  b: {
    b1: {
      b2: [
        [1,2,3],
        [2,3,4]
      ]
    }
  },
  c: /ccc/,
  d: new Date(2022-7-7),
  e: undefined,
  f: -0
}

// 循环引用
obj1.obj = obj1
obj2.obj = obj2

console.log(isEqual(obj1, obj2))

// const obj1 = {
//   a: -0
// }

// const obj2 = {
//   a: 0
// }

// console.log(isEqual(obj1, obj2)) // false