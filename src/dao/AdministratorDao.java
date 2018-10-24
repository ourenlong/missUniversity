package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import conn.Conn;
import modle.Administrator;

public class AdministratorDao {

	Conn conn;
	


	public void addAdministratorDao(Administrator administrator) throws SQLException{
		conn = new Conn();
			  try {

				 
				  String sql="insert into administrator(administrator_Account,administrator_Password,administrator_Root) values('"+administrator.getAdministrator_Account()+"','"+
				  administrator.getAdministrator_Password()+"','"+administrator.getAdministrator_Root()+"')";
				PreparedStatement prep = conn.connection.prepareStatement(sql);
		  		boolean rs = prep.execute();
		  		System.out.println(rs);

		} catch (SQLException e) {
			
			e.printStackTrace();
		}
			  conn.connection.close();
		
	}
	
	
	
	
	public void delAdministratorDao(Administrator administrator){
		conn = new Conn();
		  try {

			 
			  String sql="delete from Administrator where Administrator_Account='"+administrator.getAdministrator_Account()+"'";
			PreparedStatement prep = conn.connection.prepareStatement(sql);
	  		boolean rs = prep.execute();
	  		System.out.println(rs);

	} catch (SQLException e) {
		
		e.printStackTrace();
	}
		  try {
			conn.connection.close();
		} catch (SQLException e) {

			e.printStackTrace();
		}
	}
	
	public void modifyAdministratorDao(Administrator administrator ){
		conn = new Conn();
		  try {
			
			  String sql= "update Administrator set Administrator_Account='"+administrator.getAdministrator_Account()+"',Administrator_Password='"+
			  administrator.getAdministrator_Password()+"',Administrator_Root='"+administrator.getAdministrator_Root()+"' where Administrator_Account='"+administrator.getAdministrator_Account()+"'";
			PreparedStatement prep = conn.connection.prepareStatement(sql);
	  		boolean rs = prep.execute();
	  		System.out.println(rs);

	} catch (SQLException e) {
		
		e.printStackTrace();
	}
		  try {
			conn.connection.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void quryAdministratorDao(Administrator administrator){
		
		conn = new Conn();
		  try {
			  //对应第3部
			 
			  String sql= "select* from Administrator where administrator_account='"+administrator.getAdministrator_Account()+
					  "' or administrator_Password='"+administrator.getAdministrator_Password()+"' or administrator_Root='"+administrator.getAdministrator_Root()+"'";
			PreparedStatement prep = conn.connection.prepareStatement(sql);
			ResultSet rs = prep.executeQuery();
	  		System.out.println(rs);
			while(rs.next()){
				String sno = rs.getString(1);
				String name = rs.getString(2);
				String sex = rs.getString(3);
				
				
				System.out.println("学号："+sno+"姓名 "+name+"性别 "+sex+"分数 ");
			}
	} catch (SQLException e) {
		
		e.printStackTrace();
	}
		  try {
			conn.connection.close();
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		
	}
	
//  public static void main(String[] args) {
////	new AdministratorDao().delAdministratorDao("1");
//	//  new AdministratorDao().modifyAdministratorDao("2", new Administrator("5","4","3"));
//	  new AdministratorDao().quryAdministratorDao(new Administrator("4", "4", "9"));
//}

}
