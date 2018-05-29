const app = getApp()

Page({
  data: {
    entity: null
  },
  onLoad(options) {
    console.log(options);
    const id = options.id;
    const entity = app.globalData.stories.filter((item) => {
      return item.id == id
    })
    console.log(entity)
    this.setData({
      entity: entity[0]
    })
    console.log(id)

    wx.setNavigationBarTitle({
      title: this.data.entity.header
    })
  }
})