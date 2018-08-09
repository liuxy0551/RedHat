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
var Begin = (function (_super) {
    __extends(Begin, _super);
    function Begin() {
        return _super.call(this) || this;
    }
    // 添加皮肤的时候自动调用该函数
    Begin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    // 组件加载完毕之后调用该函数
    Begin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    // 自定义初始化函数
    Begin.prototype.init = function () {
        // 给每个按钮绑定点击事件
        this.btn_game_rule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.game_rule_click, this);
        this.btn_ranking_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ranking_list_click, this);
        this.btn_task.addEventListener(egret.TouchEvent.TOUCH_TAP, this.task_click, this);
        this.btn_start_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start_game_click, this);
    };
    Begin.prototype.game_rule_click = function () {
    };
    Begin.prototype.ranking_list_click = function () {
    };
    Begin.prototype.task_click = function () {
    };
    Begin.prototype.start_game_click = function () {
    };
    return Begin;
}(eui.Component));
__reflect(Begin.prototype, "Begin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Begin.js.map