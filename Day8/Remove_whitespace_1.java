// 1. Write a program to remove whitespaces from a given String. (Without using any
// inbuilt functions) String - "WELCOME TO MV CLOUDS"

import java.util.Scanner;

public class Remove_whitespace_1 {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the string:");
        String str=sc.nextLine();
        String check=" ";
        StringBuilder sb=new StringBuilder();

        for(int i=0;i<str.length();i++){
            if(str.charAt(i)!=check.charAt(0)){ 
                sb.append(str.charAt(i));
            } 
        }
        System.out.println("Output: "+sb);
        sc.close();
    }
}
