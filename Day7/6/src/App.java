// Write a program for Multilevel Inheritance using java programming language.
public class App {
    public static void main(String[] args){
        c objC = new c();
        objC.display_a();
        objC.display_c();
        objC.display_b();
    }
}

class a{
    public void display_a(){
        System.out.println("I am an object of Class A");
    }
}

class b extends a{
    public void  display_b(){
        System.out.println("I am an Object of Class B and I can call methods from Class A.");
    }
}

class c extends b{
    public void display_c(){
        System.out.println("I am an object of Class C and I can call methods from Class A and Class B");
    }
        
}