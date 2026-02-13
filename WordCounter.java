import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class WordCounter extends JFrame implements ActionListener {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	JTextArea textArea;
    JButton button;
    JLabel result;

    WordCounter() {
        setTitle("Word & Character Counter");
        setLayout(new FlowLayout());

        textArea = new JTextArea(5, 20);
        button = new JButton("Count");
        result = new JLabel("Result will appear here");

        add(textArea);
        add(button);
        add(result);

        button.addActionListener(this);

        setSize(300, 300);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e) {
        String text = textArea.getText();

        int characters = text.length();
        int words = text.trim().isEmpty() ? 0 : text.trim().split("\\s+").length;

        result.setText("Words: " + words + " | Characters: " + characters);
    }

    public static void main(String[] args) {
        new WordCounter();
    }
}
