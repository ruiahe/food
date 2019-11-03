"use strict";
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        imgs: ['../../common/images/index/edit.png', '../../common/images/index/fire.png'],
        searchObj: {},
        contentObj: {},
        verticalHeight: 0,
        bodyHeight: 0,
        height1: 0,
        height2: 0
    },
    onReady: function () {
        var _this = this;
        var query = wx.createSelectorQuery().in(this);
        query.select('.location-user').boundingClientRect();
        query.select('.swiper').boundingClientRect(); 
        query.select('.search-box').boundingClientRect();   
        query.select('.across-nav').boundingClientRect();
        query.select('.bottom').boundingClientRect();
        wx.getSystemInfo({
            success({ windowHeight }) {
              _this.data.verticalHeight = windowHeight;
            }
        });
        query.exec(function (res) {
            _this['data']['searchObj']['top'] = res[0]['height'];
            _this['data']['contentObj']['top'] = res[0]['height'] + res[1]['height'];
            _this.data.height1 = _this.data.verticalHeight - res[3]['top'] - res[3]['height'] - res[4]['height'];
            _this.data.height2 = _this.data.verticalHeight - res[0]['top'] - res[2]['height'] - res[3]['height'] - res[4]['height'];
            _this.setData({
                verticalHeight: _this.data.height1
            })
        });
    },
    onPageScroll: function (e) {
        if (e.scrollTop > this.data.searchObj.top) {
            this.setData({
                searchObj: { top: this.data.searchObj.top, isTrue: true }
            });
        } else {
            this.setData({
                searchObj: { top: this.data.searchObj.top, isTrue: false }
            });
        }
        if (e.scrollTop > this.data.contentObj.top) {
            this.setData({
                contentObj: { top: this.data.contentObj.top, isTrue: true },
                navHObj: { isTrue: true },
                verticalHeight: this.data.height2
            });
        } else {
            this.setData({
                contentObj: { top: this.data.contentObj.top, isTrue: false },
                navHObj: { isTrue: false },
                verticalHeight: this.data.height1
            });
        }
    }
});