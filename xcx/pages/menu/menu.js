// pages/menu/menu.js
const MENU_WIDTH_SCALE = 0.82;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ui: {
      menuWidth: 0,
      windowWidth: 0,
      offsetLeft: 0,
      tStart: true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      // sync 同步 阻塞
      let res = wx.getSystemInfoSync();
      this.windowWidth = res.windowWidth;
      this.data.ui.menuWidth = this.windowWidth*MENU_WIDTH_SCALE;
      this.data.ui.windowWidth = this.windowWidth;
      this.data.ui.offsetLeft = 0;
      console.log(this.data.ui);
      this.setData({
        ui:this.data.ui
      })
    }catch (e) {

    }
  },
  handlerAvatarTap(e) {
      let {ui} = this.data;
      // 抽屉式菜单没出来的时候
      if(ui.offsetLeft == 0) {
        ui.offsetLeft = ui.menuWidth;
        this.setData({
          ui:ui
        })
      }
  },
  handlerStart(e) {
    // 开始的点 设置了起始点的坐标
    let {clientX,clientY} = e.touches[0];
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.tapStartTime = e.timeStamp;
    this.startX = clientX;
    this.data.ui.tStart = true;
    this.setData({
      ui:this.data.ui
    })
  },
  // 执行多次
  handlerMove(e) {
    let {clientX} = e.touches[0];
    let {ui} = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    ui.offsetLeft -= offsetX;
    if(ui.offsetLeft <= 0) {
      ui.offsetLeft = 0;
    }else if(ui.offsetLeft >= ui.menuWidth){
      ui.offsetLeft = ui.menuWidth;
    }
  },
  handlerCancel(e) {

  },
  handlerEnd(e) {
    // 结束的点
    this.data.ui.tStart = false;
    this.setData({ui: this.data.ui})
    let {ui} = this.data;
    let {clientX, clientY} = e.changedTouches[0];
    let endTime = e.timeStamp;
    //快速滑动
    if(endTime - this.tapStartTime <= FAST_SPEED_SECOND) {
      //向左
      if(this.tapStartX - clientX > FAST_SPEED_DISTANCE) {
        ui.offsetLeft = 0;
      } else if(this.tapStartX - clientX < -FAST_SPEED_DISTANCE && Math.abs(this.tapStartY - clientY) < FAST_SPEED_EFF_Y) {
        ui.offsetLeft = ui.menuWidth;
      } else {
        if(ui.offsetLeft >= ui.menuWidth/2){
          ui.offsetLeft = ui.menuWidth;
        } else {
          ui.offsetLeft = 0;
        }
      }
    } else {
      if(ui.offsetLeft >= ui.menuWidth/2){
        ui.offsetLeft = ui.menuWidth;
      } else {
        ui.offsetLeft = 0;
      }
    }
    this.setData({ui: ui})
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