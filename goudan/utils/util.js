const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const $get = (url,data) => {
  // 可能有耗时的事情
  const p = new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      header:{'Content-Type':'json'},
      success:resolve,
      fail:reject
    })
    // 缺点?
    // 多个url需要请求 
    // wx.request({
    //   url,
    //   success:(data1)=>{
    //     wx.request({
    //       url,
    //       success:(data2)=>{
    //         wx.request({
    //           url,
    //           success:(data3)=>{
    //             ...
    //           }
    //         })
    //       }
    //     })
    //   }
    //   // 回调地狱
    // })
  })
  return p;
}
// $get().then()
module.exports = {
  formatTime: formatTime,
  $get : $get
}
