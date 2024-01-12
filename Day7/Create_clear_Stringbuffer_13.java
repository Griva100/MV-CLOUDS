// Write a program to create a StringBuffer and Clear the StringBuffer using different methods of that.

public class Create_clear_Stringbuffer_13{
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();  
        
        sb.append("Append something");
        System.out.println("After Using append:" + sb);

        sb.setLength(5);
        System.out.println("After Using setLength(5): " + sb);

        sb.delete(1,sb.length());
        System.out.println("After Using delete: " + sb);
    
        sb.append("Append some line");
        System.out.println("After Using append:" + sb);

        System.out.println(sb.capacity());
    }    
}