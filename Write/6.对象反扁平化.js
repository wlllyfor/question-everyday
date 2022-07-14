function unflattenObj(obj) {
  let o = {}
  for (let key in obj) {
    transformKey(key, obj[key], o)
  }
  return o
}
//转化key
function transformKey(key,value,head){
 const arr = key.split('.')
 let tmp = head
 for(let i =0;i<arr.length;i++) {
  let key = arr[i]
  let nextKey = arr[i + 1];
  //这里需要判断key 是否包含[]字符串，如果是则是数组结构
  if(/\[.+?\]/g.test(key)){
   //可能是多维数组，匹配数组维度
    let indexs = key.match(/\[(.+?)\]/g);
    //获取数组的key值
    let _key = key.match(/^(.+?)\[/)[1];
    //构造数组需要判断是否已经存在
    tmp[_key] = tmp[_key]?tmp[_key]:[]
    let n = tmp[_key]
     
    //构造完数组对数组里面进行构造
    for(let j=0;j<indexs.length;j++){
      let index = indexs[j].replace(/\[|\]/g, '');
      let nextIndex = indexs[j+1]
      
      //数组包含数组
      if(nextIndex){
       //构造数组需要判断是否已经存在
       
        n[index] = n[index]?n[index]:[]
        //如果还包含数组，将n指针指向下一个数组
        n = n[index]
        
      }else{
       //如果后面还有则构造对象
       if (nextKey) {
        //构造对象需要判断是否已经存在
         n[index] = n[index]?n[index]:{}
         tmp = n[index]
        } else {
         n[index] = value
        }
      }
    }
  } else {
     //不是数组和之前方法保持一致
     if (nextKey) {
       //构造对象需要判断是否已经存在
        tmp[key] = tmp[key]?tmp[key]:{}
        tmp = tmp[key] 
     } else {
        tmp[key] = value
     }
  }

 }
 return head
}

const obj = {
  'a': 1,
  'b[0]': 1,
  'b[1]': 2,
  'b[2].b1': 3,
  'c.c1': 1,
  'c.c2.c3': 2,
  'c.c2.c4.c5': 3
}

console.log(unflattenObj(obj))