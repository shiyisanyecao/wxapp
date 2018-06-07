//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiper:[
      {
        id:'1',
        url:'/pages/goods/goods',
        src:'https://s10.mogucdn.com/mlcdn/c45406/180528_7eadff538c03lb7fckbbheddcl9gk_768x440.jpg'
      },
      {
        id:'2',
        url:'/pages/goods/goods',
        src:'https://s10.mogucdn.com/mlcdn/c45406/180529_8d8598dc1l9j6ff9ahadl5lcd8d1a_768x440.jpg'
      },
      {
        id:'3',
        url:'/pages/goods/goods',
        src:'https://s10.mogucdn.com/mlcdn/c45406/180530_7k8hakbe8c64db4ce4gaf9gf9bg5j_768x440.jpg'
      }
    ],
    circle:[
      {
        id:'1',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180422_068a2hg6l9dai538ak0elek1dgaf6_1000x1500.jpg_200x200.v1cAC.webp',
        title:'潮流背包'
      },
      {
        id:'2',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180330_6k0ckfl20ii5b497bh1078d5hbl3a_83x83.png_100x100.v1cAC.webp',
        title:'春日美裙'
      },
      {
        id:'3',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180402_8h1aj8i656bj8f34ac67i7il315ic_83x83.png_100x100.v1cAC.webp',
        title:'春季衬衫'
      },
      {
        id:'4',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180330_7j46ki0gid8kd0kekdadile917ekh_83x83.png_100x100.v1cAC.webp',
        title:'韩版卫衣'
      },
      {
        id:'5',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180330_4ejgl46lk37hhei8540ef468ab3bl_83x83.png_100x100.v1cAC.webp',
        title:'热卖T恤'
      },
      {
        id:'6',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180421_1fd56aa1je55a6bekji4i3j7k988k_640x960.jpg_200x200.v1cAC.webp',
        title:'潮流美鞋'
      },
      {
        id:'7',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180403_31ifk8921jbbl0fkjg615jc6bbhdj_640x960.jpg_200x200.v1cAC.webp',
        title:'个性护肤'
      },
      {
        id:'8',
        url:'/pages/detail/detail',
        src:'http://s11.mogucdn.com/mlcdn/c45406/170420_3kc91kaacg577i511i1395j62a9h3_640x960.jpg_200x200.v1cAC.webp',
        title:'潮流彩妆'
      },
      {
        id:'9',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/180418_1f0i82dcbh8a9cfki01egj9c9h4hk_640x960.jpg_200x200.v1cAC.webp',
        title:'精品美饰'
      },
      {
        id:'10',
        url:'/pages/detail/detail',
        src:'http://s3.mogucdn.com/mlcdn/c45406/170510_40f204bef7h4f2aj8ag1201662i1h_640x960.jpg_200x200.v1cAC.webp',
        title:'迷你风扇'
      }
    ],
    clothe:[
      
    ],
    clothes: [
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
    ]
  },
  
})
