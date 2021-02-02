package study;

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
    	Fruits kind = new Fruits();
    	kind.printFruits("レモン", 20);

//    	FruitsConstants count = new FruitsConstants();
//    	count.printFruits();
    }
}