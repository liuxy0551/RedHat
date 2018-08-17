var egret = window.egret;window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Begin":"resource/game/Begin.exml","GameRule":"resource/game/GameRule.exml","Task":"resource/game/Task.exml","RankingList":"resource/game/RankingList.exml","GamePage":"resource/game/GamePage.exml","GameOver":"resource/game/GameOver.exml"};generateEUI.paths['resource/game/Begin.exml'] = window.BeginSkin = (function (_super) {
	__extends(BeginSkin, _super);
	var BeginSkin$Skin1 = 	(function (_super) {
		__extends(BeginSkin$Skin1, _super);
		function BeginSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeginSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rule_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeginSkin$Skin1;
	})(eui.Skin);

	var BeginSkin$Skin2 = 	(function (_super) {
		__extends(BeginSkin$Skin2, _super);
		function BeginSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeginSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ranking_list_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeginSkin$Skin2;
	})(eui.Skin);

	var BeginSkin$Skin3 = 	(function (_super) {
		__extends(BeginSkin$Skin3, _super);
		function BeginSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeginSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "task_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeginSkin$Skin3;
	})(eui.Skin);

	var BeginSkin$Skin4 = 	(function (_super) {
		__extends(BeginSkin$Skin4, _super);
		function BeginSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeginSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeginSkin$Skin4;
	})(eui.Skin);

	function BeginSkin() {
		_super.call(this);
		this.skinParts = ["img_gift1","btn_game_rule","btn_ranking_list","btn_task","btn_start_game"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.img_gift1_i(),this._Image2_i(),this.btn_game_rule_i(),this.btn_ranking_list_i(),this.btn_task_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.btn_start_game_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
	}
	var _proto = BeginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg_png";
		t.width = 640;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.img_gift1_i = function () {
		var t = new eui.Image();
		this.img_gift1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "gift1_png";
		t.width = 38;
		t.x = 60;
		t.y = 219;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "cloud1_png";
		t.width = 201;
		t.x = 220;
		t.y = 517;
		return t;
	};
	_proto.btn_game_rule_i = function () {
		var t = new eui.Button();
		this.btn_game_rule = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 96;
		t.y = 897;
		t.skinName = BeginSkin$Skin1;
		return t;
	};
	_proto.btn_ranking_list_i = function () {
		var t = new eui.Button();
		this.btn_ranking_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 284;
		t.y = 897;
		t.skinName = BeginSkin$Skin2;
		return t;
	};
	_proto.btn_task_i = function () {
		var t = new eui.Button();
		this.btn_task = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 465;
		t.y = 897;
		t.skinName = BeginSkin$Skin3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC";
		t.size = 20;
		t.text = "游戏规则";
		t.x = 95.68;
		t.y = 987.47;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC";
		t.size = 20;
		t.text = "排行榜";
		t.x = 292.64;
		t.y = 987.47;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC";
		t.size = 20;
		t.text = "任 务";
		t.x = 483.17;
		t.y = 987.47;
		return t;
	};
	_proto.btn_start_game_i = function () {
		var t = new eui.Button();
		this.btn_start_game = t;
		t.height = 90;
		t.label = "";
		t.width = 300;
		t.x = 170;
		t.y = 692;
		t.skinName = BeginSkin$Skin4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "title_png";
		t.width = 190;
		t.x = 225;
		t.y = 143;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.source = "cloud2_png";
		t.width = 167;
		t.x = 35;
		t.y = 257;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.source = "face_right_png";
		t.width = 60;
		t.x = 290;
		t.y = 402;
		return t;
	};
	return BeginSkin;
})(eui.Skin);generateEUI.paths['resource/game/GameOver.exml'] = window.GameOverSkin = (function (_super) {
	__extends(GameOverSkin, _super);
	var GameOverSkin$Skin5 = 	(function (_super) {
		__extends(GameOverSkin$Skin5, _super);
		function GameOverSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "again_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSkin$Skin5;
	})(eui.Skin);

	var GameOverSkin$Skin6 = 	(function (_super) {
		__extends(GameOverSkin$Skin6, _super);
		function GameOverSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSkin$Skin6;
	})(eui.Skin);

	var GameOverSkin$Skin7 = 	(function (_super) {
		__extends(GameOverSkin$Skin7, _super);
		function GameOverSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ranking_list_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSkin$Skin7;
	})(eui.Skin);

	var GameOverSkin$Skin8 = 	(function (_super) {
		__extends(GameOverSkin$Skin8, _super);
		function GameOverSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "home_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSkin$Skin8;
	})(eui.Skin);

	function GameOverSkin() {
		_super.call(this);
		this.skinParts = ["btn_again_game","btn_to_share","btn_ranking_list","btn_return","total_score"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_again_game_i(),this.btn_to_share_i(),this.btn_ranking_list_i(),this._Label1_i(),this.btn_return_i(),this._Label2_i(),this.total_score_i(),this._Label3_i(),this._Label4_i()];
	}
	var _proto = GameOverSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.source = "big_box_png";
		t.width = 640;
		t.x = -0.87;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.source = "big_box_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_again_game_i = function () {
		var t = new eui.Button();
		this.btn_again_game = t;
		t.height = 90;
		t.label = "";
		t.width = 300;
		t.x = 169;
		t.y = 896;
		t.skinName = GameOverSkin$Skin5;
		return t;
	};
	_proto.btn_to_share_i = function () {
		var t = new eui.Button();
		this.btn_to_share = t;
		t.height = 90;
		t.label = "";
		t.width = 300;
		t.x = 170;
		t.y = 743;
		t.skinName = GameOverSkin$Skin6;
		return t;
	};
	_proto.btn_ranking_list_i = function () {
		var t = new eui.Button();
		this.btn_ranking_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 115;
		t.y = 573;
		t.skinName = GameOverSkin$Skin7;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC";
		t.height = 20;
		t.size = 20;
		t.text = "排行榜";
		t.textAlign = "center";
		t.width = 60;
		t.x = 124;
		t.y = 664;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 445;
		t.y = 573;
		t.skinName = GameOverSkin$Skin8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC";
		t.height = 20;
		t.size = 20;
		t.text = "首页";
		t.textAlign = "center";
		t.width = 60;
		t.x = 455;
		t.y = 663;
		return t;
	};
	_proto.total_score_i = function () {
		var t = new eui.Label();
		this.total_score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 95;
		t.size = 70;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf1527b;
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 160;
		t.y = 280;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.size = 38;
		t.text = "游戏结束";
		t.width = 157;
		t.x = 242;
		t.y = 155;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.size = 22;
		t.strokeColor = 0x000000;
		t.text = "——  本次得分  ——";
		t.textAlign = "center";
		t.width = 250;
		t.x = 195;
		t.y = 240;
		return t;
	};
	return GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/game/GamePage.exml'] = window.GamePageSkin = (function (_super) {
	__extends(GamePageSkin, _super);
	var GamePageSkin$Skin9 = 	(function (_super) {
		__extends(GamePageSkin$Skin9, _super);
		function GamePageSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePageSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "left_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePageSkin$Skin9;
	})(eui.Skin);

	var GamePageSkin$Skin10 = 	(function (_super) {
		__extends(GamePageSkin$Skin10, _super);
		function GamePageSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePageSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "up_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePageSkin$Skin10;
	})(eui.Skin);

	var GamePageSkin$Skin11 = 	(function (_super) {
		__extends(GamePageSkin$Skin11, _super);
		function GamePageSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePageSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "right_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePageSkin$Skin11;
	})(eui.Skin);

	var GamePageSkin$Skin12 = 	(function (_super) {
		__extends(GamePageSkin$Skin12, _super);
		function GamePageSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePageSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "home_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePageSkin$Skin12;
	})(eui.Skin);

	function GamePageSkin() {
		_super.call(this);
		this.skinParts = ["img_cloud1","img_cloud2","img_cloud3","img_cloud4","img_cloud5","img_gift1","img_gift2","img_gift3","img_gift4","img_gift5","img_face_right","img_score","btn_left","btn_up","btn_right","btn_return","gp_cloud","sc_cloud"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.sc_cloud_i()];
	}
	var _proto = GamePageSkin.prototype;

	_proto.sc_cloud_i = function () {
		var t = new eui.Scroller();
		this.sc_cloud = t;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.viewport = this.gp_cloud_i();
		return t;
	};
	_proto.gp_cloud_i = function () {
		var t = new eui.Group();
		this.gp_cloud = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this.img_cloud1_i(),this.img_cloud2_i(),this.img_cloud3_i(),this.img_cloud4_i(),this.img_cloud5_i(),this.img_gift1_i(),this.img_gift2_i(),this.img_gift3_i(),this.img_gift4_i(),this.img_gift5_i(),this.img_face_right_i(),this.img_score_i(),this.btn_left_i(),this.btn_up_i(),this.btn_right_i(),this.btn_return_i()];
		return t;
	};
	_proto.img_cloud1_i = function () {
		var t = new eui.Image();
		this.img_cloud1 = t;
		t.height = 42;
		t.source = "cloud1_png";
		t.width = 176;
		t.x = 0;
		t.y = 895;
		return t;
	};
	_proto.img_cloud2_i = function () {
		var t = new eui.Image();
		this.img_cloud2 = t;
		t.height = 42;
		t.source = "cloud2_png";
		t.width = 167;
		t.x = 473;
		t.y = 645;
		return t;
	};
	_proto.img_cloud3_i = function () {
		var t = new eui.Image();
		this.img_cloud3 = t;
		t.height = 42;
		t.source = "cloud3_png";
		t.width = 135;
		t.x = 0;
		t.y = 395;
		return t;
	};
	_proto.img_cloud4_i = function () {
		var t = new eui.Image();
		this.img_cloud4 = t;
		t.height = 42;
		t.source = "cloud4_png";
		t.width = 209;
		t.x = 431;
		t.y = 145;
		return t;
	};
	_proto.img_cloud5_i = function () {
		var t = new eui.Image();
		this.img_cloud5 = t;
		t.height = 42;
		t.source = "cloud3_png";
		t.width = 135;
		t.x = 0;
		t.y = -105;
		return t;
	};
	_proto.img_gift1_i = function () {
		var t = new eui.Image();
		this.img_gift1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "gift1_png";
		t.width = 38;
		t.x = 100;
		t.y = 857;
		return t;
	};
	_proto.img_gift2_i = function () {
		var t = new eui.Image();
		this.img_gift2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "";
		t.width = 38;
		t.x = 573;
		t.y = 607;
		return t;
	};
	_proto.img_gift3_i = function () {
		var t = new eui.Image();
		this.img_gift3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "gift3_png";
		t.width = 38;
		t.x = 100;
		t.y = 357;
		return t;
	};
	_proto.img_gift4_i = function () {
		var t = new eui.Image();
		this.img_gift4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "gift2_png";
		t.width = 38;
		t.x = 531;
		t.y = 107;
		return t;
	};
	_proto.img_gift5_i = function () {
		var t = new eui.Image();
		this.img_gift5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.source = "";
		t.width = 38;
		t.x = 100;
		t.y = -143;
		return t;
	};
	_proto.img_face_right_i = function () {
		var t = new eui.Image();
		this.img_face_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.source = "face_right_png";
		t.width = 60;
		t.x = 480;
		t.y = 530;
		return t;
	};
	_proto.img_score_i = function () {
		var t = new eui.Image();
		this.img_score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.source = "";
		t.width = 152;
		t.x = 244;
		t.y = 252;
		return t;
	};
	_proto.btn_left_i = function () {
		var t = new eui.Button();
		this.btn_left = t;
		t.height = 112;
		t.label = "";
		t.width = 112;
		t.x = 60;
		t.y = 991;
		t.skinName = GamePageSkin$Skin9;
		return t;
	};
	_proto.btn_up_i = function () {
		var t = new eui.Button();
		this.btn_up = t;
		t.height = 112;
		t.label = "";
		t.width = 112;
		t.x = 265;
		t.y = 991;
		t.skinName = GamePageSkin$Skin10;
		return t;
	};
	_proto.btn_right_i = function () {
		var t = new eui.Button();
		this.btn_right = t;
		t.height = 112;
		t.label = "";
		t.width = 112;
		t.x = 474;
		t.y = 987;
		t.skinName = GamePageSkin$Skin11;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 20;
		t.y = 20;
		t.skinName = GamePageSkin$Skin12;
		return t;
	};
	return GamePageSkin;
})(eui.Skin);generateEUI.paths['resource/game/GameRule.exml'] = window.GameRuleSkin = (function (_super) {
	__extends(GameRuleSkin, _super);
	var GameRuleSkin$Skin13 = 	(function (_super) {
		__extends(GameRuleSkin$Skin13, _super);
		function GameRuleSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameRuleSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "return_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameRuleSkin$Skin13;
	})(eui.Skin);

	function GameRuleSkin() {
		_super.call(this);
		this.skinParts = ["btn_return"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this.btn_return_i()];
	}
	var _proto = GameRuleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 117.21;
		t.horizontalCenter = 1.5;
		t.source = "no_btns_png";
		t.width = 523;
		t.y = 893.8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.source = "big_box_png";
		t.width = 640;
		t.x = -0.87;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 596;
		t.horizontalCenter = 0.5;
		t.source = "small_box_png";
		t.width = 523;
		t.y = 232.92;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 7.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "       所有云层会匀速下降，跳跃失败";
		t.verticalAlign = "top";
		t.width = 419.45;
		t.y = 678.63;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = -0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "或小红帽掉 出屏幕及游戏结束。";
		t.verticalAlign = "top";
		t.width = 395.21;
		t.y = 722.58;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 818;
		t.height = 34;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "游戏规则";
		t.top = 284;
		t.width = 143.64;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 6.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "       操控小红帽向上跳或左右移动，";
		t.verticalAlign = "top";
		t.width = 414.91;
		t.y = 386.2;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 7.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "小红帽当前所在的云层不移动，所在";
		t.verticalAlign = "top";
		t.width = 419.45;
		t.y = 431.67;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "云层的上一层在屏幕中左右移动。抓";
		t.verticalAlign = "top";
		t.width = 425.51;
		t.y = 475.62;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 8.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "住时机跳跃至上一层获得分数，云层";
		t.verticalAlign = "top";
		t.width = 420.97;
		t.y = 518.09;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 5.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "上随机出现加分道具。小红帽仅在云";
		t.verticalAlign = "top";
		t.width = 413.39;
		t.y = 560.57;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = -2.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "层上能左 右移动。";
		t.verticalAlign = "top";
		t.width = 395.21;
		t.y = 603.01;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 74;
		t.y = 912.41;
		t.skinName = GameRuleSkin$Skin13;
		return t;
	};
	return GameRuleSkin;
})(eui.Skin);generateEUI.paths['resource/game/RankingList.exml'] = window.RankingListSkin = (function (_super) {
	__extends(RankingListSkin, _super);
	var RankingListSkin$Skin14 = 	(function (_super) {
		__extends(RankingListSkin$Skin14, _super);
		function RankingListSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankingListSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "return_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankingListSkin$Skin14;
	})(eui.Skin);

	function RankingListSkin() {
		_super.call(this);
		this.skinParts = ["btn_return"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_return_i(),this._Image3_i(),this._Label1_i(),this._Label2_i()];
	}
	var _proto = RankingListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 117.21;
		t.horizontalCenter = 1.5;
		t.source = "no_btns_png";
		t.width = 523;
		t.y = 893.8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.source = "big_box_png";
		t.width = 640;
		t.x = -0.87;
		t.y = 0;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 74;
		t.y = 912.41;
		t.skinName = RankingListSkin$Skin14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 596;
		t.horizontalCenter = 0.5;
		t.source = "small_box_png";
		t.width = 523;
		t.y = 232.92;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 824;
		t.height = 34;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "好友排行榜";
		t.top = 278;
		t.width = 173.94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.right = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "每周一零点数据刷新";
		t.verticalAlign = "top";
		t.width = 223.99;
		t.y = 851.36;
		return t;
	};
	return RankingListSkin;
})(eui.Skin);generateEUI.paths['resource/game/Task.exml'] = window.TaskSkin = (function (_super) {
	__extends(TaskSkin, _super);
	var TaskSkin$Skin15 = 	(function (_super) {
		__extends(TaskSkin$Skin15, _super);
		function TaskSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TaskSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "return_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TaskSkin$Skin15;
	})(eui.Skin);

	var TaskSkin$Skin16 = 	(function (_super) {
		__extends(TaskSkin$Skin16, _super);
		function TaskSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TaskSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "to_share_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TaskSkin$Skin16;
	})(eui.Skin);

	function TaskSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","btn_to_share"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_return_i(),this._Image3_i(),this.btn_to_share_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
	}
	var _proto = TaskSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 117.21;
		t.horizontalCenter = 1.5;
		t.source = "no_btns_png";
		t.width = 523;
		t.y = 893.8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.source = "big_box_png";
		t.width = 640;
		t.x = -0.87;
		t.y = 0;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.height = 80;
		t.label = "";
		t.width = 80;
		t.x = 74;
		t.y = 912.41;
		t.skinName = TaskSkin$Skin15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 596;
		t.horizontalCenter = 0.5;
		t.source = "small_box_png";
		t.width = 523;
		t.y = 232.92;
		return t;
	};
	_proto.btn_to_share_i = function () {
		var t = new eui.Button();
		this.btn_to_share = t;
		t.anchorOffsetX = 0;
		t.height = 38;
		t.label = "";
		t.width = 82;
		t.x = 445.91;
		t.y = 734.53;
		t.skinName = TaskSkin$Skin16;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 818;
		t.height = 34;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "每日任务";
		t.top = 284;
		t.width = 143.64;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "分享给三位好友，下一局得分翻倍";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 414.91;
		t.y = 386.2;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37.57;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "( 0/3 )";
		t.textAlign = "center";
		t.width = 419.45;
		t.y = 431.67;
		return t;
	};
	return TaskSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);