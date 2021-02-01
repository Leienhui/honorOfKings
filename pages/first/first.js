Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    heroName:['法师','坦克','辅助','射手','刺客','战士'],
    nowType:'',
    a:1
  },
  onReady(){
    wx.request({
      url: 'http://www.aiqianduan.com:56506/wzry',
      success:(data)=>{
        // console.log(data.data)
        this.setData({
          arr:data.data
        })
      }
    })
  },
  changeRadio(e){
    this.setData({
      nowType:e.detail.value,
    })
    console.log(this.data.nowType)
  },
  add(){
    this.setData({
      a:this.data.a+1
    })
  },
  sub(){
    this.setData({
      a:this.data.a-1
    })
  }
})