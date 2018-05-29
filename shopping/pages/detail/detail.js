// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    addr:''
  },
  onLoad:function(){
    var that = this;
    wx.getStorage({
      key: 'saveInfo',
      success: function(res){
        that.setData({
          name:res.data.name,
          tel:res.data.tel,
          addr:res.data.address
        })
      }
    })
  }

})