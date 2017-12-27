/**
 * 对象(有索引值)/数组去重
 * @param {*} arr
 * @param {索引值} id
 */
const unique = (arr, id = '') => {
  let _uni = [],
    result = []
  arr.map((elm) => {
    let _index = id ? elm[id] : elm
    if (_uni.indexOf(_index) === -1) {
      result.push(elm)
      _uni.push(_index)
    }
  })
  //console.log(result)
  return result
}


const debounce = (idle, action) => {
  let last;
  return function() {
    let ctx = this, args = arguments;
    clearTimeout(last)
    last = setTimeout(() => {
      action.apply(ctx, args)
    }, idle)
  }
}

const getQueryKeys = function(query) {
  let queryObj = new URLSearchParams(query)
  let args = [].slice.call(arguments, 1);
  return args.map((el) => (
    queryObj.get(el)
  )).join(' ')
}



export { unique, debounce, getQueryKeys }
