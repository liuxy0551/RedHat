class Task extends eui.Component implements  eui.UIComponent {
	
	public btn_return:eui.Button;
	public btn_to_share:eui.Button;

    private static shared:Task;
    public static getInstance(){
        if( !Task.shared){
            Task.shared =  new Task();
        }
        return Task.shared;
    }

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

	private returnClick() {
		this.parent.removeChild(this);
	}
	private toShare() {
		platform.showShareMenu();
	}
}