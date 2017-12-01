// pages/tab1/ranking/ranking.js
var appInstance = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitHidden: true
  },

  //表单验证初始化
  onLoad: function () {
    this.WxValidate = appInstance.WxValidate(
      {
        name: {
          required: true,
          minlength: 2,
          maxlength: 10,
        },
        mobile: {
          required: true,
          tel: true,
        },
        company: {
          required: true,
          minlength: 2,
          maxlength: 100,
        },
        client: {
          required: true,
          minlength: 2,
          maxlength: 100,
        }
      }
      , {
        name: {
          required: '请填写您的姓名姓名',
        },
        mobile: {
          required: '请填写您的手机号',
        },
        company: {
          required: '请输入公司名称',
        },
        client: {
          required: '请输入绑定客户',
        }
      }
    )
  },
  //表单提交
  formSubmit: function (e) {
    //提交错误描述
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      // `${error.param} : ${error.msg} `
      wx.showToast({
        title: `${error.msg} `,
        image: '/pages/images/error.png',
        duration: 2000
      })
      return false
    }
    this.setData({ submitHidden: false })
    var that = this
    //提交
    wx.request({
      url: '',
      data: {
        Realname: e.detail.value.name,
        Gender: e.detail.value.gender,
        Mobile: e.detail.value.mobile,
        Company: e.detail.value.company,
        client: e.detail.value.client,
        Identity: appInstance.userState.identity
      },
      method: 'POST',
      success: function (requestRes) {
        that.setData({ submitHidden: true })
        appInstance.userState.status = 0
        wx.navigateBack({
          delta: 1
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })
  }
})