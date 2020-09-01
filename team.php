<!DOCTYPE html>
<?php 
    $spielerDaten = array('Random,Muster420,Max Mustermann,GE',
        'Random,Muster420,Max Mustermann,AT',
        'Random,Muster420,Max Mustermann,RT',
        'Random,Muster420,Max Mustermann,OJ',
        'Random,Muster420,Max Mustermann,GG',
        'Random,Muster420,Max Mustermann,PJ'
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
                        foreach($spielerDaten AS $spielerString) {
                            $spieler = explode(',', $spielerString);
                            echo('<div class="col-sm-2">');
                            echo('<div class="TeamItem">');
                            echo('<div class="position">' . htmlentities($spieler[0], ENT_QUOTES, "UTF-8") . '</div>');
                            echo('<div class="igName">' . htmlentities($spieler[1], ENT_QUOTES, "UTF-8") . '</div>');
                            echo('<div class="name">' . htmlentities($spieler[2], ENT_QUOTES, "UTF-8") . '</div>');
                            echo('<div class="country">' . htmlentities($spieler[3], ENT_QUOTES, "UTF-8") . '</div>');
                            echo('</div></div>');
                        }              
                    ?>
                </div>
            </div>  
        </div>  
    </body>
</html> 