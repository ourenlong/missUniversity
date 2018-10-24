package modle;

public class Video {


	   
	   
	   private String Video_Num;
	private String Video_Title;
	private String Video_Path;
	private String Video_Content;
	private String Video_Comment;
	public String getVideo_Num() {
		return Video_Num;
	}
	public void setVideo_Num(String video_Num) {
		Video_Num = video_Num;
	}
	public String getVideo_Title() {
		return Video_Title;
	}
	public void setVideo_Title(String video_Title) {
		Video_Title = video_Title;
	}
	public String getVideo_Path() {
		return Video_Path;
	}
	public void setVideo_Path(String video_Path) {
		Video_Path = video_Path;
	}
	public String getVideo_Content() {
		return Video_Content;
	}
	public void setVideo_Content(String video_Content) {
		Video_Content = video_Content;
	}
	public String getVideo_Comment() {
		return Video_Comment;
	}
	public void setVideo_Comment(String video_Comment) {
		Video_Comment = video_Comment;
	}
	public Video(String video_Num, String video_Title, String video_Path, String video_Content, String video_Comment) {
		super();
		Video_Num = video_Num;
		Video_Title = video_Title;
		Video_Path = video_Path;
		Video_Content = video_Content;
		Video_Comment = video_Comment;
	}
	
	
	
}
