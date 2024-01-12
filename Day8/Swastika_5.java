// 5. Write a program to display the below given structure as a output.

public class Swastika_5 {

    public static void main(String[] args) {
        int rows =9;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows; j++) { 
                if (i == rows / 2 || j == rows / 2 || (i == 0 && j >= rows / 2) || (i == rows - 1 && j <= rows / 2)
                        || (j == 0 && i <= rows / 2) || (j == rows - 1 && i >= rows / 2)) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }


    }
}