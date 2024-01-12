// 15. Write a program to check whether the input number is ArmStrong number or not.

import java.util.Scanner;
import java.lang.Math;  
public class ArmStrong_number_15 {

    public static void main(String[] args) {   
        Scanner sc= new Scanner(System.in);  
        System.out.print("Enter the number: ");   
        int num=sc.nextInt();  
        if(isArmstrong(num))  
        {  
        System.out.print("Armstrong ");  
        }  
        else   
        {  
        System.out.print("Not Armstrong ");  
        }  
        sc.close();
    }

    static boolean isArmstrong(int num){
        int temp = num;
        int sum = 0, last=0,digit=0;
        while (temp!=0) {
            temp = temp/10;
            digit++;
        }
        while (temp != 0) {
            last = temp % 10;
            sum += Math.pow(last,digit);
            temp /= 10;
        }
        return temp == sum;
    }
}