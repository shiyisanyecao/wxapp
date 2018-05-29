//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow:false,
    focus:false,
    addText:'',
    lists:[]
  },
  onLoad() {
    if(app.globalData.userInfo) {
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    }
  },
  getUserInfo:function(e){
    console.log(e);
    this.setData({
      hasUserInfo:true,
      userInfo:e.detail.userInfo
    })
    // 存储数据
    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo,
      success: (res)=>{
        this.setData({
        })
      }
    })
    
  },
  addTodo(e) {
    if(!this.data.addText.trim()){
      return;
    }
    // item 都是一个对象 文字只是一部分
    var addT = {
      title:this.data.addText,
      status:'0',
      id:new Date().getTime()
    }
    // var temp = this.data.lists;
    // temp.push(addT);
    const temp = [
      addT,
      ...this.data.lists
    ]
    this.setData({
      lists:temp
    })
    wx.setStorage({
      key: 'lists',
      data: temp,
    });
    wx.showToast({
      title:'添加成功',
      icon:'success',
      duration:1000
    })
    this.addTodoHide();
    // console.log(addT);
    // value
    // list
    // setStorage
  },
  addTodoHide(e){
    this.setData({
      addShow:false,
      focus:false,
      addText:''
    })
  },
  setInput(e){
    this.setData({
      'addText':e.detail.value
    })
  }
})
