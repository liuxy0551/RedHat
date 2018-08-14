class GameOver extends eui.Component implements  eui.UIComponent {

	public btn_again_game:eui.Button;
	public btn_to_share:eui.Button;
	public btn_ranking_list:eui.Button;
	public btn_ranking_list0:eui.Button;
	public total_score:eui.Label;

	// 单例模式
    private static shared:GameOver;
    public static getInstance(){
        if( !GameOver.shared){
            GameOver.shared =  new GameOver();
        }
        return GameOver.shared;
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

	}
	
}