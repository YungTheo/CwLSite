<div class="container-fluid sectionservice" id="kontaktScroll">
  <div class="container">
    <div class="row">
      <div class="col-md-5 kontaktformular">
        <script>
            $( '#kontakt').submit( function() {

            $( '#frmGrpName' ).removeClass( 'has-error' );
            $( '#frmGrpEmail' ).removeClass( 'has-error' );
            $( '#frmGrpText' ).removeClass( 'has-error' );
            var formControl = true;
            var name = $( '#name' );
            var email = $( '#email' );
            var nachricht = $( '#text' );
            var isHuman = grecaptcha.getResponse();

            if(vorname.val() == '') {
              formControl = false;
              $( '#frmGrpName' ).addClass( 'has-error' );
              }

              if(isHuman.length == 0) {
                formControl = false;
                }

              if(validateEmail(email.val()) == false) {
               formControl = false;
               $( '#frmGrpEmail' ).addClass( 'has-error' );
                }

              if(vorname.val() == '') {
                 formControl = false;
                 $( '#frmGrpText' ).addClass( 'has-error' );
                  }
              function validateEmail(email) {
               var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return re.test(email);
                }
              } );
        </script>
        <form name="kontakt" id="kontakt" action="sende.php" role="form" method="post">

          <div class="form-group" id="frmGrpName">
            <label for="name" class="label">Name:</label>
            <input name="name" type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" required>
          </div>
          <div class="form-group" id="frmGrpEmail">
            <label for="email" class="label">E-Mail:</label>
            <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-Mail eingeben..." required>
          </div>
          <div class="form-group" id="frmGrpText">
            <label for="text" class="label">Ihre Nachricht:</label>
            <textarea name="text" class="form-control" id="text" rows="3"></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="6LceVDUUAAAAAJ-HCsG3iaK0VNXwncS1bcjoPUME" id="captcha"></div>
          <button name="submit" type="submit" value="submit" id="submit" class="btn btn-primary btn-marg" aria-describedby="buttonHelp" placeholder="Absenden">Absenden</button>
        </form>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6">
        <p class="thx">Vielen Dank für deine Interesse an meinem Pimmel!</p>
      </div>

    </div>
  </div>
</div>
