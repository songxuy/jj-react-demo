export const getDay = (days) => {
  var now = new Date().getTime()
  var write = new Date(days.replace(/-/g, '/')).getTime()
  var cha = (now - write) / 1000
  var year = Math.floor(cha / 3600 / 24 / 30 / 12)
  var month = Math.floor((cha - year * 3600 * 24 * 30 * 12) / 3600 / 24 / 30)
  var day = Math.floor((cha - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30) / 3600 / 24)
  var hour = Math.floor((cha - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30 - day * 3600 * 24) / 3600)
  var min = Math.floor(
      (cha - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30 - day * 3600 * 24 - hour * 3600) / 60
  )
  var sec = Math.floor(
      cha - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30 - day * 3600 * 24 - hour * 3600 - min * 60
  )
  if (year > 0) {
      return year + '年前'
  } else if (month > 0) {
      return month + '月前'
  } else if (day > 0) {
      return day + '天前'
  } else if (hour > 0) {
      return hour + '小时前'
  } else if (min > 0) {
      return min + '分钟前'
  } else if (sec > 0) {
      return sec + '秒前'
  }
}