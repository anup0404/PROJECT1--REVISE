import java.util.Scanner;

/**
 * A_Theatre_Square
 */
public class A_Theatre_Square {

    public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int a = sc.nextInt();

        int area1= n*m;
        int area2=a*a;

        int ans=(int)Math.ceil((double)area1/(double)area2);

 System.out.println(ans);
    
    }
}