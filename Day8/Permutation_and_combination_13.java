// 13. Write a java program to calculate the permutation and combination of a 2 numbers.
 
import java.util.Scanner;

public class Permutation_and_combination_13 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Number for n:");
        int n=sc.nextInt();
        System.out.println("Enter the Number for r:");
        int r=sc.nextInt();

        System.out.println(n+"P"+r+" = "+permutation(n, r));
        System.out.println();
        System.out.println(n+"C"+r+" = "+combination(n, r));  
        sc.close();      
    }

    public static int factor(int n){
        if(n==0 || n==1){
            return 1;
        } 
        else{
            return n*factor(n-1);
        }
    }
    public static int  permutation(int n, int r) {
            return factor(n) / factor(n - r);
        }

    public static int  combination(int n, int r) {
            return factor(n) / (factor(r)*factor(n - r));
        }
    
}