var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Begin = (function (_super) {
    __extends(Begin, _super);
    function Begin() {
        return _super.call(this) || this;
    }
    Begin.getInstance = function () {
        if (!Begin.shared) {
            Begin.shared = new Begin();
        }
        return Begin.shared;
    };
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
        this.btn_game_rule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameRuleClick, this);
        this.btn_ranking_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankingListClick, this);
        this.btn_task.addEventListener(egret.TouchEvent.TOUCH_TAP, this.taskClick, this);
        this.btn_start_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGameClick, this);
    };
    Begin.prototype.gameRuleClick = function () {
        this.addChild(GameRule.getInstance());
    };
    Begin.prototype.rankingListClick = function () {
        this.addChild(RankingList.getInstance());
    };
    Begin.prototype.taskClick = function () {
        this.addChild(Task.getInstance());
    };
    Begin.prototype.startGameClick = function () {
        this.addChild(GamePage.getInstance());
    };
    return Begin;
}(eui.Component));
__reflect(Begin.prototype, "Begin", ["eui.UIComponent", "egret.DisplayObject"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            // console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [4 /*yield*/, platform.showShareMenu()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.getApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.getUserInfo()];
                    case 1:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    Main.prototype.createGameScene = function () {
        this.addChild(Begin.getInstance());
    };
    // 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    // 描述文件加载成功，开始播放动画
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.showShareMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
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
    // 设置分数
    GameOver.prototype.setScore = function (score) {
        console.log(this.total_score.text);
    };
    // 再来一局
    GameOver.prototype.againGame = function () {
        this.addChild(GamePage.getInstance());
    };
    // 去分享给好友
    GameOver.prototype.toShare = function () {
    };
    // 排行榜
    GameOver.prototype.rankingListClick = function () {
        this.addChild(RankingList.getInstance());
    };
    // 返回首页
    GameOver.prototype.returnClick = function () {
        // this.parent.removeChild(this);
        this.addChild(Begin.getInstance());
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver", ["eui.UIComponent", "egret.DisplayObject"]);
var GamePage = (function (_super) {
    __extends(GamePage, _super);
    function GamePage() {
        var _this = _super.call(this) || this;
        // 分数
        _this.score = 0;
        _this.whichCloud = 2;
        _this.cloudList = [];
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
    };
    // 自定义初始化函数
    GamePage.prototype.init = function () {
        // 云朵和 gift 缓缓向下
        var timer = new egret.Timer(20, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // timer.start();
        // 新云朵
        var timerCloudGift = new egret.Timer(8000, 0);
        timerCloudGift.addEventListener(egret.TimerEvent.TIMER, this.timerCloudGiftFunc, this);
        timerCloudGift.start();
        // 给每个按钮绑定点击事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnClick, this);
        this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftClick, this);
        this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upClick, this);
        this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightClick, this);
        // scroller  关闭水平方向滚动
        this.sc_cloud.scrollPolicyH = eui.ScrollPolicy.OFF;
        // 不显示滚动条		
        this.sc_cloud.verticalScrollBar.autoVisibility = false;
        this.sc_cloud.verticalScrollBar.visible = false;
        //创建icon的group添加到scroller上
        // let group: eui.Group = new eui.Group();
        // this.gp_cloud.addChild(group);
        // group.width = 640;
        // 填充背景图
        var img_bg = new eui.Image("resource/assets/RedHat/bg.png");
        this.gp_cloud.addChildAt(img_bg, 0);
        // for( let i:number = 0; i < 3; i++){
        // 	let img_bg: eui.Image = new eui.Image("resource/assets/RedHat/bg.png");
        // 	img_bg.y = i * this.height ;
        // 	this.gp_cloud.addChildAt( img_bg, 0);
        // }
        //设置小红帽及所在云朵的初始位置
        // this.img_face_right.x = this.width / 2 - 30;
        // this.img_cloud1.x = this.width / 2 - 100
        // 绑定的对象发生变化时调用该方法
        // var that = this;
        var funcChange = function () {
            // console.log(this.source, this.y);
            // 在egretProperties.json 中添加 game，需要再执行 egret build -e
        };
        this.cross();
        // this.pauseTweens(this.img_cloud2, this.img_gift2, "face_right_png");
        egret.Tween.pauseTweens(this.img_cloud2);
    };
    // 横向移动
    GamePage.prototype.cross = function () {
        this.cloudList = [this.img_cloud1, this.img_cloud2, this.img_cloud3, this.img_cloud4, this.img_cloud5];
        var time1 = 2500;
        var time2 = 3500;
        for (var i = 0; i < this.cloudList.length; i++) {
            if (i % 2 == 0) {
                egret.Tween.get(this.cloudList[i], { loop: true }).
                    to({ x: (640 - this.cloudList[i].width) }, time2, egret.Ease.sineIn).
                    to({ x: 0 }, time2, egret.Ease.sineIn);
                // console.log("2", this.cloudList[i].source, this.cloudList[i].width, this.cloudList[i].x)
            }
            else if (i % 2 == 1) {
                egret.Tween.get(this.cloudList[i], { loop: true }).
                    to({ x: 0 }, time1, egret.Ease.sineIn).
                    to({ x: this.cloudList[i].x }, time1, egret.Ease.sineIn);
                // console.log("1", this.cloudList[i].source, this.cloudList[i].width, this.cloudList[i].x)
            }
        }
    };
    // 定时器
    GamePage.prototype.timerFunc = function () {
        this.img_cloud1.y = this.img_cloud1.y + 0.5;
        this.img_cloud2.y = this.img_cloud2.y + 0.5;
        this.img_cloud3.y = this.img_cloud3.y + 0.5;
        this.img_cloud4.y = this.img_cloud4.y + 0.5;
        this.img_cloud5.y = this.img_cloud5.y + 0.5;
        this.img_gift1.y = this.img_gift1.y + 0.5;
        this.img_gift2.y = this.img_gift2.y + 0.5;
        this.img_gift3.y = this.img_gift3.y + 0.5;
        this.img_gift4.y = this.img_gift4.y + 0.5;
        this.img_face_right.y = this.img_face_right.y + 0.5;
        if (this.img_face_right.y + this.img_face_right.height == 1136) {
            // 游戏结束
            this.addChild(GameOver.getInstance());
            this.redHatDrop('left');
            this.redHatDrop('right');
        }
    };
    GamePage.prototype.timerCloudGiftFunc = function () {
        // this.initList();
        // this.startLoad(this.img_cloud5);
    };
    GamePage.prototype.startLoad = function (cloud) {
        // 从两个集合中分拨随机选出云朵和 gift 的样式
        var cloudSourceList = ["cloud1_png", "cloud2_png", "cloud3_png", "cloud4_png"];
        var giftSourceList = ["gift1_png", "gift2_png", "gift3_png", "", "", ""];
        var i = Math.floor(Math.random() * cloudSourceList.length);
        var j = Math.floor(Math.random() * giftSourceList.length);
        // console.log(cloudSourceList[i]);
        // console.log(giftSourceList[j]);
        cloud.x = 0;
        cloud.y = -105;
        cloud.height = 42;
        cloud.source = cloudSourceList[i];
        if (cloud.source.indexOf("1") == 5) {
            cloud.width = 176;
        }
        else if (cloud.source.indexOf("2") == 5) {
            cloud.width = 167;
        }
        else if (cloud.source.indexOf("3") == 5) {
            cloud.width = 135;
        }
        else if (cloud.source.indexOf("4") == 5) {
            cloud.width = 209;
        }
    };
    // public new_cloud;
    GamePage.prototype.onLoadComplete = function (event) {
        var texture = new egret.Texture();
        texture.bitmapData = event.target.data;
        //创建 Bitmap 进行显示
        var newCloud = new egret.Bitmap(texture);
        // newCloud.y = newCloud.height;
        // console.log(newCloud.width)
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
        console.log(this.img_cloud5.width);
        // this.addChild(newCloud);
        // egret.setTimeout(function() {
        // 	this.removeChild(new_cloud);
        // }, this, 2000);
    };
    // 返回首页
    GamePage.prototype.returnClick = function () {
        this.parent.removeChild(this);
    };
    // 向左移动
    GamePage.prototype.leftClick = function () {
        console.log(this.whichCloud);
        // this.resumeTweens(this.img_cloud2, this.img_gift2)
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
    };
    // 向上跳起
    GamePage.prototype.upClick = function () {
        var face_where = this.img_face_right.source;
        this.img_face_right.source = "face_me_png";
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
        this.resumeTweens(cloud, this.img_gift2);
        // this.pauseTweens(this.img_cloud2, this.img_gift2, "face_right_png");
        // 跳起及落下的动作
        egret.Tween.get(this.img_face_right).
            to({ y: this.img_face_right.y - 100 }, 700, egret.Ease.sineOut).
            to({ y: this.img_face_right.y }, 400, egret.Ease.sineOut);
        // wait(1).call(this.pauseTweens, this, [this.img_cloud3, this.img_gift3, face_where]);// 设置延时，设置回调函数及作用域，用于侦听动画完成;
        if (this.whichCloud == 1) {
            // 延时方法，在小红帽落到规定高度时暂停所在云朵的缓动动画
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud2, this.img_gift2, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 2) {
            // 延时方法，在小红帽落到规定高度时暂停所在云朵的缓动动画
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud3, this.img_gift3, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 3) {
            // 延时方法，在小红帽落到规定高度时暂停所在云朵的缓动动画
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud4, this.img_gift4, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 4) {
            // 延时方法，在小红帽落到规定高度时暂停所在云朵的缓动动画
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud5, this.img_gift5, face_where);
            }, this, 1100);
        }
        else if (this.whichCloud == 5) {
            // 延时方法，在小红帽落到规定高度时暂停所在云朵的缓动动画
            egret.setTimeout(function () {
                this.pauseTweens(this.img_cloud1, this.img_gift1, face_where);
            }, this, 1100);
        }
        var verticalList = [this.img_cloud1, this.img_cloud2, this.img_cloud3, this.img_cloud4, this.img_cloud5, this.img_gift1, this.img_gift2, this.img_gift3];
        // 封装纵向移动的方法
        for (var i = 0; i < verticalList.length; i++) {
            egret.Tween.get(verticalList[i]).
                to({ y: verticalList[i].y + 250 }, 1100, egret.Ease.sineOut).
                wait(1).call(this.changeCloudGift, this, [verticalList[i]]); // 设置延时，设置回调函数及作用域，用于侦听动画完成
        }
        this.cross();
        // this.pauseTweens(this.img_cloud3, this.img_gift3, face_where);
        // this.resumeTweens(this.img_cloud2, this.img_gift2)
    };
    GamePage.prototype.changeCloudGift = function (vertical) {
        if ((vertical.y + vertical.height) > 1136 && vertical.source.indexOf("cloud") == 0) {
            // vertical.y = 0;
            // 将落到屏幕下方的云和 gift 进行替换重新在顶部出现
            this.startLoad(vertical);
        }
        // if(this.whichCloud == 2) {
        // 	if((this.img_cloud1.y + 250)> 1136) {
        // 		// 将落到屏幕下方的云和 gift 进行替换重新在顶部出现
        // 		this.startLoad(this.img_cloud1)
        // 	}
        // }
    };
    // 暂停某个对象上的全部 Tween 动画
    GamePage.prototype.pauseTweens = function (cloud, gift, face_where) {
        console.log(cloud.x);
        egret.Tween.pauseTweens(cloud);
        egret.Tween.pauseTweens(gift);
        this.img_face_right.source = face_where;
        console.log(cloud.x, this.img_face_right.x + this.img_face_right.width / 2, cloud.x + cloud.width);
        // 判断小红帽是否落在云上
        if ((this.img_face_right.x + this.img_face_right.width / 2) > cloud.x && (this.img_face_right.x + this.img_face_right.width / 2) < (cloud.x + cloud.width)) {
            console.log("恭喜，小红帽落在了云上！");
            if (this.whichCloud < 5) {
                this.whichCloud = this.whichCloud + 1;
            }
            else if (this.whichCloud = 5) {
                this.whichCloud = 1;
            }
            // console.log(cloud);
            // console.log(gift);
            // console.log(face_where);
            // this.redHatGift("jump");
        }
        else {
            console.log("很遗憾，小红帽没落在云上！");
            this.resumeTweens(cloud, gift);
            // egret.Tween.get(this.img_face_right).
            // 	to({ rotation: 720, y: this.img_face_right.y + 750 }, 1000 ,egret.Ease.sineIn);
            // 	// 游戏结束
            // 	this.addChild(GameOver.getInstance());
        }
    };
    // 恢复某个对象上的全部 Tween 动画
    GamePage.prototype.resumeTweens = function (cloud, gift) {
        egret.Tween.resumeTweens(cloud);
        egret.Tween.resumeTweens(gift);
    };
    // 判断小红帽和 gift 的位置关系
    GamePage.prototype.redHatGift = function (from) {
        // 判断小红帽是否落在云上恰好又落在了 gift 上
        if (((this.img_face_right.x + this.img_face_right.width - 10) < (this.img_gift1.x + this.img_gift1.width) && (this.img_face_right.x + this.img_face_right.width - 10) > this.img_gift1.x)
            || ((this.img_face_right.x + 10) > this.img_gift1.x && (this.img_face_right.x + 10) < (this.img_gift1.x + this.img_gift1.width))) {
            if (from == "walk") {
                this.img_gift1.x = 0;
                this.img_gift1.width = 0;
                this.img_score.source = "score2_png";
                this.score = this.score + 15;
            }
            else if (from == "jump") {
                this.img_gift1.x = 0;
                this.img_gift1.width = 0;
                this.img_score.source = "score3_png";
                this.score = this.score + 20;
            }
        }
        else {
            if (from == "jump") {
                this.img_score.source = "score1_png";
                this.score = this.score + 5;
            }
        }
        // 加分完成，消除加分的显示
        egret.setTimeout(function () {
            this.img_score.source = "";
        }, this, 1200);
    };
    // 向右移动
    GamePage.prototype.rightClick = function () {
        console.log(this.whichCloud);
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
    };
    //小红帽旋转掉落
    GamePage.prototype.redHatDrop = function (direction) {
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
            //小红帽从左边旋转掉落
            if ((this.img_face_right.x + this.img_face_right.width / 2) < cloud.x) {
                egret.Tween.get(this.img_face_right).
                    // to({ y: this.img_face_right.y + 117 }, 300, egret.Ease.sineOut).
                    to({ rotation: 720, y: this.img_face_right.y + 1000 }, 1200, egret.Ease.sineIn);
                this.addChild(GameOver.getInstance());
                // 通过深度值获取子对象来设置分数
                var gameOver = GameOver.getInstance().getChildAt(1).parent;
                gameOver.total_score.text = this.score;
            }
        }
        else if (direction == 'right') {
            //小红帽从右边旋转掉落
            if ((this.img_face_right.x + this.img_face_right.width / 2) > (cloud.x + cloud.width)) {
                egret.Tween.get(this.img_face_right).
                    // to({ y: this.img_face_right.y + 117 }, 300, egret.Ease.sineOut).
                    to({ rotation: 720, y: this.img_face_right.y + 1000 }, 1200, egret.Ease.sineIn);
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
var GameRule = (function (_super) {
    __extends(GameRule, _super);
    function GameRule() {
        return _super.call(this) || this;
    }
    GameRule.getInstance = function () {
        if (!GameRule.shared) {
            GameRule.shared = new GameRule();
        }
        return GameRule.shared;
    };
    // 添加皮肤的时候自动调用该函数
    GameRule.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    // 组件加载完毕之后调用该函数
    GameRule.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    // 自定义初始化函数
    GameRule.prototype.init = function () {
        // 给每个按钮绑定点击事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnClick, this);
    };
    GameRule.prototype.returnClick = function () {
        this.parent.removeChild(this);
    };
    return GameRule;
}(eui.Component));
__reflect(GameRule.prototype, "GameRule", ["eui.UIComponent", "egret.DisplayObject"]);
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
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super.call(this) || this;
    }
    Task.getInstance = function () {
        if (!Task.shared) {
            Task.shared = new Task();
        }
        return Task.shared;
    };
    // 添加皮肤的时候自动调用该函数
    Task.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    // 组件加载完毕之后调用该函数
    Task.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    // 自定义初始化函数
    Task.prototype.init = function () {
        // 给每个按钮绑定点击事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnClick, this);
        this.btn_to_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toShare, this);
    };
    Task.prototype.returnClick = function () {
        this.parent.removeChild(this);
    };
    Task.prototype.toShare = function () {
    };
    return Task;
}(eui.Component));
__reflect(Task.prototype, "Task", ["eui.UIComponent", "egret.DisplayObject"]);
;window.Main = Main;