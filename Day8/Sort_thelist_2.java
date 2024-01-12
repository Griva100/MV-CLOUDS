// 2. Write a program to sort the given list of characters in alphabetical order. ()

import java.util.Arrays;
import java.util.List;
import java.util.Collections;

public class Sort_thelist_2{
    public static void main(String args[]){
        List<Character> chList=Arrays.asList('b', 'a', 'c', 'd');
        System.out.println("Original List: "+chList);
        Collections.sort(chList);
        System.out.println("\nSorted List Of Characters In Alphabetical Order :\n" + chList);
    }
}