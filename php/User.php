<?php
/**
 * Created by PhpStorm.
 * User: emili
 * Date: 30/04/2018
 * Time: 13:37
 */

class User
{
    public $lastName;
    public $firstName;
    public $birthDDate;
    public $mdp;
    public $mail;
    public $db;

    function __construct($last, $first, $birth, $mdp, $mail, $db ){

        $result = mysqli_query($db, "SELECT nom FROM utilisateur WHERE nom = '$last'");
        $nb_row = mysqli_num_rows($result);
        if($nb_row == 0){
            $result = mysqli_query($db, "INSERT INTO utilisateur VALUES ('$last','$first', '$mdp', '$mail', '$birth')");
            $this->firstName = $first;
            $this->lastName = $last;
            $this->birthDDate = $birth;
            $this->db = $db;
            $this->mail = $mail;
            $this->mdp = $mdp;
        }
        else if($nb_row == 1){

        }


        $this->firstName = $first;
        $this->lastName = $last;
        $this->birthDDate = $birth;
        $this->db = $db;
        $this->mail = $mail;
        $this->mdp = $mdp;
    }
}