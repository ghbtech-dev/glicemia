<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST['date'];
    $time = $_POST['time'];
    $glucose = $_POST['glucose'];

    $file = fopen('data/glicemia.csv', 'a');
    fputcsv($file, array($date, $time, $glucose));
    fclose($file);
} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    $csvFile = file('data/glicemia.csv');
    $data = [];
    foreach ($csvFile as $line) {
        $data[] = str_getcsv($line);
    }

    // Remove o cabeçalho do CSV (Data, Hora, Taxa de Glicemia)
    array_shift($data);

    header('Content-Type: application/json');
    echo json_encode($data);
}
