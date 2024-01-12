// 3. Write a program to find the Second biggest integer value in the given list of
// values.[98,32,72,94,75,73,92,36,28,34].

import java.util.List;
public class Second_biggest_int_3{
    public static void main(String[] args) {
        List<Integer> numbers=List.of(98,32,72,94,75,73,92,36,28,34);
        int max = numbers.get(0);
        int secondMax = numbers.get(1);
        for (var number : numbers) {
            if (number > max) {
                secondMax = max;
                max = number;
            } else if (number > secondMax && number != max) {
                secondMax = number;
            }
        }
        System.out.println("The second largest number is " + secondMax);
    }
}