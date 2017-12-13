var request = require("../../../utils/request.js")
const requestUrl = "/api/corps?id="

Page({

  data: {
    list: [],
  },
  onLoad: function (option) {
    let that = this;
    request.getData(requestUrl + option.corpId)
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