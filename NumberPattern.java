public class NumberPattern {
    public static void main(String[] args) {

        int n = 5;

        for (int i = n; i >= 1; i--) {

            // Left side
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }

            // Spaces
            for (int s = 1; s <= 2 * (n - i); s++) {
                System.out.print(" ");
            }

            // Right side
            for (int j = i; j >= 1; j--) {
                System.out.print(j);
            }

            System.out.println();
        }
    }
}
