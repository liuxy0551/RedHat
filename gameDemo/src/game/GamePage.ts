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
	public btn_return:eui.Button;
	public btn_left:eui.Button;
	public btn_up:eui.Button;
	public btn_right:eui.Button;

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

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	
	// 自定义初始化函数
	private init() {
		// 给每个按钮绑定点击事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnClick,this)
		this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leftClick,this)
		this.btn_up.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upClick,this)
		this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rightClick,this)

		// scroller  关闭水平方向滚动
		this.sc_cloud.scrollPolicyH = eui.ScrollPolicy.OFF;

		//创建icon的group添加到scroller上
		let group:eui.Group = new eui.Group();
		this.gp_cloud.addChild(group);
		group.width = 640;
		group.height = 0;

		// 填充背景图
		for( let i:number = 0; i < 2; i++){
			let img_bg:eui.Image = new eui.Image("resource/assets/RedHat/bg.png");
			img_bg.y = i * this.height ;
			this.gp_cloud.addChildAt( img_bg,0);
		}

		//设置小红帽及所在云朵的初始位置
        // this.img_face_right.x = this.width / 2 - 30;
        this.img_face_right.y = 780;
		// this.img_cloud1.x = this.width / 2 - 100

        // console.log("this.img_cloud1", this.img_cloud1.x, this.img_cloud1.y)

		// 添加缓动动画
		// var shp:egret.Shape = new egret.Shape();
		// shp.graphics.beginFill( 0x00ff00 );
        // shp.graphics.drawRect( 0, 0, 100, 100 );
        // shp.graphics.endFill();
        // shp.x = 50;
        // this.addChild( shp );
        // var tw = egret.Tween.get( shp );
        // tw.to( {x:150}, 1000 );

		// 定义动画缓动时间
		var time = 2000;
		var time1 = 3000;

		egret.Tween.get(this.img_cloud2, { loop: true }).
            to({ x: 0 }, time, egret.Ease.sineIn).
            to({ x: 485 }, time, egret.Ease.sineIn);
		egret.Tween.get(this.img_gift1, { loop: true }).
            to({ x: 108 }, time, egret.Ease.sineIn).
            to({ x: 593 }, time, egret.Ease.sineIn);

		egret.Tween.get(this.img_cloud3, { loop: true }).
            to({ x: 473 }, time1, egret.Ease.sineIn).
            to({ x: 0 }, time1, egret.Ease.sineIn);
		egret.Tween.get(this.img_gift2, { loop: true }).
            to({ x: 538 }, time1, egret.Ease.sineIn).
            to({ x: 65 }, time1, egret.Ease.sineIn);

		egret.Tween.get(this.img_cloud4, { loop: true }).
            to({ x: 0 }, time1, egret.Ease.sineIn).
            to({ x: 431 }, time1, egret.Ease.sineIn);
		egret.Tween.get(this.img_gift3, { loop: true }).
            to({ x: 0 }, time1, egret.Ease.sineIn).
            to({ x: 431 }, time1, egret.Ease.sineIn);
	}

	private returnClick() {
		// this.parent.removeChild(this);

		console.log("img_cloud1+", this.img_cloud1.x);
		console.log("img_cloud2-", this.img_cloud2.x);
		console.log("img_cloud3+", this.img_cloud3.x);
		console.log("img_cloud4-", this.img_cloud4.x);
		// this.img_cloud1.x = this.img_cloud1.x + 50;

		this.img_cloud2.x = this.img_cloud2.x - 50;
		this.img_gift1.x = this.img_gift1.x - 50;

		this.img_cloud3.x = this.img_cloud3.x + 50;
		this.img_gift2.x = this.img_gift2.x + 50;

		this.img_cloud4.x = this.img_cloud4.x - 50;
		this.img_gift3.x = this.img_gift3.x - 50;
	}
	private leftClick() {
        console.log("this.img_face_right", this.img_face_right.x)
        if(this.img_face_right.source == "face_right_png") {
            this.img_face_right.source = "face_left_png"
            this.img_face_right.x = this.img_face_right.x - 20
        }else {
            this.img_face_right.x = this.img_face_right.x - 20
        }
	}
	private upClick() {
        this.img_face_right.source = "face_me_png"
        this.img_face_right.y = this.img_face_right.y - 330;
	}
	private rightClick() {
        console.log("this.img_face_right", this.img_face_right.x)
        if(this.img_face_right.source == "face_left_png") {
            this.img_face_right.source = "face_right_png"
            this.img_face_right.x = this.img_face_right.x + 20
        }else {
            this.img_face_right.x = this.img_face_right.x + 20
        }
	}
}