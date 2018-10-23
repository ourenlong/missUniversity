package conn;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class Conn {
	//final �����޸ģ������ʼ��
  public final static String drivername = "com.mysql.jdbc.Driver";
  public final static String user = "root";
  public final static String password = "root";
  public final static String url = "jdbc:mysql://localhost:3306/gxa";
  
  public Connection connection;
  
  //���췽���� ����ͬ����û�з���ֵ��new �����ʱ�����,��ʼ���������úͳ�Ա����
  //ͼ�ν���Ҫ�����ݿⲢ����ɲ�ѯ
  //1.����exe
  //2.��д�������˿ں� �û��� ����� ����
  //3.��д��ѯ��䣨�¿���ѯ�༭����
  //4.ִ�в�ѯ�õ������ѡ�а�f8��
  //5.��ʾ���
  public Conn(){
	  try {
		Class.forName(drivername);//Class.forName��java������ƣ�һ�����ֿ��Ա��һ����Ͷ��󣬶�Ӧ��һ��
		connection = DriverManager.getConnection(url, user, password);//��Ӧ�ĵڶ���
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
  }
  
  public void getStudent(){
	  try {
		  //��Ӧ��3��
		PreparedStatement prep = connection.prepareStatement("select * from student");
		ResultSet rs = prep.executeQuery();
		while(rs.next()){
			String sno = rs.getString(1);
			String name = rs.getString(2);
			String sex = rs.getString(3);
			float score = rs.getFloat(10);
			
			System.out.println("ѧ�ţ�"+sno+"���� "+name+"�Ա� "+sex+"���� "+score);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
  }
  
  public static void main(String[] args) {
	new Conn().getStudent();
}
}
