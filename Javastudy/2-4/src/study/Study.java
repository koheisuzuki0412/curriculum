package study;
//①FruitsConstants.javaをインポートしなさい。
//import constants.FruitsConstants;
//②Fruits.javaをインポートしなさい。
import fruits.Fruits;

/**
 * 本課題では、基本的なJavaの構造と、importについて理解を深めていきましょう。
 *
 * 問①〜問③まであります。
 * 全て回答し、課題にある画像と同じ表示になるようにしてください。
 *
 */
public class Study {

    public static void main(String[] args) {

        /* ③ Fruits.javaのprintFruitsメソッドを呼び出しなさい。
         *     また、課題の画像と同じ表示になるように
         *     printFruitsの引数にはFruitsConstantsから呼び出した値を設定してください。
         */
    	Fruits fruits = new Fruits();
    	Fruits.printFruits("レモン", 20);
//    	System.out.println();
    	//    	printFruits("レモン", 20);
//    	Fruits.printFruits(x, y);

//    	FruitsConstants fruits = new FruitsConstants();
//    	String x = fruits.FRUITS_LEMON_04;
//    	FruitsConstants count = new FruitsConstants();
//    	Integer y = count.FRUITS_COUNT_20;

//    	Fruits.printFruits(FruitsConstants("レモン", 20));
//    	System.out.println(printFruits(FruitsConstants("レモン",20)));
//    	FruitsConstants("レモン");
//    	Fruits.printFruits("レモン", 20);
//    	System.out.println(printFruits);
    }

}