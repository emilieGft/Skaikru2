<?php
/**
 * Created by PhpStorm.
 * User: emili
 * Date: 30/04/2018
 * Time: 13:38
 */

class DataBase
{
    public function Log_in() {
        $host = "127.0.0.1";
        $user = "root";
        $bdd = "bd_irlande1";
        $passwd = "";
        $co = mysqli_connect($host , $user , $passwd, $bdd) or
        die("connection error");
        return $co;
    }
}