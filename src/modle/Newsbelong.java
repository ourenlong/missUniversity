package modle;

public class Newsbelong {
 
	   private String News_Num;
	private String PMessages_Num;
	public String getNews_Num() {
		return News_Num;
	}
	public void setNews_Num(String news_Num) {
		News_Num = news_Num;
	}
	public String getPMessages_Num() {
		return PMessages_Num;
	}
	public void setPMessages_Num(String pMessages_Num) {
		PMessages_Num = pMessages_Num;
	}
	public Newsbelong(String news_Num, String pMessages_Num) {
		super();
		News_Num = news_Num;
		PMessages_Num = pMessages_Num;
	}
	
	
	
	
}
