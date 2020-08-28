<?php
if (!isset($_COOKIE["cwlclan"]))
      echo '<div class="cookies_wrapper container px-0" id="cookies_wrapper">
        <div class="container">


            <div class="row">
              <div class="col-md" style="text-align: left;">
                <span>Diese Website verwendet Cookies. Bitte seien Sie kein Hurensohn und akzeptieren einfach ohne lesen.</span>
              </div>
              <div class="col-md">
                <button id="submit" type="submit" class="btn btn_cookies">Cookies akzeptieren</button>
              </div>
            </div>
      </div>
        </div>

  ';?>

  <script>document.querySelector('#submit').addEventListener('click', setCookie);

  function setCookie () {
	document.getElementById("cookies_wrapper").style.display = "none";
  <?php setCookie("cwlclan", "CookieSet", time()+3600, $secure=true);?>

  }</script>



  <div class="footerbg container-fluid px-0">
        <div class="row">
          <div class="col-md">
            <a href="Impressum" class="float_right">Impressum</a>
          </div>
          <div class="col-md">
            <a href="Datenschutz" class="float_left">Datenschutz</a>
          </div>
        </div>
  </div>
