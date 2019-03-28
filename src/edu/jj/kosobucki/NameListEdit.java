package edu.jj.kosobucki;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.google.gson.Gson;

@WebServlet(name = "NameListEdit")

public class NameListEdit extends HttpServlet {

    private Pattern namePattern;
    private Pattern lastPattern;
    private Pattern emailPattern;
    private Pattern phonePattern;
    private Pattern birthdayPattern;
    private int checker = 1;

    public NameListEdit() {

        namePattern = Pattern.compile("^[A-Za-z]{1,30}$");
        lastPattern = Pattern.compile("^[A-Za-z]{1,30}$");
        emailPattern = Pattern.compile("^[A-Za-z]{1,30}@[A-Za-z]{1,10}[.][a-z]{3,3}$");
        phonePattern = Pattern.compile("^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]");
        birthdayPattern = Pattern.compile("^[0-9]{4,4}-[0-1][0-9]-[0-3][1-9]$");

    }

    protected void doPost (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Just confirm we are calling the servlet we think we are
        //System.out.println("JSON Post");

        // Open the request for reading. Read in each line, put it into a string.
        // Yes, I think there should be an easier way.
        java.io.BufferedReader in = request.getReader();
        String requestString = new String();
        for (String line; (line = in.readLine()) != null; requestString += line) ;

        // Output the string we got as a request, just as a check
        //System.out.println(requestString);

        String id = request.getParameter("+fromJson.getId()");
        String name = request.getParameter("+fromJson.getFirstName()");
        String last = request.getParameter("+fromJson.getLastName()");
        String email = request.getParameter("+fromJson.getEmailName()");
        String phone = request.getParameter("+fromJson.getPhoneName()");
        String birthday = request.getParameter("+fromJson.getBirthdayName()");

        // Great! Now we want to use GSON to parse the object, and pop it into our business object. Field
        // names have to match. That's the magic.
        Gson gson = new Gson();
        AddEntry fromJson = gson.fromJson(requestString, AddEntry.class);

        // Make sure our field was set.
        //System.out.println("Object test: "+fromJson.getFirstName() +fromJson.getLastName() +fromJson.getEmailName());

        Matcher n = namePattern.matcher(name);
        if (n.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            checker = 0;
        }

        Matcher l = lastPattern.matcher(last);
        if (l.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            checker = 0;
        }

        Matcher e = emailPattern.matcher(email);
        if (e.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            checker = 0;
        }

        Matcher p = phonePattern.matcher(phone);
        if (p.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            checker = 0;
        }

        Matcher b = birthdayPattern.matcher(birthday);
        if (b.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            checker = 0;
        }

        if(checker != 0 && id != null) {
            PersonDAO.updater(fromJson);
        } else
            PersonDAO.adder(fromJson);
    }
}
