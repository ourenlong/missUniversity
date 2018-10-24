package action;

import java.sql.SQLException;

import dao.AdministratorDao;
import modle.Administrator;

public class AdministratorAction {

	public void addAdministratorAction(String administrator_Account ,
			String administrator_Password ,String administrator_Root ){
		
		Administrator administrator=new Administrator(administrator_Account ,
				administrator_Password ,administrator_Root);
		AdministratorDao administratorDao=new AdministratorDao();
		try {
			administratorDao.addAdministratorDao(administrator);
		} catch (SQLException e) {
		
			e.printStackTrace();
		}
	}
	
	
	public void delAdministratorAction(String administrator_Account ,
			String administrator_Password ,String administrator_Root ){
		Administrator administrator=new Administrator(administrator_Account ,
				administrator_Password ,administrator_Root);
		AdministratorDao administratorDao=new AdministratorDao();
		administratorDao.delAdministratorDao( administrator);
	}
	
	
	public void motifyAdministratorAction(String administrator_Account ,
			String administrator_Password ,String administrator_Root ){
		Administrator administrator=new Administrator(administrator_Account ,
				administrator_Password ,administrator_Root);
		AdministratorDao administratorDao=new AdministratorDao();
		administratorDao.modifyAdministratorDao(administrator);
	}
	
	
	public void quryAdministratorAction(String administrator_Account ,
			String administrator_Password ,String administrator_Root ){
		Administrator administrator=new Administrator(administrator_Account ,
				administrator_Password ,administrator_Root);
		AdministratorDao administratorDao=new AdministratorDao();
		administratorDao.quryAdministratorDao(administrator);
	}
	
	
	
	
}
