// index.js
// 获取应用实例
const app = getApp()
import util from '../../utils/util'
let interval = null
Page({
  data: {
   list:[
     {start: '06:00', remark: '起床', active: true},
     {start: '06:30', remark: '做些适量运动', active: true},
     {start: '07:00', remark: '吃一份有营养的早餐', active: true},
     {start: '09:00', remark: '做价值最高的工作', active: true},
     {start: '11:30', remark: '午餐与水果', active: true},
     {start: '13:00', remark: '午休半小时', active: true},
     {start: '14:00', remark: '安排机械与重复的工作', active: true},
     {start: '16:00', remark: '喝点奶制品', active: true},
     {start: '17:30', remark: '缓慢的食用晚餐', active: true},
     {start: '19:00', remark: '锻炼', active: true},
     {start: '20:30', remark: '每日总结和自我提升', active: true},
     {start: '22:30', remark: '睡觉', active: true},
   ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goClock(){
    wx.navigateTo({
      url: '../clock/index'
    })
  },
  switchChange(e){
    let index = e.currentTarget.dataset.index
    let list = this.data.list
    list[index].active = !list[index].active
    this.setData({
      list
    })
    wx.setStorageSync('list', list)
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    //加载定时器
    interval = setInterval(()=>{
      let time = util.formatTime(new Date())      
      let start = time.substring(11, 16)
      let list = this.data.list
      let clockList = list.filter(item=>(item.active && item.start == start))
      if(clockList.length > 0){
        wx.navigateTo({
          url: '../clock/index',
        })
      }
    }, 1000 * 60)
  },
  onShow(){
    let list = wx.getStorageSync('list')
    if(list){
      this.setData({
        list
      })
    }    
  },
  onHide(){
    // if(interval != null){
    //   clearInterval(interval)
    //   interval = null
    // }   
  },
  onUnload(){
    if(interval != null){
      clearInterval(interval)
      interval = null
    }  
  }
})
