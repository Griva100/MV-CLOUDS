// 12. Write a Java Program to Implement the functionality of multiple inheritance into
// the program.

public class Multiple_inheritance_12 {
    public static void main(String[] args) {
        Work w = new Work();
        w.duty();
        w.id();
        w.subject();
        w.name();
        w.attendance();
    }
}
interface teacher {
    void id();
    void duty();
    void subject();
}  

interface student{
    void name();
    void attendance();
}

class Work implements teacher,student{
    public void id(){
        System.out.println("Teacher ID is 01");
    }

    public void duty(){
        System.out.println("I am a Teacher.");
    }

    public void subject(){
        System.out.println("Teacher has 3 subject to study");
    }

    public void name(){
        System.out.println("Student Name is John Doe");
    }

    public void attendance(){
        System.out.println("John is present in Class");
    }
}