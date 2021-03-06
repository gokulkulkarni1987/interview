import java.util.Scanner;

class MaximalXOR {
  public static void main(String [] args) {
    Scanner scan = new Scanner(System.in);
    int L = scan.nextInt();
    int R = scan.nextInt();
    scan.close();
    
    int xored  = L ^ R;
    int significantBit = 31 - Integer.numberOfLeadingZeros(xored);
    System.out.println("Integer.numberOfLeadingZeros: " + Integer.numberOfLeadingZeros(xored) + ": " + significantBit);
    int result = (1 << (significantBit + 1)) - 1;

    System.out.println(result);
}
}