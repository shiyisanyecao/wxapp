// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    bodyList:[
      {
        id:'1',
        title:'女装'
      },{
        id:'2',
        title:'时尚套装'
      },{
        id:'3',
        title:'T恤'
      },{
        id:'4',
        title:'连衣裙'
      },{
        id:'5',
        title:'短裙'
      },{
        id:'6',
        title:'雪纺衫'
      },{
        id:'7',
        title:'休闲裤'
      },{
        id:'8',
        title:'半身裙'
      },{
        id:'9',
        title:'牛仔裤'
      },{
        id:'10',
        title:'衬衫'
      },{
        id:'11',
        title:'背带裤'
      }
    ],
    activeIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  tabClick: function(e) {
    var id = e.currentTarget.id;
    this.setData({
      activeIndex:id,
      current: id
    }) 
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