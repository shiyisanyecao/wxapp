//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'user-info',
      success: (res)=>{
        // success
        console.log(res);
        this.globalData.userinfo = res.data;
      }
    })
  },
  globalData: {
    userInfo: null
  }
})