package modle;

public class Videobelong {

	   private String Video_Num;
	private String PMessages_Num;
	public String getVideo_Num() {
		return Video_Num;
	}
	public void setVideo_Num(String video_Num) {
		Video_Num = video_Num;
	}
	public String getPMessages_Num() {
		return PMessages_Num;
	}
	public void setPMessages_Num(String pMessages_Num) {
		PMessages_Num = pMessages_Num;
	}
	public Videobelong(String video_Num, String pMessages_Num) {
		super();
		Video_Num = video_Num;
		PMessages_Num = pMessages_Num;
	}
	
	
	
}
