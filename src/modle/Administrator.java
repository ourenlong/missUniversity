package modle;

public class Administrator {

	private String Administrator_Account;
	private String Administrator_Password;
	private String Administrator_Root;
	public String getAdministrator_Account() {
		return Administrator_Account;
	}
	public void setAdministrator_Account(String administrator_Account) {
		Administrator_Account = administrator_Account;
	}
	public String getAdministrator_Password() {
		return Administrator_Password;
	}
	public void setAdministrator_Password(String administrator_Password) {
		Administrator_Password = administrator_Password;
	}
	public String getAdministrator_Root() {
		return Administrator_Root;
	}
	public void setAdministrator_Root(String administrator_Root) {
		Administrator_Root = administrator_Root;
	}
	public Administrator(String administrator_Account, String administrator_Password, String administrator_Root) {
		super();
		Administrator_Account = administrator_Account;
		Administrator_Password = administrator_Password;
		Administrator_Root = administrator_Root;
	}
	

	
	
	
}
