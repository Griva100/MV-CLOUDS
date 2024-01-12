// 14. Write a code to show NullPointerException.

public class Show_NullPointerException_14{
    public static void main(String[] args) {
        String str = null;
        try {
            System.out.println(str.length());
            } catch (NullPointerException e) {
                System.out.println("Caught Exception: " + e.getMessage());
                } finally {
                    System.out.println("Finally block executed");
                    }
    }
}