public class Cafe {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly. ";
        String readyMessage = ", your order is ready. ";
        String displayTotalMessage = "Your total is $";

        double mochaPrice = 4.5;
        double dripCoffee = 2.6;
        double latte = 2.5;
        double cappuccino = 3.7;
        double newTotal;

        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        // ** Your customer interaction print statements will go here ** //
        if (isReadyOrder1) {
            System.out.println(customer1 + readyMessage);
        } else {
            System.out.println(customer1 + pendingMessage);
        }

        // Noah's Order
        if (isReadyOrder4) {
            System.out.println(customer4 + readyMessage + displayTotalMessage + cappuccino);
        } else {
            System.out.println(customer4 + pendingMessage);
        }
        // Sam's Order
        System.out.println(customer2 + ", " + displayTotalMessage + (latte * 2));
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        } else {
            System.out.println(customer2 + pendingMessage);
        }
        // Fix Jimmy's Order
        System.out.println(customer3 + ", ordered a latte and the price is: $" + latte);
        System.out.println("But was charged for a drip coffee, which costs: $" + dripCoffee);
        newTotal = latte - dripCoffee;
        if (newTotal < 0) {
            System.out.println(customer3 + " owes: $" + newTotal);
        } else {
            System.out.println(customer3 + " needs back: $" + newTotal);
        }

    }
}
