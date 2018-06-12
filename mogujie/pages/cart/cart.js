// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    cart:[],
    totalPrice: 0,
    selectAllStatus: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var carts = [];
    wx.getStorage({
      key: 'goods',
      success: function(res){
        // console.log(res.data)
        carts.push(res.data)
        that.setData({
          hasList:true,
          cart:carts
        })
        console.log(this.data.cart)
        // console.log(that.data.goods)
      }
    });
    // console.log(this.data.goods)
  },
  onReady: function () {
  },
  minus: function(e) {
    let cart = this.data.cart;
    let id = e.currentTarget.dataset.index;
    // console.log(id)
    cart[id].num == 1 ? wx.showModal({
      content: '数量为1 不能再减了',  
      success: function(res) {}
    }):cart[id].num = cart[id].num - 1;
    this.setData({
      cart
    })
    this.getTotalPrice();
  },
  add:function(e) {
    let cart = this.data.cart;
    let id = e.currentTarget.dataset.index;
    cart[id].num ++;
    this.setData({
      cart
    })
    this.getTotalPrice();
  },
  select: function(e) {
    var id = e.currentTarget.dataset.index;
    // console.log(this.data.cart[id].selected)
    let cart = this.data.cart;
    let selected = this.data.cart[id].selected;
    this.data.cart[id].selected = !selected;
    // console.log(this.data.cart[id].selected)
    var selectAllStatus = this.data.selectAllStatus;
    let count = 0;
    for(let i = 0; i < cart.length; i++) {
      if(this.data.cart[i].selected) {
        count ++;
      }
    }
    if(count == cart.length) {
      selectAllStatus = true;
    } else {
      selectAllStatus = false;
    }
    this.setData({
      cart,
      selectAllStatus
    })
    this.getTotalPrice();
  },
  getTotalPrice() {
    let cart = this.data.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
      if(cart[i].selected) {
        total += cart[i].price * cart[i].num;
      }
    }
    this.setData({
      totalPrice: total
    })
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