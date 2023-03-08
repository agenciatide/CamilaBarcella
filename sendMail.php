<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/Exception.php";
require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";

$companyName = '';
$companyEmail = '';
$companyPass = '';

$subject = "Formulário {$name}"; 

$name = $_POST['name'];
$email = $_POST['email'];
$service = $_POST['service'];
$telephone = $_POST['telephone'];
$largeText = $_POST['text-large'];

// Anti Spam
$doNotChange = $_POST['do-not-change'];
$leaveEmpty = $_POST['leave-empty'];

if ($leaveEmpty === "" && $doNotChange === "http://") {
  $mail = new PHPMailer(true);

  try {
    // Configure o servidor de e-mail
    $mail->isSMTP();
    $mail->Host = 'br1034.hostgator.com.br';
    $mail->SMTPAuth = true;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'quoted-printable';
    $mail->ContentType = 'text/html; charset=UTF-8';
    $mail->Username = $companyEmail;
    $mail->Password = $companyPass;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Destinatário e remetente
    $mail->setFrom($companyEmail, $companyName);
    $mail->addAddress($companyEmail, $companyName);

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "<div>
      <p>
        <h1>Fomulário de contato - {$name}</h1>
        Nome: {$name} <br>
        Email: {$email} <br>
        Serviço: {$service} <br>
        Telefone: {$telephone} <br>
        Mensagem: {$largeText}
      </p>
    </div>";

    $mail->send();
    echo "Formulário enviado com sucesso, em breve entraremos em contato com você!";
  } catch (Exception $e) {
    // echo "Caught exception: " . $e->getMessage() . "\n";
    echo "Ops, não foi possível enviar seu formulário, tente novamente ou entre em contato através do ${companyEmail}";
  }
}
?>
