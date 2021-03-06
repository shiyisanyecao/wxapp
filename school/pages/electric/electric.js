// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amounts:[{
      value:50,checked:false
    },{
      value:100,checked:false
    },{
      value:150,checked:false
    },{
      value:200,checked:false
    },{
      value:250,checked:false
    }],
    btn_disabled:true,
    dorm:{
      name:'默认寝室',
      tip:{
        content:'研1304',
        color:'green'
      }
    }
  },
  bindAmountChange:function(e) {
    var strValue = e.detail.value;
    var amounts = this.data.amounts;
    for(let amount of amounts) {
      amount.checked = amount.value === parseInt(strValue);
    }
    this.setData({
      amounts,
      btn_disabled:false
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