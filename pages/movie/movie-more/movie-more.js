var { coverStarsToArray, formatData, getMovieListData } = require('../../../util/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl: '',
    totalCount: 0,
    totalMovies: [],
    isEnd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var _this=this;
    var title='';
    var requestUrl=''
    if (options.tagType == 'inTheaters'){
      requestUrl ='http://t.yushu.im/v2/movie/in_theaters';
      title='即将上映';
    } else if (options.tagType == 'comingSoon'){
      requestUrl = 'http://t.yushu.im/v2/movie/coming_soon';
      title = '正在热映';
    } else if (options.tagType == 'top250'){
      requestUrl = 'http://t.yushu.im/v2/movie/top250';
      title = '豆瓣Top250';
    }

    wx.setNavigationBarTitle({
      title: title
    });
    this.data.requestUrl = requestUrl;  
    getMovieListData(requestUrl,this.handleMovieList);
    
  },
  handleMovieList: function (data) {
    wx.hideNavigationBarLoading();
    if (data.length == 0) {
      this.data.isEnd = true;
      wx.showToast({
        title: '已经没有数据了',
      })
      return;
    }
    this.data.totalCount += data.length;
    this.data.totalMovies = this.data.totalMovies.concat(data);
    this.setData({
      movies: this.data.totalMovies
    })
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
    var _this = this;
    wx.showNavigationBarLoading();
    getMovieListData(this.data.requestUrl, function (data) {
      _this.setData({
        movies: data
      })
      wx.hideNavigationBarLoading();
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.isEnd) {
      wx.showToast({
        title: '已经没有数据了',
      })
      return;
    }
    var _this = this;
    var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
    wx.showNavigationBarLoading();
    getMovieListData(nextUrl, this.handleMovieList)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})