function coverStarsToArray(stars){
  var arr =[];
  var num=stars.toString().substring(0,1);
  for(var i=1;i<=5;i++){
    if(i<=num){
      arr.push(1);
    }else{
      arr.push(0);
    }
  }
  return arr;
}
/**
   * 请求数据
   */
function getMovieListData(url, success) {
  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      success(formatData(res.data));
    }
  })
}
/**
 * 筛选数据
 */
function formatData(data) {
  var arr = [];
  for (var i = 0; i < data.subjects.length; i++) {
    arr.push({
      coverImg: data.subjects[i].images.large,
      title: data.subjects[i].title,
      stars: coverStarsToArray(data.subjects[i].rating.stars),
      score: data.subjects[i].rating.average
    })
  }
  return arr;
}

module.exports={
  coverStarsToArray: coverStarsToArray,
  formatData: formatData,
  getMovieListData:getMovieListData
}