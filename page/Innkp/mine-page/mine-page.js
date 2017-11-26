//index.js
//获取应用实例
const app = getApp()
const requestUrl = "http://118.89.192.65:8080/api/videos"
const duration = 2000
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myjson:'hello innkp',
    cover1:"http://118.89.192.65:8080/cover1.jpg"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      url: requestUrl,
      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        var data = result.data;
        self.setData({
          myjson: data
        })
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
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
      confirmText: "确定"
    })
  },
})
