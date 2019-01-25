// 状态信息文件

// 默认城市信息
let defaultCity = '上海'

// 为了防止浏览器关闭缓存功能，使用try..catch获取本地存储的城市信息
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

// 导出默认状态信息
export default {
  city: defaultCity
}
