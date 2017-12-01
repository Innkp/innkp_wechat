Page({
  data: { nickName: '' },
  formSubmit: function (e) {
    wx.showModal({
      content: "确定要创建吗？",
      showCancel: true,
      confirmText: "确定",
      success: function (res) {
        if (res.confirm) {
          var that = this;
          var formData = e.detail.value;
          wx.request({
            url: 'http://118.89.192.65:8080/api/createcorps',
            data: formData,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function (res) {
              console.log(res.data)
              wx.navigateBack()
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件');
  },
  onLoad: function (option) {
    let that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        // var nickName = userInfo.nickName
        // var avatarUrl = userInfo.avatarUrl
        // var gender = userInfo.gender //性别 0：未知、1：男、2：女
        // var province = userInfo.province
        // var city = userInfo.city
        // var country = userInfo.country
        that.setData({
          nickName: userInfo.nickName
        })
      }
    })
  },


}) 