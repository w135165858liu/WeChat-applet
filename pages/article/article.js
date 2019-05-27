Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[
      {
        topimg:'/images/view/a1.jpg',
        topdate:'2018-09-20',
        title:'进击的巨人',
        middleimg:'/images/view/a2.jpg',
        middlecontent: "107年前（743年），世界上突然出现了人类的天敌“巨人”。面临着生存危机而残存下来的人类逃到了一个地方，盖起了三重巨大的城墙。人们在这隔绝的环境里享受了一百多年的和平，直到艾伦·耶格尔十岁那年，60米高的“超大型巨人”突然出现，以压倒性的力量破坏城门，其后瞬间消失，凶残的巨人们成群的冲进墙内捕食人类。艾伦亲眼看着人们以及自己的母亲被巨人吞食，怀着对巨人无法形容的憎恨和痛恨，誓言杀死所有巨人。城墙崩坏的两年后，艾伦加入104期训练兵团学习和巨人战斗的技术。在训练兵团的三年，艾伦在同期训练兵里有着其他人无法比拟的强悍精神力。即使亲眼见过地狱也依然勇敢地向巨人挑战的艾伦，如愿以偿加入了向往已久的调查兵团。在他正做着到墙壁的外面去这个梦的时候，毁坏墙壁的超大巨人出现了。",
        footerstart:'/images/view/icon1.jpg',
        startnum:'20',
        footereyes:'/images/view/icon2.png',
        eyesnum:'3000',
        articleId:'0'
      },
      {
        topimg: '/images/view/a1.jpg',
        topdate: '2018-09-20',
        title: '进击的巨人2',
        middleimg: '/images/view/a3.jpg',
        middlecontent: "107年前（743年），世界上突然出现了人类的天敌“巨人”。面临着生存危机而残存下来的人类逃到了一个地方，盖起了三重巨大的城墙。人们在这隔绝的环境里享受了一百多年的和平，直到艾伦·耶格尔十岁那年，60米高的“超大型巨人”突然出现，以压倒性的力量破坏城门，其后瞬间消失，凶残的巨人们成群的冲进墙内捕食人类。艾伦亲眼看着人们以及自己的母亲被巨人吞食，怀着对巨人无法形容的憎恨和痛恨，誓言杀死所有巨人。城墙崩坏的两年后，艾伦加入104期训练兵团学习和巨人战斗的技术。在训练兵团的三年，艾伦在同期训练兵里有着其他人无法比拟的强悍精神力。即使亲眼见过地狱也依然勇敢地向巨人挑战的艾伦，如愿以偿加入了向往已久的调查兵团。在他正做着到墙壁的外面去这个梦的时候，毁坏墙壁的超大巨人出现了。",
        footerstart: '/images/view/icon1.jpg',
        startnum: '20',
        footereyes: '/images/view/icon2.png',
        eyesnum: '3000',
        articleId:1
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (onShow) {
    
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
   * 点击进入详情页
   */
  linkToDetail:function(event){
    var articleId=event.currentTarget.dataset.articleId
    wx.navigateTo({
      url: '../article-detail/article-detail?articleId='+articleId
    })
    // console.log(articleId);
  }
})