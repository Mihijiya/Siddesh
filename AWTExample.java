import java.awt.*;
import java.awt.event.*;

public class AWTExample extends Frame implements ActionListener {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Button btnA, btnB;
    Label label;

    AWTExample() {
        setLayout(new FlowLayout());

        btnA = new Button("A");
        btnB = new Button("B");
        label = new Label("Click a button");

        add(btnA);
        add(btnB);
        add(label);

        btnA.addActionListener(this);
        btnB.addActionListener(this);

        setSize(400, 200);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnA) {
            label.setText("Name: Mihika | Course: BTech | Roll: 123 | College: MIT");
        } else {
            label.setText("Previous Semester CGPA: 8.5");
        }
    }

    public static void main(String[] args) {
        new AWTExample();
    }
}
