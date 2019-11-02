"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
      imgs: ['../../common/images/index/edit.png', '../../common/images/index/fire.png'],
      searchObj:{},
      contentObj:{}
    },
    onReady: function () {
        const _this = this;
        const query = wx.createSelectorQuery().in(this);
        query.select('.location-user').boundingClientRect();
        query.select('.search-box').boundingClientRect();
        query.exec((res) => {
          _this['data']['searchObj']['top'] = res[0]['height'];
          _this['data']['contentObj']['top'] = res[0]['height'] + res[1]['height'];
        })
    },
    getUserInfo: function (e) {
      
    },
    onPageScroll: function (e) {
        if (e.scrollTop > this['data']['searchObj']['top']){
          console.log(1111111)
            this.setData({
                searchObj: { top: this.data.searchObj.top, isTrue: true }
            })
        } else {
            this.setData({
                searchObj: { top: this.data.searchObj.top, isTrue: false }
            })
        }
        if (e.scrollTop > this.data.contentObj.top) {
          console.log(33333333333333333)
            this.setData({
              contentObj: { top: this.data.contentObj.top, isTrue: true }
            })
        } else {
            this.setData({
              contentObj: { top: this.data.contentObj.top, isTrue: false }
            })
        }
    },
});
