// pages/address/address.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    test: {
      name:'',
      tel: '',
      address: ''
    },
    temp: {}
  },
  save(){
     wx.setStorage({
       key:'saveInfo',
       data: this.data.temp,
       success:function(res){
        wx.navigateTo({
          url: '../detail/detail'
        })
       }
     })
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getName(e) {
    // console.log(e)
    var name = e.detail.value.trim();
    var test = this.data.test;
    test.name=name;
    var temp = this.data.temp;
    Object.assign(temp,test);
    this.setData({
      temp
    })
    console.log(this.data.temp)
    // console.log(this.data.name)
  },
  getTel(e) {
    var tel = e.detail.value.trim();
    var test = this.data.test;
    test.tel=tel;
    var temp = this.data.temp;
    Object.assign(temp,test);
    this.setData({
      temp
    })
    console.log(this.data.temp)
  },
  getAddr(e) {
    var address = e.detail.value.trim();
    var test = this.data.test;
    test.address=address;
    var temp = this.data.temp;
    Object.assign(temp,test);
    this.setData({
      temp
    })
    console.log(this.data.temp)
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