// Write a program to check if a List of integers contains only odd numbers.

import java.util.ArrayList;
import java.util.Scanner;

public class Int_contain_odd_num_8 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> numbers = new ArrayList<>();

        System.out.println("Enter numbers, separated by spaces: ");

        String input = sc.nextLine();
        String[] numbersArray = input.split(" ");

        for (String number : numbersArray) {
            numbers.add(Integer.parseInt(number));
        }

        System.out.println("The list of numbers is: " + numbers);
        
        boolean isOdd = true;
            for(int i=0;i>numbers.size();i++){
                if ((numbers.get(i) % 2) == 0){
                    isOdd = false;
                    break;
                    }
                }
            System.out.println("Is the list contain only odd number? --> " + isOdd);

        // List<Integer> numbers=List.of(1, 3, 5, 7);  
        // int[] arr = {1, 3, 5, 7};
        
        sc.close();
    }
}
