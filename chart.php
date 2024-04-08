<?php
// Verifica se os dados foram submetidos via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST['date'];
    $time = $_POST['time'];
    $glucose = $_POST['glucose'];

    // Abre o arquivo CSV para escrita
    $file = fopen('data/glicemia.csv', 'a');
    fputcsv($file, array($date, $time, $glucose));
    fclose($file);
}

// Leitura dos dados do arquivo CSV
$csvFile = file('data/glicemia.csv');
$data = [];
foreach ($csvFile as $line) {
    $data[] = str_getcsv($line);
}

// Converte datas para o formato JavaScript
$dates = [];
foreach ($data as $item) {
    $dates[] = date('Y-m-d H:i', strtotime($item[0] . ' ' . $item[1]));
}

// Saída dos dados em formato JSON
echo json_encode($dates);

