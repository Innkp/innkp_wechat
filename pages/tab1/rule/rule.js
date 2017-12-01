// pages/tab1/rule/rule.js
var request = require("../../../utils/request.js")
const requestUrl = "http://118.89.192.65:8080/api/corps?id=6"
Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    let that = this;
    request.getData(requestUrl)
      .then(function (data) {
        that.setData({
          list: data.data.list
        });
        console.log(data);
      }, function (data) {
        console.log("reject");
      });
  },
})