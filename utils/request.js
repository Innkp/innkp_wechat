var innkp_host="https://www.innkp.com"
module.exports.getData = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
  var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  url = innkp_host+url;
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        wx.showToast({
          title: '请检查网络',
          image: "../image/warning.png",
          duration: 2000
        })
      }
    })
  })
}