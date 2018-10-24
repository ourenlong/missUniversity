package modle;

public class Image {


	   
	   private String Image_Num;
	   private String Image_Title;
	   private String Image_Path;
	   private String image_content;
	public String getImage_Num() {
		return Image_Num;
	}
	public void setImage_Num(String image_Num) {
		Image_Num = image_Num;
	}
	public String getImage_Title() {
		return Image_Title;
	}
	public void setImage_Title(String image_Title) {
		Image_Title = image_Title;
	}
	public String getImage_Path() {
		return Image_Path;
	}
	public void setImage_Path(String image_Path) {
		Image_Path = image_Path;
	}
	public String getImage_content() {
		return image_content;
	}
	public void setImage_content(String image_content) {
		this.image_content = image_content;
	}
	public Image(String image_Num, String image_Title, String image_Path, String image_content) {
		super();
		Image_Num = image_Num;
		Image_Title = image_Title;
		Image_Path = image_Path;
		this.image_content = image_content;
	}
	   
}
