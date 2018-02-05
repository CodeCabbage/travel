// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'i am text',
    num: 0,
    array: [{text: 'arrayText'}],
    object: {
      text: 'objectText'
    }
  },

  changeText: function () {
    this.setData({
      text: 'change text'
    })
  },

  changeNum: function(){
    this.setData({
      num: 111
    })
  },

  changeItemInArray: function(){
    this.setData({
      'array[0].text': 'afterArrayData'
    })
  },

  changeItemInObject: function () {
    this.setData({
      'object.text': 'afterObjectData'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})