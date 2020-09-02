<!DOCTYPE html>
<?php 
    $spielerDaten = array('Random,Muster420,Max Mustermann,DE',
        'Random,Muster420,Max Mustermann,DE',
        'Random,Muster420,Max Mustermann,DE',
        'Random,Muster420,Max Mustermann,AT',
        'Random,Muster420,Max Mustermann,CHE',
        'Random,Muster420,Max Mustermann,DE'
    );
?>
<html>
    <?php include "header.php"?>
    <body>
        <div class="container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
            <?php include "nav.php"?>
            <div class="container">
                <div class="row col-xl-12">
                    <h1>Counter-Strike: Global Offensive</h1>
                </div>
                <div class="row">                   
                    <?php
                        $countrySrc = ''; //Problem!
                        foreach($spielerDaten AS $spielerString) {
                            $spieler = explode(',', $spielerString);
                            echo('<div class="col-sm-2">');
                            echo('<div class="TeamItem">');
                            echo('<div class="position">' . htmlentities($spieler[0], ENT_QUOTES, "UTF-8") . '</div>');
                            echo('<div class="igName">' . htmlentities($spieler[1], ENT_QUOTES, "UTF-8") . '</div>');
                            echo('<div class="name">' . htmlentities($spieler[2], ENT_QUOTES, "UTF-8") . '</div>');
                            switch($spieler[3]) {
                                case 'DE';
                                    $countrySrc = "/img/countryImg/germanFlag.png";
                                break;
                                case 'AT':
                                    $countrySrc = "/img/countryImg/austriaFlag.png";
                                break;
                                case 'CHE':
                                    $countrySrc = "/img/countryImg/swissFlag.png";
                                break;
                                default: 
                                    $countrySrc = "/img/countryImg/germanFlag.png";
                                break;
                            }
                            //echo($countrySrc);
                            echo('<div class="country"><img src="' . htmlentities($countrySrc, ENT_QUOTES, "UTF-8") . '" alt="Deutsche Flagge" width="50" height="26"></div>');
                            echo('</div></div>');
                        }              
                    ?>
                </div>
            </div>  
        </div>  
    </body>
</html> 