// 14. Create a program to perform encryption and decryption of the given message.

public class Encryption_decryption_message_14{
    public static void main(String[] args) {
        String message = "Hello, this is a secret message!";

        String encryptedMessage = encrypt(message);
        System.out.println("Encrypted Message: " + encryptedMessage);

        String decryptedMessage = decrypt(encryptedMessage);
        System.out.println("Decrypted Message: " + decryptedMessage);
    }

    private static String encrypt(String message) {
        char[] chars = message.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            chars[i] = (char) (chars[i] ^ 1); 
        }
        return new String(chars);
    }

    private static String decrypt(String encryptedMessage) {
        return encrypt(encryptedMessage); 
    }
}