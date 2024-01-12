// 12. "Write a java program to reverse each word in a given string.
// (Ex. ""My name is Khan"" => ""Khan is name My"")"

import java.util.Scanner;

public class Reverse_each_word_12 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the string:");
        String str=sc.nextLine();
        String[] splitedwords=str.split(" ");
         System.out.println("Reverse each word in a given string");
        for(int i=splitedwords.length;i>0;i--){
           System.out.println(splitedwords[i-1] + " ");
        }
        sc.close();
    }
    
}