package check;

public class Check {
//	~~~~~課題①のフィールド変数
	private static String firstName = "鈴木";
	private static String lastName = "航平";

	public static void main(String[] args) {

//		~~~~~課題②の出力
		printName();

//		~~~~~課題③
		Pet pet = new Pet("java吉", "hoge");
		pet.introduce();

		RobotPet petR = new RobotPet("R2D2", "ルーク");
		petR.introduce();

	}

//	~~~~~課題②メソッド
	private static void printName() {
		System.out.println("printNameメソッド→" + firstName + " " + lastName);
	}

}
