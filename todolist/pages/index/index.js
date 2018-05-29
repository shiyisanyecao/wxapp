//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  // 数据 对应着
    // 默认的status是1  （全部）
    // setData才能改变status
    // setData 2 （未完成）
    status: 1,
    // 界面状态 全部要被data接管起来
    addShow: true,
    lists:[{
      title:'帮徐加元同学砍价',
      time:'十分钟前',
      status: '1'
    },
    {
      title:'邀请柔柔同学看电影',
      time:'刚刚',
      status: '0'
    }],
    
    addText:''
  },
  curLists:[],
  showStatus: function(e) {
    const status = e.currentTarget.dataset.status;
    console.log(e, status);
    // 不再是dom编程，针对界面状态的编程
    this.setData({
      status: status
    })
  },
  addTodoShow: function(e){
    this.setData({
      addShow: false
    })
  },
  addTodo: function(e){
    const task = {
      // 输入框内容
      title: this.data.addText,
      status:'0',
      data:'刚刚'
    }
    // console.log(task);
    const temp = [...this.data.lists,task];
    this.setData({
      lists:temp,
      addShow:true
    })
    // 看到界面 我们就知道要的数据
    // 看到交互 对数据操作
    // 如何添加新的todo？
    // 页面上多一条任务
    // 显示多少条 由lists决定
    // lists数组的push工作
    // 数据驱动界面 数据变 界面自动更新
    // MVVM Model(数据模型) View (VM视图模型层)
  },
  addTodoHide: function(e){
    this.setData({
      addShow: true
    })
  },
  setInput: function(e){
    // console.log(e.detail.value)
    this.setData({
      addText:e.detail.value
    })
  },
  changeTodo: function(event){
    // 当前点击条目的status要变成success
    // 数据 lists 跟当前条目相关的这一条数据
    // 将status的值更新为 1
    // index 
    const index = event.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item,i)=>{
      // console.log(item,i);
      if(i==index){
        if(item.status == '0'){
          item.status = '1'
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration: 1000
          })
        }else{
          item.status = '0'
          wx.showToast({
            title:'任务打回重做',
            icon:'circle',
            duration: 1000
          })
        }
      }
    })
    this.setData({
      lists:temp
    })
  }
  //事件处理函数
 
})
