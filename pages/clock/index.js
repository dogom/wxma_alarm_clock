// pages/clock/index.js
let audioCtx = null
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
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        audioCtx = wx.createInnerAudioContext()
       
        audioCtx.src = 'https://firstossdata.oss-cn-shanghai.aliyuncs.com/music/%E5%8D%A1%E5%86%9C-%E6%9C%A8%E5%A5%87%E9%93%83%E5%A3%B0-muqi.cc.aac'
        //当开始播放时，输出调试信息
        audioCtx.onPlay(function(){
            console.log('开始播放')
        })
          //当发生错误时，输出信息
        audioCtx.onError(function(res){
            console.log(res.errMsg) //错误信息
            console.log(res.errCode) //错误码
        })
            //开始播放
        audioCtx.play()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    onclose(){
        audioCtx.stop()
        audioCtx.destroy()
        audioCtx = null  
        setTimeout(() => {
            wx.navigateBack({
              delta: -1,
            })
        }, 500);   
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        audioCtx.stop()
        audioCtx.destroy()
        audioCtx = null        
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        audioCtx.stop()
        audioCtx.destroy()
        audioCtx = null       
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