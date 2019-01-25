// 导出用户触发的动作
export default {
  // 用户点击城市（上下文，动作传入的参数）
  changeCity (ctx, city) {
    // 上下文调用commit方法，触发名为changeCity的mutation（数据转变操作），
    // 并传入用户点击的城市名
    ctx.commit('changeCity', city)
  }
}
