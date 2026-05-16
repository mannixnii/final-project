import java.util.Scanner;

public class PT6BTagaan {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] numbers = new int[15];

        // Input numbers
        System.out.println("Enter 15 integers:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Number " + (i + 1) + ": ");
            numbers[i] = sc.nextInt();
        }
        // Ask for the target number
        System.out.print("\nEnter target number: ");
        int target = sc.nextInt();
        
        // Count frequency
        int count = 0;
        for (int num : numbers) {
            if (num == target) {
                count++;
            }
        }
        System.out.println("The number " + target + " appears " + count + " time(s).");

        sc.close();
    }
}

