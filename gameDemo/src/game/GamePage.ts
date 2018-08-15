class GamePage extends eui.Component implements  eui.UIComponent {

	public sc_cloud:eui.Scroller;
	public gp_cloud:eui.Group;
	public img_cloud1:eui.Image;
	public img_cloud3:eui.Image;
	public img_cloud2:eui.Image;
	public img_cloud4:eui.Image;
	public img_face_right:eui.Image;
	public img_gift1:eui.Image;
	public img_gift2:eui.Image;
	public img_gift3:eui.Image;
	public img_score:eui.Image;
	public btn_return:eui.Button;
	public btn_left:eui.Button;
	public btn_up:eui.Button;
	public btn_right:eui.Button;

	// 分数
	public score = 0;

	// 单例模式
    private static shared:GamePage;
    public static getInstance(){
        if( !GamePage.shared){
            GamePage.shared =  new GamePage();
        }
        return GamePage.shared;
    }

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void
	{
		super.childrenCreated();
		this.init();
	}
	
	// 自定义初始化函数
	private init() {
		// 定时器
		var timer: egret.Timer = new egret.Timer(1000, 5);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();

		// 给每个按钮绑定点击事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnClick,this)
		this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leftClick,this)
		this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upClick,this)
		this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rightClick,this)

		// scroller  关闭水平方向滚动
		this.sc_cloud.scrollPolicyH = eui.ScrollPolicy.OFF;

		//创建icon的group添加到scroller上
		let group: eui.Group = new eui.Group();
		this.gp_cloud.addChild(group);
		group.width = 640;
		group.height = 0;

		// 填充背景图
		let img_bg: eui.Image = new eui.Image("resource/assets/RedHat/bg.png");
		this.gp_cloud.addChildAt( img_bg, 0);
		// for( let i:number = 0; i < 2; i++){
		// 	let img_bg: eui.Image = new eui.Image("resource/assets/RedHat/bg.png");
		// 	img_bg.y = i * this.height ;
		// 	this.gp_cloud.addChildAt( img_bg, 0);
		// }

		//设置小红帽及所在云朵的初始位置
        // this.img_face_right.x = this.width / 2 - 30;
        this.img_face_right.y = 780;
		// this.img_cloud1.x = this.width / 2 - 100

		// 添加缓动动画，定义动画缓动时间
		var time = 2000;
		var time1 = 3000;
		// 绑定的对象发生变化时调用该方法
		var that = this;
		var funcChange = function(): void {
			// console.log(this.source, this.x);
			// 在egretProperties.json 中添加 game，需要再执行 egret build -e
		}
		egret.Tween.get(this.img_cloud2, { loop: true, onChange: funcChange, onChangeObj: this.img_cloud2 }).
            to({ x: 0 }, time, egret.Ease.sineIn).
            to({ x: 473 }, time, egret.Ease.sineIn);
		egret.Tween.get(this.img_gift1, { loop: true }).
            to({ x: 129 }, time, egret.Ease.sineIn).
            to({ x: 602 }, time, egret.Ease.sineIn);

		egret.Tween.get(this.img_cloud3, { loop: true }).
            to({ x: 505 }, time1, egret.Ease.sineIn).
            to({ x: 0 }, time1, egret.Ease.sineIn);
		egret.Tween.get(this.img_gift2, { loop: true }).
            to({ x: 554 }, time1, egret.Ease.sineIn).
            to({ x: 49 }, time1, egret.Ease.sineIn);

		egret.Tween.get(this.img_cloud4, { loop: true }).
            to({ x: 0 }, time1, egret.Ease.sineIn).
            to({ x: 431 }, time1, egret.Ease.sineIn);
		egret.Tween.get(this.img_gift3, { loop: true }).
            to({ x: 0 }, time1, egret.Ease.sineIn).
            to({ x: 431 }, time1, egret.Ease.sineIn);
	}
	private timerFunc() {
		// this.sc_cloud.viewport.scrollV = this.sc_cloud.viewport.scrollV + 10;
		// console.log(this.sc_cloud.viewport.scrollV);
	}
	// 返回首页
	private returnClick() {
		this.parent.removeChild(this);
	}
	// 向左移动
	private leftClick() {
        if(this.img_face_right.source == "face_right_png") {
            this.img_face_right.source = "face_left_png";
            this.img_face_right.x = this.img_face_right.x - 20;
			// 小红帽左侧掉落
			this.redHatDrop('left');

			this.redHatGift("walk");
        }else {
            this.img_face_right.x = this.img_face_right.x - 20;
			// 小红帽左侧掉落
			this.redHatDrop('left');

			this.redHatGift("walk");
        }
	}
	// 向上跳起
	private upClick() {
		var face_where = this.img_face_right.source;
        this.img_face_right.source = "face_me_png";

		// 跳起及落下的动作
		egret.Tween.get(this.img_face_right).
            to({ y: this.img_face_right.y - 330 }, 700, egret.Ease.sineOut).
            to({ y: this.img_face_right.y - 250 }, 400, egret.Ease.sineOut).
			wait(1).call(this.pauseTweens, this, [face_where]);// 设置延时，设置回调函数及作用域，用于侦听动画完成;
	}
	// 暂停某个对象上的全部 Tween 动画
    private pauseTweens(face_where):void {
		egret.Tween.pauseTweens(this.img_cloud2);
		egret.Tween.pauseTweens(this.img_gift1);
		this.img_face_right.source = face_where;

		// 判断小红帽是否落在云上
		if((this.img_face_right.x + this.img_face_right.width / 2) > this.img_cloud2.x && (this.img_face_right.x + this.img_face_right.width / 2) < (this.img_cloud2.x + this.img_cloud2.width)) {
			console.log("恭喜，小红帽落在了云上！");

			this.redHatGift("jump");
		}else {
			console.log("很遗憾，小红帽没落在云上！");
			this.resumeTweens();
			egret.Tween.get(this.img_face_right).
				to({ rotation: 720, y: this.img_face_right.y + 750 }, 1000 ,egret.Ease.sineIn);
		
			// 游戏结束
			this.addChild(GameOver.getInstance());
		}
    }
	// 恢复某个对象上的全部 Tween 动画
    private resumeTweens():void {
		egret.Tween.resumeTweens(this.img_cloud2);
		egret.Tween.resumeTweens(this.img_gift1);
    }
	// 判断小红帽和 gift 的位置关系
	private redHatGift(from) {
		// 判断小红帽是否落在云上恰好又落在了 gift 上
		if(((this.img_face_right.x + this.img_face_right.width - 10) < (this.img_gift1.x + this.img_gift1.width) && (this.img_face_right.x + this.img_face_right.width - 10) > this.img_gift1.x)
				|| ((this.img_face_right.x + 10) > this.img_gift1.x && (this.img_face_right.x + 10) < (this.img_gift1.x + this.img_gift1.width))) {
			if(from == "walk") {
				this.img_gift1.x = 0;
				this.img_gift1.width = 0;
				this.img_score.source = "score2_png";
				this.score = this.score + 15;
			}else if(from == "jump") {
				this.img_gift1.x = 0;
				this.img_gift1.width = 0;
				this.img_score.source = "score3_png";
				this.score = this.score + 20;
			}
		}else {
			if(from == "jump") {
				this.img_score.source = "score1_png";
				this.score = this.score + 5;
			}
		}

		// 加分完成，消除加分的显示
		egret.setTimeout(function() {
			this.img_score.source = "";
		}, this, 1200);
	}
	// 向右移动
	private rightClick() {
        if(this.img_face_right.source == "face_left_png") {
            this.img_face_right.source = "face_right_png";
            this.img_face_right.x = this.img_face_right.x + 20;
			// 小红帽右侧掉落
			this.redHatDrop('right');

			this.redHatGift("walk");
        }else {
            this.img_face_right.x = this.img_face_right.x + 20
			// 小红帽右侧掉落
			this.redHatDrop('right')

			this.redHatGift("walk");
        }
	}
	//小红帽旋转掉落
	private redHatDrop(direction):void {
		if(direction == 'left') {
			//小红帽从左边旋转掉落
			if((this.img_face_right.x + this.img_face_right.width / 2) < this.img_cloud2.x) {
				egret.Tween.get(this.img_face_right).
					// to({ y: this.img_face_right.y + 117 }, 300, egret.Ease.sineOut).
					to({ rotation: 720, y: this.img_face_right.y + 1000 }, 1200 ,egret.Ease.sineIn);
				this.addChild(GameOver.getInstance())
			
				// 通过深度值获取子对象来设置分数
				var gameOver: egret.DisplayObject = GameOver.getInstance().getChildAt(1).parent;
				gameOver.total_score.text = this.score;
            }
		}else if(direction == 'right') {
			//小红帽从右边旋转掉落
			if((this.img_face_right.x + this.img_face_right.width / 2) > (this.img_cloud2.x + this.img_cloud2.width)) {
				egret.Tween.get(this.img_face_right).
					// to({ y: this.img_face_right.y + 117 }, 300, egret.Ease.sineOut).
					to({ rotation: 720, y: this.img_face_right.y + 1000 }, 1200 ,egret.Ease.sineIn);
				this.addChild(GameOver.getInstance())
			
				// 通过深度值获取子对象来设置分数
				var gameOver: egret.DisplayObject = GameOver.getInstance().getChildAt(1).parent;
				gameOver.total_score.text = this.score;
            }
		}
	}
}