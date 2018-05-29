//index.js
//获取应用实例
import goods from '../../api/goods.js' 
const app = getApp()

Page({
  data: {
    num:1,
    show:false,
    totalNum:0,
    scaleCart:false,
    currentTab:0,
    goods: null
  },
  onLoad(options) {
    const id = options.id || 2;
    let curGoods;
    for(let i = 0 ; i < goods.length; i++) {
      if(goods[i].id === id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(()=>{
      this.setData({
        goods:curGoods
      });
    },1000)
    this.setData({
      goods:curGoods
    });
  },
  switchTab(e) {
    var currentTab = this.data.currentTab;
    console.log(e)
    if(currentTab != e.target.dataset.index) {
      this.setData({
        currentTab: e.target.dataset.index
      })
    }
  },
  bindChange(e) {
    var currentTab = this.data.currentTab;
    this.setData({
      currentTab:e.target.dataset.index
    })
  },
  addCount() {
    let num = this.data.num;
    num ++;
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show:true
    });
    setTimeout(()=>{
      this.setData({
        show:false,
        scaleCart:true
      });
      setTimeout(()=>{
        this.setData({
          scaleCart:false,
          hasCarts:true,
          totalNum:num + total
        })
      },200)
    },300)
  }
})
