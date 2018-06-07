Page({
  data: {
    isLike: true,
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