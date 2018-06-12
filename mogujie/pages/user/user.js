// pages/User/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu_id: '3930',
    userInfo: {},
    user:[
      {
        id:'1',
        url:'pages/detail/detail',
        src:'../../image/fukuan.png',
        text:'待付款'
      },
      {
        id:'2',
        url:'pages/detail/detail',
        src:'../../image/shoukuan.png',
        text:'待收款'
      },
      {
        id:'3',
        url:'pages/detail/detail',
        src:'../../image/pingjia.png',
        text:'待评价'
      },
      {
        id:'4',
        url:'pages/detail/detail',
        src:'../../image/all.png',
        text:'全部订单'
      }
    ],
  },
  
  getUserInfo: function() {
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})