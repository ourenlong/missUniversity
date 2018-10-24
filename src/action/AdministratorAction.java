package action;

import modle.Administrator;

public class AdministratorAction {

	public Administrator setAdministratorAction(String administrator_Account ,
			String administrator_Password ,String administrator_Root ){
		
		Administrator administrator=new Administrator(administrator_Account ,
				administrator_Password ,administrator_Root);
		return administrator;
	}
	
}
