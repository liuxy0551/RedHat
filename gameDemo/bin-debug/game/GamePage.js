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
var GamePage = (function (_super) {
    __extends(GamePage, _super);
    function GamePage() {
        var _this = _super.call(this) || this;
        // 分数
        _this.score = 0;
        _this.deathX = 300;
        _this.whichCloud = 2;
        _this.deathReason = "";
        _this.cloudList = [_this.img_cloud1, _this.img_cloud2, _this.img_cloud3, _this.img_cloud4, _this.img_cloud5];
        return _this;
    }
    GamePage.getInstance = function () {
        if (!GamePage.shared) {
            GamePage.shared = new GamePage();
        }
        return GamePage.shared;
    };
    GamePage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GamePage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.initGame();
    };
    // 初始化游戏
    GamePage.prototype.initGame = function () {
        if (this.deathReason == "jump") {
            if (this.whichCloud < 5) {
                this.whichCloud += 1;
            }
            else if (this.whichCloud == 5) {
                this.whichCloud = 1;
            }
            // console.log("again.whichCloud", this.whichCloud);
            if (this.whichCloud == 1) {
                this.img_cloud1.x = this.deathX - 20;
                this.img_gift1.x = this.img_cloud1.x + 100;
            }
            else if (this.whichCloud == 2) {
                this.img_cloud2.x = this.deathX - 20;
                this.img_gift2.x = this.img_cloud2.x + 100;
            }
            else if (this.whichCloud == 3) {
                this.img_cloud3.x = this.deathX - 20;
                this.img_gift3.x = this.img_cloud3.x + 100;
            }
            else if (this.whichCloud == 4) {
                this.img_cloud4.x = this.deathX - 20;
                this.img_gift4.x = this.img_cloud4.x + 100;
            }
            else if (this.whichCloud == 5) {
                this.img_cloud5.x = this.deathX - 20;
                this.img_gift5.x = this.img_cloud5.x + 100;
            }
        }
        else if (this.deathReason = "walk") {
        }
        this.score = 0;
        // Number(this.total_score.text) = 0;
        console.log(this.total_score.text);
        this.img_face_right.x = this.deathX;
        this.img_face_right.y = 530;
        var face_where = this.img_face_right.source;
        // console.log("this.whichCloud", this.whichCloud);
        // console.log("this.deathX", this.deathX);
        if (this.whichCloud == 1) {
            egret.Tween.pauseTweens(this.img_cloud1);
            egret.Tween.pauseTweens(this.img_gift1);
            this.img_face_right.source = face_where;
        }
        else if (this.whichCloud == 2) {
            egret.Tween.pauseTweens(this.img_cloud2);
            egret.Tween.pauseTweens(this.img_gift2);
            this.img_face_right.source = face_where;
        }
        else if (this.whichCloud == 3) {
            egret.Tween.pauseTweens(this.img_cloud3);
            egret.Tween.pauseTweens(this.img_gift3);
            this.img_face_right.source = face_where;
        }
        else if (this.whichCloud == 4) {
            egret.Tween.pauseTweens(this.img_cloud4);
            egret.Tween.pauseTweens(this.img_gift4);
            this.img_face_right.source = face_where;
        }
        else if (this.whichCloud == 5) {
            egret.Tween.pauseTweens(this.img_cloud5);
            egret.Tween.pauseTweens(this.img_gift5);
            this.img_face_right.source = face_where;
        }
    };
    // 自定义初始化函数
    GamePage.prototype.init = function () {
        // 给每个按钮绑定点击事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnClick, this);
        this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftClick, this);
        this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upClick, this);
        this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightClick, this);
        // scroller  关闭垂直和水平方向的滚动
        this.sc_cloud.scrollPolicyH = eui.ScrollPolicy.OFF;
        this.sc_cloud.scrollPolicyV = eui.ScrollPolicy.OFF;
        // 不显示滚动条		
        this.sc_cloud.verticalScrollBar.autoVisibility = false;
        this.sc_cloud.verticalScrollBar.visible = false;
        // 填充背景图
        var img_bg = new eui.Image("resource/assets/RedHat/bg.png");
        this.gp_cloud.addChildAt(img_bg, 0);
        // 绑定的对象发生变化时调用该方法
        // var that = this;
        var funcChange = function () {
            // console.log(this.source, this.y);
            // 在egretProperties.json 中添加 game，需要再执行 egret build -e
        };
        this.cross();
        egret.Tween.pauseTweens(this.img_cloud2);
    };
    // 横向移动
    GamePage.prototype.cross = function () {
        var time1 = 2500;
        var time2 = 3500;
        this.cloudList = [this.img_cloud1, this.img_cloud2, this.img_cloud3, this.img_cloud4, this.img_cloud5];
        // 云朵的横向移动
        for (var i = 0; i < this.cloudList.length; i++) {
            if (i == 1) {
                egret.Tween.get(this.cloudList[i], { loop: true }).
                    to({ x: 0 }, time1 / 2, egret.Ease.sineIn).
                    to({ x: (640 - this.cloudList[i].width) }, time1, egret.Ease.sineIn).
                    to({ x: this.cloudList[i].x }, time1 / 2, egret.Ease.sineIn);
            }
            else if (i % 2 == 0) {
                egret.Tween.get(this.cloudList[i], { loop: true }).
                    to({ x: (640 - this.cloudList[i].width) }, time2, egret.Ease.sineIn).
                    to({ x: 0 }, time2, egret.Ease.sineIn);
            }
            else if (i % 2 == 1) {
                egret.Tween.get(this.cloudList[i], { loop: true }).
                    to({ x: 0 }, time1, egret.Ease.sineIn).
                    to({ x: this.cloudList[i].x }, time1, egret.Ease.sineIn);
            }
        }
        // gift 的横向移动
        var giftList = [this.img_gift1, this.img_gift2, this.img_gift3, this.img_gift4, this.img_gift5];
        for (var i = 0; i < giftList.length; i++) {
            if (i % 2 == 0) {
                egret.Tween.get(giftList[i], { loop: true }).
                    to({ x: 740 - this.cloudList[i].width }, time2, egret.Ease.sineIn).
                    to({ x: 100 }, time2, egret.Ease.sineIn);
            }
            else if (i % 2 == 1) {
                egret.Tween.get(giftList[i], { loop: true }).
                    to({ x: 100 }, time1, egret.Ease.sineIn).
                    to({ x: giftList[i].x }, time1, egret.Ease.sineIn);
            }
        }
    };
    // 将落到屏幕下方的云和 gift 进行替换重新在顶部出现
    GamePage.prototype.startLoad = function (cloud) {
        // 从集合中分拨随机选出 source
        // var cloudSourceList = ["cloud1_png", "cloud2_png", "cloud3_png", "cloud4_png"];
        var giftSourceList = ["gift1_png", "gift2_png", "gift3_png"];
        // var i = Math.floor(Math.random() * cloudSourceList.length);
        var j = Math.floor(Math.random() * giftSourceList.length);
        var gift;
        if (this.whichCloud == 1) {
            cloud = this.img_cloud5;
            gift = this.img_gift5;
        }
        else if (this.whichCloud == 2) {
            cloud = this.img_cloud1;
            gift = this.img_gift1;
        }
        else if (this.whichCloud == 3) {
            cloud = this.img_cloud2;
            gift = this.img_gift2;
        }
        else if (this.whichCloud == 4) {
            cloud = this.img_cloud3;
            gift = this.img_gift3;
        }
        else if (this.whichCloud == 5) {
            cloud = this.img_cloud4;
            gift = this.img_gift4;
        }
        cloud.x = 0;
        cloud.y = -105;
        if (gift != this.img_gift2) {
            gift.y = cloud.x + 100;
            gift.width = 38;
            gift.y = -143;
            gift.source = giftSourceList[j];
        }
        // 放开注释则随机产生云朵，但原来云朵的 width不可控
        // cloud.source = cloudSourceList[i];
        // if(cloud.source.indexOf("1") == 5) {
        // 	cloud.width = 176;
        // }else if(cloud.source.indexOf("2") == 5) {
        // 	cloud.width = 167;
        // }else if(cloud.source.indexOf("3") == 5) {
        // 	cloud.width = 135;
        // }else if(cloud.source.indexOf("4") == 5) {
        // 	cloud.width = 209;
        // }
    };
    GamePage.prototype.onLoadComplete = function (event) {
        var texture = new egret.Texture();
        texture.bitmapData = event.target.data;
        //创建 Bitmap 进行显示
        var newCloud = new egret.Bitmap(texture);
        if (newCloud.width == 236) {
            this.img_cloud5.width = 176;
        }
        else if (newCloud.width == 196) {
            this.img_cloud5.width = 167;
        }
        else if (newCloud.width == 182) {
            this.img_cloud5.width = 135;
        }
        else if (newCloud.width == 245) {
            this.img_cloud5.width = 209;
        }
    };
    // 返回首页
    GamePage.prototype.returnClick = function () {
        this.parent.removeChild(this);
    };
    // 向左移动
    GamePage.prototype.leftClick = function () {
        this.hiddenGift();
        if (this.img_face_right.x > 0) {
            if (this.img_face_right.source == "face_right_png") {
                this.img_face_right.source = "face_left_png";
                this.img_face_right.x = this.img_face_right.x - 20;
                // 小红帽左侧掉落
                this.redHatDrop('left');
                this.redHatGift("walk");
            }
            else {
                this.img_face_right.x = this.img_face_right.x - 20;
                // 小红帽左侧掉落
                this.redHatDrop('left');
                this.redHatGift("walk");
            }
        }
    };
    // 向上跳起
    GamePage.prototype.upClick = function () {
        this.hiddenUp();
        var face_where = this.img_face_right.source;
        this.img_face_right.source = "face_me_png";
        // 跳起时解除之前所在云朵的暂停事件
        var cloud;
        var gift;
        if (this.whichCloud == 1) {
            cloud = this.img_cloud1;
            gift = this.img_gift1;
        }
        else if (this.whichCloud == 2) {
            cloud = this.img_cloud2;
            gift = this.img_gift2;
        }
        else if (this.whichCloud == 3) {
            cloud = this.img_cloud3;
            gift = this.img_gift3;
        }
        else if (this.whichCloud == 4) {
            cloud = this.img_cloud4;
            gift = this.img_gift4;
        }
        else if (this.whichCloud == 5) {
            cloud = this.img_cloud5;
            gift = this.img_gift5;
        }
        this.resumeTweens(cloud, gift);
        // 跳起及落下的动作
        egret.Tween.get(this.img_face_right).
            to({ y: this.img_face_right.y - 100 }, 700, egret.Ease.sineOut).
            to({ y: this.img_face_right.y }, 400, egret.Ease.sineOut).
            wait(1).call(this.hiddenUp, this, []); // 设置延时，设置回调函数及作用域，用于侦听动画完成;
        // 延时方法，在小红帽落到规定高度时暂停所在云朵的缓动动画
        if (this.whichCloud == 1) {
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud2, this.img_gift2, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 2) {
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud3, this.img_gift3, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 3) {
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud4, this.img_gift4, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 4) {
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud5, this.img_gift5, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 5) {
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud1, this.img_gift1, face_where);
            }, this, 1100);
        }
        var verticalList = [this.img_cloud1, this.img_cloud2, this.img_cloud3, this.img_cloud4, this.img_cloud5, this.img_gift1, this.img_gift2, this.img_gift3, this.img_gift4, this.img_gift5];
        // 封装纵向移动的方法
        for (var i = 0; i < verticalList.length; i++) {
            egret.Tween.get(verticalList[i]).
                to({ y: verticalList[i].y + 250 }, 1100, egret.Ease.sineOut).
                wait(1).call(this.changeCloudGift, this, [verticalList[i]]); // 设置延时，设置回调函数及作用域，用于侦听动画完成
        }
        // 封装横向移动的方法
        this.cross();
    };
    // 小红帽跳起时隐藏方向按键
    GamePage.prototype.hiddenUp = function () {
        if (this.btn_up.width == 112) {
            this.btn_up.width = 0;
            this.btn_left.width = 0;
            this.btn_right.width = 0;
        }
        else if (this.btn_up.width != 112) {
            this.btn_up.width = 112;
            this.btn_left.width = 112;
            this.btn_right.width = 112;
        }
    };
    // 左右移动时隐藏无 source 的 gift
    GamePage.prototype.hiddenGift = function () {
        var giftList = [this.img_gift1, this.img_gift2, this.img_gift3, this.img_gift4, this.img_gift5];
        for (var i = 0; i < giftList.length; i++) {
            if (giftList[i].source == '') {
                giftList[i].x = 0;
                giftList[i].width = 0;
            }
        }
    };
    GamePage.prototype.changeCloudGift = function (vertical) {
        if ((vertical.y + vertical.height) > 1136) {
            // 将落到屏幕下方的云和 gift 进行替换重新在顶部出现
            this.startLoad(vertical);
        }
    };
    // 暂停某个对象上的全部 Tween 动画
    GamePage.prototype.pauseTweens = function (cloud, gift, face_where) {
        egret.Tween.pauseTweens(cloud);
        egret.Tween.pauseTweens(gift);
        this.img_face_right.source = face_where;
        // 判断小红帽是否落在云上
        if ((this.img_face_right.x + this.img_face_right.width / 2) > cloud.x && (this.img_face_right.x + this.img_face_right.width / 2) < (cloud.x + cloud.width)) {
            // console.log("恭喜，小红帽落在了云上！");
            if (this.whichCloud < 5) {
                this.whichCloud = this.whichCloud + 1;
            }
            else if (this.whichCloud = 5) {
                this.whichCloud = 1;
            }
            this.redHatGift("jump");
        }
        else {
            this.deathReason = "jump";
            // console.log("很遗憾，小红帽没落在云上！");
            this.resumeTweens(cloud, gift);
            egret.Tween.get(this.img_face_right).
                to({ rotation: 720, y: this.img_face_right.y + 1000 }, 500, egret.Ease.sineIn);
            // console.log("this.img_face_right.x", this.img_face_right.x);
            // 游戏结束
            this.addChild(GameOver.getInstance());
            // 通过深度值获取子对象来设置分数
            var gameOver = GameOver.getInstance().getChildAt(1).parent;
            gameOver.total_score.text = this.score;
        }
    };
    // 恢复某个对象上的全部 Tween 动画
    GamePage.prototype.resumeTweens = function (cloud, gift) {
        egret.Tween.resumeTweens(cloud);
        egret.Tween.resumeTweens(gift);
    };
    // 判断小红帽和 gift 的位置关系
    GamePage.prototype.redHatGift = function (from) {
        var gift;
        if (this.whichCloud == 1) {
            gift = this.img_gift1;
        }
        else if (this.whichCloud == 2) {
            gift = this.img_gift2;
        }
        else if (this.whichCloud == 3) {
            gift = this.img_gift3;
        }
        else if (this.whichCloud == 4) {
            gift = this.img_gift4;
        }
        else if (this.whichCloud == 5) {
            gift = this.img_gift5;
        }
        // 判断小红帽是否落在云上恰好又落在了 gift 上
        if (((this.img_face_right.x + this.img_face_right.width - 10) < (gift.x + gift.width) && (this.img_face_right.x + this.img_face_right.width - 10) > gift.x)
            || ((this.img_face_right.x + 10) > gift.x && (this.img_face_right.x + 10) < (gift.x + gift.width))) {
            if (from == "walk") {
                gift.x = 0;
                gift.width = 0;
                this.img_score.source = "score2_png";
                this.score = this.score + 15;
                this.total_score.text = this.score;
                // 加分完成，消除加分的显示
                egret.setTimeout(function () {
                    this.img_score.source = "";
                }, this, 1000);
            }
            else if (from == "jump") {
                gift.x = 0;
                gift.width = 0;
                this.img_score.source = "score3_png";
                this.score = this.score + 20;
                this.total_score.text = this.score;
                // 加分完成，消除加分的显示
                egret.setTimeout(function () {
                    this.img_score.source = "";
                }, this, 1000);
            }
        }
        else {
            if (from == "jump") {
                this.img_score.source = "score1_png";
                this.score = this.score + 5;
                this.total_score.text = this.score;
                // 加分完成，消除加分的显示
                egret.setTimeout(function () {
                    this.img_score.source = "";
                }, this, 1000);
            }
        }
    };
    // 向右移动
    GamePage.prototype.rightClick = function () {
        this.hiddenGift();
        if (this.img_face_right.x + this.img_face_right.width < 640) {
            // console.log(this.whichCloud)
            if (this.img_face_right.source == "face_left_png") {
                this.img_face_right.source = "face_right_png";
                this.img_face_right.x = this.img_face_right.x + 20;
                // 小红帽右侧掉落
                this.redHatDrop('right');
                this.redHatGift("walk");
            }
            else {
                this.img_face_right.x = this.img_face_right.x + 20;
                // 小红帽右侧掉落
                this.redHatDrop('right');
                this.redHatGift("walk");
            }
        }
    };
    //小红帽旋转掉落
    GamePage.prototype.redHatDrop = function (direction) {
        this.deathReason = "walk";
        var cloud;
        if (this.whichCloud == 1) {
            cloud = this.img_cloud1;
        }
        else if (this.whichCloud == 2) {
            cloud = this.img_cloud2;
        }
        else if (this.whichCloud == 3) {
            cloud = this.img_cloud3;
        }
        else if (this.whichCloud == 4) {
            cloud = this.img_cloud4;
        }
        else if (this.whichCloud == 5) {
            cloud = this.img_cloud5;
        }
        if (direction == 'left') {
            this.deathX = this.img_face_right.x + 50;
            //小红帽从左边旋转掉落
            if ((this.img_face_right.x + this.img_face_right.width / 2) < cloud.x) {
                egret.Tween.get(this.img_face_right).
                    // to({ y: this.img_face_right.y + 117 }, 300, egret.Ease.sineOut).
                    to({ rotation: 720, y: this.img_face_right.y + 1000 }, 500, egret.Ease.sineIn);
                // console.log("this.img_face_right.x", this.img_face_right.x);
                this.addChild(GameOver.getInstance());
                // 通过深度值获取子对象来设置分数
                var gameOver = GameOver.getInstance().getChildAt(1).parent;
                gameOver.total_score.text = this.score;
            }
        }
        else if (direction == 'right') {
            this.deathX = this.img_face_right.x - 50;
            //小红帽从右边旋转掉落
            if ((this.img_face_right.x + this.img_face_right.width / 2) > (cloud.x + cloud.width)) {
                egret.Tween.get(this.img_face_right).
                    // to({ y: this.img_face_right.y + 117 }, 300, egret.Ease.sineOut).
                    to({ rotation: 720, y: this.img_face_right.y + 1000 }, 500, egret.Ease.sineIn);
                // console.log("this.img_face_right.x", this.img_face_right.x);
                this.addChild(GameOver.getInstance());
                // 通过深度值获取子对象来设置分数
                var gameOver = GameOver.getInstance().getChildAt(1).parent;
                gameOver.total_score.text = this.score;
            }
        }
    };
    return GamePage;
}(eui.Component));
__reflect(GamePage.prototype, "GamePage", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GamePage.js.map