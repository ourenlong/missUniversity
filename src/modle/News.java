package modle;

import java.sql.Timestamp;

public class News {
	private String News_Num;
		private String News_Title;
		private String News_Author;
		private Timestamp News_Time;
		private String News_Content;
		private String News_Image;
		public String getNews_Num() {
			return News_Num;
		}
		public void setNews_Num(String news_Num) {
			News_Num = news_Num;
		}
		public String getNews_Title() {
			return News_Title;
		}
		public void setNews_Title(String news_Title) {
			News_Title = news_Title;
		}
		public String getNews_Author() {
			return News_Author;
		}
		public void setNews_Author(String news_Author) {
			News_Author = news_Author;
		}
		public Timestamp getNews_Time() {
			return News_Time;
		}
		public void setNews_Time(Timestamp news_Time) {
			News_Time = news_Time;
		}
		public String getNews_Content() {
			return News_Content;
		}
		public void setNews_Content(String news_Content) {
			News_Content = news_Content;
		}
		public String getNews_Image() {
			return News_Image;
		}
		public void setNews_Image(String news_Image) {
			News_Image = news_Image;
		}
		public News(String news_Num, String news_Title, String news_Author, Timestamp news_Time, String news_Content,
				String news_Image) {
			super();
			News_Num = news_Num;
			News_Title = news_Title;
			News_Author = news_Author;
			News_Time = news_Time;
			News_Content = news_Content;
			News_Image = news_Image;
		}
		
		
	
}
