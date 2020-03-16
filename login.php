<?php 
include 'service.php';

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Rules Codes</title>
    
    <link rel="stylesheet" href="css/owl.carousel.css" type="text/css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    
  </head>
  <body>

  
  <div id="content-login" class="no-top no-bottom">
    <!-- section begin -->
    <section aria-label="section-login" class="full-height relative no-top no-bottom" data-stellar-background-ratio=".2" data-bgimage="url(images/background/6.jpg">

      <div class="overlay-bg t80">
          <div class="center-y fadeScroll relative" data-scroll-speed="4">
              <div class="container">
                  <div class="row">
                      <div class="col-md-4">
                          <form name="contactForm" id='login_form' class="form-border img-shadow" method="post" action='service_login.php'>
                              <div class="box-login padding40">
                                  <h3>Login to your account</h3>

                                  <div class="field-set">
                                      <label>Username</label>
                                      <input type='text' name='login_name' id='login_name' class="form-control" placeholder="">
                                  </div>


                                  <div class="field-set">
                                      <label>Password</label>
                                      <input type='password' name='login_pass' id='login_pass' class="form-control" placeholder="">
                                  </div>


                                  <div class="spacer-single"></div>

                                  <div id='submit' class="pull-left">
                                      <input type='submit' id='submit_login' value='Login' class="btn btn-custom color-2">
                                  </div>

                                  <div id='login_success' class='success'>Your message has been sent successfully.</div>
                                  <div id='login_fail_user' class='error'>Sorry, user tidak terdaftar.</div>
                                  <div id='login_fail_pass' class='error'>Sorry, password anda salah.</div>

                                  <div class="clearfix"></div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </section>
    <!-- section close -->
  </div>
    
    
  <script src="js/jquery.min.js"></script>
  <script src="js/validation.js"></script>
  <script src="js/jquery.waypoints.min.js"></script>
  <script src="js/owl.carousel.js"></script>
  <script type="text/Javascript" src="js/script.js"></script>
  </body>
</html>
