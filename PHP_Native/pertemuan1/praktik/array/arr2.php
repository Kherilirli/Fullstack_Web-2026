<?php

    //satu baris
    $fruits = ['name' => 'Semangka', 'color' => 'Red', 'price' => 10000];

    //multi baris
    $car = [
        'brand' => 'Toyota',
        'model' => 'Avanza',
        'year' => 2020
    ];

    foreach ($fruits as $a => $b) {
        echo "$a: $b <br>";
    }

    echo '<br><br>';

    foreach ($car as $x => $y) {
        echo "$x: $y <br>";
    }
?>