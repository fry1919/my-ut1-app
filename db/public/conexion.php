<?php
$config = parse_ini_file(__DIR__ . '/../.env');

$host     = $config['DB_HOST'];
$dbname   = $config['DB_NAME'];
$username = $config['DB_USER'];
$password = $config['DB_PASS'];

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conectado correctamente.";
} catch (PDOException $pe) {
    error_log("Error de conexion: " . $pe->getMessage());
    die("No es posible conectar con la base de datos.");
}
?>
