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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        return _super.call(this) || this;
    }
    GameOver.getInstance = function () {
        if (!GameOver.shared) {
            GameOver.shared = new GameOver();
        }
        return GameOver.shared;
    };
    GameOver.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameOver.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    // 自定义初始化函数
    GameOver.prototype.init = function () {
        // 给每个按钮绑定点击事件
        this.btn_again_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againGame, this);
        this.btn_to_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toShare, this);
        this.btn_ranking_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingListClick, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnClick, this);
    };
    // 再来一局
    GameOver.prototype.againGame = function () {
        this.parent.removeChild(this);
        GamePage.getInstance().initGame();
    };
    // 去分享给好友
    GameOver.prototype.toShare = function () {
        this.addChild(Task.getInstance());
    };
    // 排行榜
    GameOver.prototype.rankingListClick = function () {
        this.addChild(RankingList.getInstance());
    };
    // 返回首页
    GameOver.prototype.returnClick = function () {
        GamePage.getInstance().initGame();
        this.parent.removeChild(this);
        GamePage.getInstance().returnClick();
    };
    // 设置分数
    GameOver.prototype.setScore = function () {
        var key = "score";
        var score = egret.localStorage.getItem(key);
        this.total_score.text = score;
        egret.setTimeout(function () {
            egret.localStorage.removeItem(key);
        }, this, 5000);
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameOver.js.map