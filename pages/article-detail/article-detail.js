var {articles}=require('../../data/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = options.articleId;
    this.data.articleId=articleId;
    //设置文章内容
    var article = articles[articleId]
    this.setData(article)
    /*
      设置收藏
     */
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollented=false;
    if (articlesCollection){
      currentIsCollented = !!articlesCollection[articleId];
    }else{
      var data={};
      data[articleId]=false;
      wx.setStorageSync("articles_collection", data);
    }
    this.setData({
      currentIsCollented: currentIsCollented
    })
    console.log(this.data);
  },
  /**
   * 处理收藏
   */
  tapCollection:function(){
    var articlesCollection = wx.getStorageSync("articles_collection");
    var currentIsCollented = articlesCollection[this.data.articleId];
    // console.log(currentIsCollented);
    //改变storage里面的值
    articlesCollection[this.data.articleId] = !currentIsCollented;
    wx.setStorageSync("articles_collection", articlesCollection);
    //改变页面渲染
    this.setData({
      currentIsCollented: !currentIsCollented
    })

    wx.showToast({
      title: currentIsCollented ? '取消成功' : '收藏成功'
    })
  },
  /**
   * 点击分享事件 
   */
  tapShare:function(){
    var itemList = ['分享到微信', '分享到微博', '分享到QQ']
    wx.showActionSheet({
      itemList: itemList,
      success:function(res){
        // console.log(res.tapIndex);
        wx.showToast({
          title: itemList[res.tapIndex]+'成功'
        })
      }
    })
  },
  /**
   * 点击音乐播放
   */
  tapMusic:function(){
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    
    var isPlayingMusic = !!this.data.isPlayingMusic;
    if (isPlayingMusic){
      backgroundAudioManager.pause();
      this.setData({
        isPlayingMusic:false
      })
    }else{
      backgroundAudioManager.src = this.data.music.src;
      backgroundAudioManager.title = this.data.music.title;
      backgroundAudioManager.coverImgUrl = this.data.music.coverImgUrl;
      backgroundAudioManager.play();
      this.setData({
        isPlayingMusic: true
      });

    }
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