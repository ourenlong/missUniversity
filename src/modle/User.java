package modle;

public class User {
	
	   private String User_Account;
	 private String User_Password;
	 private String User_Id;
	 private String User_Tel;
	 private String User_Image;
	public String getUser_Account() {
		return User_Account;
	}
	public void setUser_Account(String user_Account) {
		User_Account = user_Account;
	}
	public String getUser_Password() {
		return User_Password;
	}
	public void setUser_Password(String user_Password) {
		User_Password = user_Password;
	}
	public String getUser_Id() {
		return User_Id;
	}
	public void setUser_Id(String user_Id) {
		User_Id = user_Id;
	}
	public String getUser_Tel() {
		return User_Tel;
	}
	public void setUser_Tel(String user_Tel) {
		User_Tel = user_Tel;
	}
	public String getUser_Image() {
		return User_Image;
	}
	public void setUser_Image(String user_Image) {
		User_Image = user_Image;
	}
	public User(String user_Account, String user_Password, String user_Id, String user_Tel, String user_Image) {
		super();
		User_Account = user_Account;
		User_Password = user_Password;
		User_Id = user_Id;
		User_Tel = user_Tel;
		User_Image = user_Image;
	}

	 

}
