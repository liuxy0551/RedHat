class Begin extends eui.Component implements  eui.UIComponent {

	public btn_game_rule:eui.Button;
	public btn_ranking_list:eui.Button;
	public btn_task:eui.Button;
	public btn_start_game:eui.Button;

    private static shared:Begin;
    public static getInstance(){
        if( !Begin.shared){
            Begin.shared =  new Begin();
        }
        return Begin.shared;
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
		this.btn_game_rule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameRuleClick,this)
		this.btn_ranking_list.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rankingListClick,this)
		this.btn_task.addEventListener(egret.TouchEvent.TOUCH_TAP,this.taskClick,this)
		this.btn_start_game.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGameClick,this)
	}

	private gameRuleClick() {
        let gameRule = new GameRule();
        this.addChild(gameRule);
	}
	private rankingListClick() {
        let rankingList = new RankingList();
        this.addChild(rankingList);
	}
	private taskClick() {
        let task = new Task();
        this.addChild(task);
	}
	private startGameClick() {
		console.log("开始游戏")
	}
}