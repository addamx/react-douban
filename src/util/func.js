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


var debounce = function (idle, action) {
  var last
  console.log(last)
  return function () {
    var ctx = this, args = arguments
    clearTimeout(last)
    last = setTimeout(function () {
      action.apply(ctx, args)
    }, idle)
  }
}

export { unique, debounce }
