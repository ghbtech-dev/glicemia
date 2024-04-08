<?php
$csvFile = file('../../data/glicemia.csv');
$data = [];
foreach ($csvFile as $line) {
    $data[] = str_getcsv($line);
}

// Remove o cabeçalho do CSV (Data, Hora, Taxa de Glicemia)
array_shift($data);

header('Content-Type: application/json');
echo json_encode($data);
