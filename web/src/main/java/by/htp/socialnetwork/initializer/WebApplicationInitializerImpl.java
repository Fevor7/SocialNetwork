package by.htp.socialnetwork.initializer;

import by.htp.socialnetwork.config.WebConfig;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

public class WebApplicationInitializerImpl implements WebApplicationInitializer {

    @Override public void onStartup(ServletContext servletContext) throws ServletException {
        AnnotationConfigWebApplicationContext configApplicationContext = new AnnotationConfigWebApplicationContext();
        configApplicationContext.register(WebConfig.class);
        configApplicationContext.setServletContext(servletContext);

        ServletRegistration.Dynamic servletRegistration = servletContext.addServlet("dispatcherServlet",
                new DispatcherServlet(configApplicationContext));
        servletRegistration.setLoadOnStartup(1);
        servletRegistration.addMapping("/");
    }
}
