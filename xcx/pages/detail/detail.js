// pages/detail/detail.js
import util from '../../utils/index.js';
import config from '../../utils/config';
import WxParser from '../../libs/wxParse/wxParse';
// html 转译成 wxml 的
import HtmlFormater from '../../libs/htmlFormater';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.contentId || 0;
    this.init(id)
  },
  init (id) {
    if (id) {
      this.requestDetail(id)
      .then(data => {
        this.configPageData(data)
      }).then(()=>{
        this.articleRevert();
      })
    }
  },
  articleRevert(){
    let htmlContent = this.data.detailData && this.data.detailData.content;
    console.log(htmlContent);
    WxParser.WxParser('article','html',htmlContent,this,0);
  },
  configPageData(data) {
    this.setData({
      detailData:data.data
    })
    let title = data.detailData.title
    wx.setNacigationBarTitle({
      title:title,
      success:function(res){
        // success
      }
    })
  },
  requestDetail(contentId) {
    return util.request({
      url: 'detail',
      mock: true,
      data: {
        source: 1
      }
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
