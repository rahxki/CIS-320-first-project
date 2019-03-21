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

@WebServlet(name = "NameListDelete")

public class NameListDelete extends HttpServlet  {

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
        System.out.println(requestString);
        Gson gson = new Gson();
        Person idGet = gson.fromJson(requestString, Person.class);

        PersonDAO.remover(idGet);

    }

}
