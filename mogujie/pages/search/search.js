// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:'搜索',
    input: '',
    clothes: [
      {
        id: '1',
        url:'/pages/goods/goods',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180522_51j8l76da5ibee4edilb39dd18g2b_640x960.jpg_300x9999.v1c7E.webp',
        name: '露肩V领雪纺衫',
        price: '20.89'
      },
      {
        id: '2',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180522_1lgke87k9l76ijdb0c91deh4j1ke1_640x960.jpg_300x9999.v1c7E.webp',
        name: '印花T恤',
        price: '60.92'
      },
      {
        id: '3',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180520_7ej2ghf3655ke5e1917ljg6fdegad_640x960.jpg_300x9999.v1c7E.webp',
        name: '吊带T恤',
        price: '72.98'
      },
      {
        id: '4',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180509_58hc1j80c377454eef083efdl2llf_640x960.jpg_300x9999.v1c7E.webp',
        name: '气质网红女神T恤',
        price: '65.69'
      },
      {
        id: '5',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180514_7h75e4ek2ikj93c7legdjea2e4hf1_640x961.jpg_300x9999.v1c7E.webp',
        name: '休闲阔腿裤',
        price: '59.99'
      },
      {
        id: '6',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180516_0ejj3d765j6770cfa13a30d92fkda_640x960.jpg_300x9999.v1c7E.webp',
        name: '高腰半身裙',
        price: '73.39'
      },
      {
        id: '7',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180514_6eb398hfh7bg2ala691gjai791937_640x860.jpg_300x9999.v1c7E.webp',
        name: '雪纺波点连衣裙',
        price: '69.89'
      },
      {
        id: '8',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180518_3i3c87fi7e5891e3jhaib7kgi458l_640x960.jpg_300x9999.v1c7E.webp',
        name: '高腰雪纺两件套',
        price: '87.69'
      },
      {
        id: '1',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180522_51j8l76da5ibee4edilb39dd18g2b_640x960.jpg_300x9999.v1c7E.webp',
        name: '露肩V领雪纺衫',
        price: '20.89'
      },
      {
        id: '2',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180522_1lgke87k9l76ijdb0c91deh4j1ke1_640x960.jpg_300x9999.v1c7E.webp',
        name: '印花T恤',
        price: '60.92'
      },
      {
        id: '3',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180520_7ej2ghf3655ke5e1917ljg6fdegad_640x960.jpg_300x9999.v1c7E.webp',
        name: '吊带T恤',
        price: '72.98'
      },
      {
        id: '4',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180509_58hc1j80c377454eef083efdl2llf_640x960.jpg_300x9999.v1c7E.webp',
        name: '气质网红女神T恤',
        price: '65.69'
      },
      {
        id: '5',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180514_7h75e4ek2ikj93c7legdjea2e4hf1_640x961.jpg_300x9999.v1c7E.webp',
        name: '休闲阔腿裤',
        price: '59.99'
      },
      {
        id: '6',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180516_0ejj3d765j6770cfa13a30d92fkda_640x960.jpg_300x9999.v1c7E.webp',
        name: '高腰半身裙',
        price: '73.39'
      },
      {
        id: '7',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180514_6eb398hfh7bg2ala691gjai791937_640x860.jpg_300x9999.v1c7E.webp',
        name: '雪纺波点连衣裙',
        price: '69.89'
      },
      {
        id: '8',
        src: 'http://s3.mogucdn.com/mlcdn/c45406/180518_3i3c87fi7e5891e3jhaib7kgi458l_640x960.jpg_300x9999.v1c7E.webp',
        name: '高腰雪纺两件套',
        price: '87.69'
      }
    ],
    searchList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  search: function(e) {
    var value = e.detail.value.trim();
    if(value) {
      this.setData({
        search:'取消'
      })
    } else {
      this.setData({
        search:'搜索'
      })
    }
    if(value != '') {
      let array = [];
      this.data.clothes.forEach(item => {
        // console.log(item.name.indexOf(value)==-1)
        item.name.indexOf(value)==-1?'':array.push(item)
      });
      this.setData({searchList: array})
    }
  },
  inputSearch: function() {
    var search = this.data.search;
    var input = this.data.input;
    if(search == '搜索') {

    } else if(search == '取消') {
      this.setData({
        input:''
      })
    }
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