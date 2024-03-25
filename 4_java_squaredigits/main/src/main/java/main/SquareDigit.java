package main;
public class SquareDigit {
  public int squareDigits(int n) {
    String digitsInString = String.valueOf(n);
    String[] digitsInStringArray = digitsInString.split("");

    String squares = "";

    for (int i = 0; i < digitsInStringArray.length; i++) {
      int temp = Integer.parseInt(digitsInStringArray[i]);
      squares += (int) Math.pow(temp, 2);
    }

    return Integer.parseInt(squares);
  }

  public static void main(String[] args) {
    SquareDigit sd = new SquareDigit();

    System.out.println(sd.squareDigits(9119));
  }
}