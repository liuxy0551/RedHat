var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var RankingList = (function (_super) {
    __extends(RankingList, _super);
    function RankingList() {
        return _super.call(this) || this;
    }
    RankingList.getInstance = function () {
        if (!RankingList.shared) {
            RankingList.shared = new RankingList();
        }
        return RankingList.shared;
    };
    // 添加皮肤的时候自动调用该函数
    RankingList.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    // 组件加载完毕之后调用该函数
    RankingList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    // 自定义初始化函数
    RankingList.prototype.init = function () {
        // 给每个按钮绑定点击事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnClick, this);
    };
    RankingList.prototype.returnClick = function () {
        this.parent.removeChild(this);
    };
    return RankingList;
}(eui.Component));
__reflect(RankingList.prototype, "RankingList", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RankingList.js.map