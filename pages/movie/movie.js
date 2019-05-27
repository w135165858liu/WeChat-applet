var { coverStarsToArray, formatData, getMovieListData } = require('../../util/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var _this=this;
    getMovieListData('http://t.yushu.im/v2/movie/in_theaters?start=0&count=3',function(data){
      _this.setData({
        inTheaters:data,
        setInTheatersTag:'正在热映',
        inTheatersTagType:'inTheaters'
      })
    });

    getMovieListData('http://t.yushu.im/v2/movie/coming_soon?start=0&count=3', function (data) {
      _this.setData({
        comingSoon: data,
        setComingSoonTag: '即将热映',
        comingSoonTagType:'comingSoon'
      })
    });

    getMovieListData('http://t.yushu.im/v2/movie/top250?start=0&count=3', function (data) {
      _this.setData({
        top250: data,
        setTop250Tag: '豆瓣Top250',
        top250TagType:'top250'
      })
    });
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

  },
  /**
   * 点击更多
   */
  tapMore:function(event){
    // console.log(event);
    var tagType=event.currentTarget.dataset.tagType;
    wx.navigateTo({
      url: './movie-more/movie-more?tagType=' + tagType
    })
  }
})