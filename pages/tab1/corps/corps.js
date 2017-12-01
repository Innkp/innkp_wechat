const app = getApp()
const requestUrl = "http://118.89.192.65:8080/api/corps?id="
const duration = 2000
Page({

  data: {
    list: [],
  },
  onLoad: function (option) {
    this.makeRequest(option.corpId)
    let that = this;
    request.getData(requestUrl + corpId)
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