class RankingList extends eui.Component implements  eui.UIComponent {

	public btn_return:eui.Button;

    private static shared:RankingList;
    public static getInstance(){
        if( !RankingList.shared){
            RankingList.shared =  new RankingList();
        }
        return RankingList.shared;
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
		this.init();
	}
	
	// 自定义初始化函数
	private init() {
		
		// 给每个按钮绑定点击事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnClick,this)
	}

	private returnClick() {
		console.log('RankingList的returnClick')
        let begin = new Begin();
        this.addChild(begin);
	}
}