// Write a program to swap two numbers without using a third variable.

public class Swap_without_var_7 {
    public static void main(String args[]){
        int a = 10;
        int b = 14;
        System.out.println("Before swapping:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);

        a = a+b;
        b = a-b;
        a = a-b;
        System.out.println("After swapping");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}
