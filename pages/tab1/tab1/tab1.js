
const app = getApp()
const requestUrl = "http://118.89.192.65:8080/api/corpss"
const joinCorpsUrl = "http://118.89.192.65:8080/api/joincorps?id="
const duration = 2000
Page({
  data: {
    list: [],
    cover1: "http://118.89.192.65:8080/cover1.jpg"
  },
  onShow: function () {
    this.makeRequest()
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showInvitationDialog: function () {
    wx.showModal({
      title: "弹窗标题",
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      showCancel: true,
      confirmText: "确定",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  makeRequest: function () {
    var self = this
    // self.setData({
    //   loading: true
    // })
    wx.request({
      url: requestUrl,
      data: Date.now(),
      success: function (result) {
        var data = result.data;
        self.setData({
          list: data.list
        })
        // self.setData({
        //   loading: false
        // })
        console.log('request success', result)
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        // self.setData({
        //   loading: false
        // })
      }
    })
  },

  onPullDownRefresh: function () {
    this.makeRequest()
  },

  onReachBottom: function () {
    this.makeRequest()
  },
  gotoRulePage: function () {
    wx.navigateTo({ url: '../rule/rule' })
  },
  gotoRankingPage: function () {
    wx.navigateTo({ url: '../ranking/ranking' })
  },
  gotoCorpsPage: function (event) {
    console.log(event);
    var id = event.currentTarget.id
    wx.navigateTo({ url: '../corps/corps?corpId=' + id })
  },
  gotoCreateCorpsPage: function () {
    wx.navigateTo({ url: '../corps-create/corps-create' })
  },
  joinCorpsPage: function (event) {
    console.log(event);
    var corpsId = event.currentTarget.id
    wx.showModal({
      content: "是否要加入此海盗船？",
      showCancel: true,
      confirmText: "是的",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确认')
          wx.request({
            url: joinCorpsUrl + corpsId,
            data: Date.now(),
            success: function (result) {
              console.log('request success', result)
              wx.navigateTo({ url: '../corps/corps?corpId=' + corpsId })
            },
            fail: function ({ errMsg }) {
              console.log('request fail', errMsg)
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
})
