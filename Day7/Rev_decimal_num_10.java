// 10."Reverse Decimal Number.
// Ex. Input : 123.45
// Ouput : 453.21"

public class Rev_decimal_num_10 {
    public static void main(String args[]){
        String input = "123.45";

        int index = input.indexOf(".");
        if (index == -1)
            System.out.println(input + ".0 Reversed: .0" + input);
        else {
            String left = input.substring(0, index);
            String right = input.substring(index+1);
            System.out.print(right + ". ");
            printRev(left);
        }
    }
            public static void printRev(String s){
                int reverse = 0;
                int number = Integer.parseInt(s);
                while(number != 0)   
                {  
                int remainder = number % 10;  
                reverse = reverse * 10 + remainder;  
                number = number/10;  
                }  
            }
}
