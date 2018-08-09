class Task extends eui.Component implements  eui.UIComponent {
	
	public btn_return:eui.Button;
	public btn_to_share:eui.Button;


	public constructor() {
		super();
	}

	// 添加皮肤的时候自动调用该函数
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	// 组件加载完毕之后调用该函数
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init()
	}
	
	// 自定义初始化函数
	private init() {

		// 给每个按钮绑定点击事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnClick,this)
		this.btn_to_share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toShare,this)
	}

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

	private returnClick() {
		console.log('Task的returnClick')

        let begin = new Begin();
        this.addChild(begin);
	}
	private async toShare() {
        // let begin = new Begin();
        // this.addChild(begin);
		
		console.log('Task的toShare')

        await this.loadResource()
        const showShareMenu = await platform.showShareMenu();
        console.log(showShareMenu);
	}
}