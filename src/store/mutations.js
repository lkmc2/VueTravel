// 导出数据转变操作
export default {
  // 用户点击城市（state对象，commit方法传入的参数）
  changeCity (state, city) {
    // 修改state对象中的city数据
    state.city = city

    // 为了防止浏览器关闭缓存功能，使用try..catch设置本地存储的城市信息
    try {
      // 在本地存储中保存city数据
      localStorage.city = city
    } catch (e) { }
  }
}
