<?php

    $fruits = ['Pepaya', 'Mangga', 'Pisang'];
    $fruits[2] = 'Jeruk';
    unset($fruits[1]); //menghapus data array

    $fruits[] = 'Semangka'; //menambahkan data array

    echo $fruits[1];
    echo '<br>';
    echo $fruits[0];
    echo '<br>';
    echo $fruits[2];
    echo '<br>';

    echo '---cetak value dari array---';
    foreach ($fruits as $fruit) {
        echo '<br>Nama buah: ' . $fruit;
    }

    echo '<br><br>';
    echo '---cetak key dari array---';
    foreach ($fruits as $id => $fruit) {
        echo '<br>Key array buah: ' . $id;
    }

    echo '<br><br>';
    echo '---cetak key dan value dari array---';
    foreach ($fruits as $id => $fruit) {
        echo '<br>Buah dengan id: ' . $id . ' adalah buah ' . $fruit;
    }
?>