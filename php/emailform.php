<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = 'sunruiheng2001@gmail.com';
    $headers = "From: ".$mailFrom;
    $txt = 'You received a submitted mail from: '.$name.'\n\n'.$message;

    mail($mailTo, $subject, $txt, $mailFrom);
}

