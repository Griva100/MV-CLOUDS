// 11."Reverse Decimal Number.
// Ex. Input : 123.45
// Ouput : 453.21"
import java.util.Scanner;
public class Rev_decimal_num_11 {
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a decimal number: ");
        float num = input.nextFloat();
        String n = Float.toString(num);

        int index = n.indexOf(".");
        if (index == -1)
            System.out.println(n + ".0 Reversed: .0" + n);
        else {
            String left = n.substring(0, index);
            String right = n.substring(index+1);
            printRev(right);
            System.out.print(".");
            printRev(left);
        }
        input.close();
    }
            public static void printRev(String s){
                if (s.length() == 0) return;
                printRev(s.substring(1));
                System.out.print(s.charAt(0));
            }
}
