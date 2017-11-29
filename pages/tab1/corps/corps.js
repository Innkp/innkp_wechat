const requestUrl = "http://118.89.192.65:8080/api/corpss?id="
const duration = 2000
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onShow: function (options) {
    console.log('options', options.id)
    // this.makeRequest()
  },
  makeRequest: function () {
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      url: requestUrl,
      data: Date.now(),
      success: function (result) {
        var data = result.data;
        self.setData({
          corps: data
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  },
})