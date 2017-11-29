Page({  
  data:{},  

  formSubmit: function(e) {  
    console.log(e)  
    var that = this;  
    var formData = e.detail.value;   
    wx.request({  
      url: 'http://118.89.192.65:8080/api/createcorps',  
      data: formData,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' 
      }, 
      method: "POST", 
      success: function(res) {  
        console.log(res.data)  
      }  
    })  
  },  
  formReset: function() {  
    console.log('form发生了reset事件');  
  }  
}) 