// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:'搜索',
    input: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  search: function(e) {
    var value = e.detail.value.trim();
    if(value) {
      this.setData({
        search:'取消'
      })
    } else {
      this.setData({
        search:'搜索'
      })
    }
  },
  inputSearch: function() {
    var search = this.data.search;
    var input = this.data.input;
    if(search == '搜索') {

    } else if(search == '取消') {
      this.setData({
        input:''
      })
    }
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