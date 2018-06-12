Page({
  data: {
    isLike: true,
    text:'请选择 颜色 尺码',
    // banner
    imgUrls: [
      "//t00img.yangkeduo.com/t11img/images/2018-05-29/0c7bc4910fdea51b47dbc34ed035513f.jpeg",
      "//t00img.yangkeduo.com/t08img/images/2018-05-29/d906cc85cccc7ea2a588fa772205b179.jpeg",
      "//t00img.yangkeduo.com/t01img/images/2018-05-29/9254f82ee10c8ac46bbdc1f29ae10977.jpeg",
      "//t00img.yangkeduo.com/t07img/images/2018-05-29/f8b28dfb095107805b84da4c8c1ba6d5.jpeg"
    ],
    indicatorDots: false, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    chooseSize:false,
    animationData:{},
    mode:{},
    price: '69',
    title:'夏季运动裤女韩版原宿风潮薄款宽松超火的ins束脚裤',
    bodyList: [
      {
        id: '1',
        title: '"M"'
      },{
        id: '2',
        title: '"L"'
      },{
        id: '3',
        title: '"XL"'
      },
    ],
    colorList: [
      {
        id: '1',
        title: '"粉色"'
      },{
        id: '2',
        title: '"黑色"'
      },{
        id: '3',
        title: '"棕色"'
      },
    ],
    activeIndex:'',
    currentIndex:'',
    num: 1,
    color: 'rgb(155, 125, 125)',
    src: '//t00img.yangkeduo.com/t04img/images/2018-05-30/9334d2c1d3bee52881ba883ede24613b.jpeg'
  },
  selectColor(e) {
    var id = e.currentTarget.id
    this.setData({
      activeIndex: id,
      // text: "已选择："+ '"'+this.data.colorList[id].title+ '"',
    });
    this.select_item();
  },
  selectSize(e) {
    var id = e.currentTarget.id
    this.setData({
      currentIndex: id,
      // text: "已选择："+ '"' +this.data.bodyList[id].title + '"',
    });
    this.select_item();
  },
  minus() {
    var color = (this.data.num <= 1)?'rgb(155, 125, 125)':'red';
    var num = (this.data.num <= 1)?this.data.num:this.data.num-1;
    // console.log(color,num)
    this.setData({
      color: color,
      num: num
    })
  },
  add() {
    var color = (this.data.num <= 1)?'rgb(155, 125, 125)':'red';
    var num = this.data.num + 1;
    this.setData({
      color: color,
      num: num
    })
  },
  select_item(){
    var color = this.data.activeIndex?this.data.colorList[this.data.activeIndex].title:'';
    var size = this.data.currentIndex?this.data.bodyList[this.data.currentIndex].title:'';
    // console.log(color,size);
    var text =  `已选择：${color}  ${size}`;
    this.setData({
      text: text
    });
  },
  addToCart() {
    var color='';
    this.data.activeIndex == '' ? (wx.showModal({
      content: '请选择颜色',  
      success: function(res) {}  
  }) ): color = this.data.colorList[this.data.activeIndex].title;
  // console.log(color);
    var size='';
    this.data.currentIndex == '' ? (wx.showModal({
      content: '请选择尺码',  
      success: function(res) {}  
  }) ): size = this.data.bodyList[this.data.currentIndex].title;
  // console.log(size)
  var num = this.data.num;
  var text = `已选择：  ${color}  ${size}`
  var mode = {
    num: num,
    text:text,
    price:this.data.price,
    title:this.data.title,
    src:this.data.src,
    selected:false
  }
  this.setData({
    mode:mode
  })
  // console.log(mode)
  color == '' || size == ''?'':
  wx.setStorage({
    key: 'goods',
    data: this.data.mode,
    success: function(res){
      wx.showToast({  
        title: '加入购物车成功',  
        icon: 'success',  
        duration: 2000  
      }),
      wx.navigateTo({
        url: '/pages/cart/cart'
      })
    }
    
  });
  // console.log(this.data.mode)
  this.hideModal()
  },
  addCart() {
    var that = this;
    var animation = wx.createAnimation({
      duration:500,
      timingFunction:'linear'
    })
    that.animation = animation;
    animation.translateY(200).step();
    that.setData({
      animationData:animation.export(),
      chooseSize:true
    })
    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationData:animation.export()
      })
    },200)
  },
  hideModal() {
    var that = this;
    var animation = wx.createAnimation({
      duration:1000,
      timingFunction:'linear'
    })
    that.animation = animation;
    animation.translateY(200).step();
    that.setData({
      animationData:animation.export()
    })
    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationData:animation.export(),
        chooseSize:false
      })
    },200)
  },
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})