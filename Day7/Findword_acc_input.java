// Find the word according to input.
// Ex. String input: I love Java
//     number input : 3
//     Ouput : Java "

import java.util.Scanner;

public class Findword_acc_input {
    public static void main(String args[]){
        Scanner Obj1 = new Scanner(System.in);
        System.out.println("Enter the String:"); 
        String str = Obj1.nextLine(); 
        System.out.println("Enter the Number for finding word in that input number:"); 
        int num = Obj1.nextInt(); 
        String[] words = str.split(" "); 
        if (num > words.length) {
            System.out.println("Error! The sentence has only "+words.length+" words."); 
        }
        else{
            System.out.println("At position "+num+" word " + words[num-1] + " is printed in the string " + str);
        } 
        Obj1.close();
    }   
}