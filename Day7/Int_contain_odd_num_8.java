// Write a program to check if a List of integers contains only odd numbers.

import java.util.List;

public class Int_contain_odd_num_8 {
    public static void main(String args[]){
        List<Integer> numbers=List.of(1, 3, 5, 7);  
        // int[] arr = {1, 3, 5, 7};
        boolean isOdd = true;
        for(int i=0;i>numbers.size();i++){
            if ((numbers.get(i) % 2) == 0){
                isOdd = false;
                break;
                }
            }
                System.out.println("Is the list contain only odd number? " + isOdd);
    }
}
