// 16. "Create a function that accepts two arguments:the number of dice rolled, and the
// outcome of the roll. The function returns the number of possible combinations
// that could produce that outcome. The number of dice can vary from 1 to 6.
// Ex.
// User Input: 3 and 4.
// Output: 3
// // 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1
// User Input: 6 and 20.
// Output: 4221"

import java.util.Scanner;
public class dice_and_outcome_16 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Number of Dice(Between 1 to 6): ");
        int numberOfDice = sc.nextInt();
        System.out.print("Number of outcome you want: ");
        int outcome = sc.nextInt();
        
        if (numberOfDice < 1 || numberOfDice > 6 || outcome < numberOfDice || outcome > 6 * numberOfDice) {
            System.out.println("Please Enter correct Number of Dice and Outcome");
        }

        int combinations = getCombinations(numberOfDice, outcome);
        System.out.println("Number of combinations: " + combinations);

        sc.close();
    }
    static int getCombinations(int numberOfDice, int outcome){
        if (numberOfDice == 0 && outcome == 0) {
            return 1;
        }
        int combinations = 0;
 
        for (int i = 1; i <= 6; i++) {
            if (outcome - i >= 0) {
                combinations += getCombinations(numberOfDice - 1, outcome - i);
            }
        }

        return combinations;
    }           
}