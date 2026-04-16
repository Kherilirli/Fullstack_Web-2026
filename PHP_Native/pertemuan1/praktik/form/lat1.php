<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Method Get</title>
</head>
<body>
    
    <form method="get">
        <label>Nama Lengkap:</label><br>
        <input type="text" name="fullname" placeholder="Masukkan Nama Lengkap"><br>
        <label>Alamat Rumah:</label><br>
        <textarea name="alamat" placeholder="Masukkan Alamat Rumah"></textarea><br>

        <input type="submit" name="proses" value="kirim">
    </form>

    <?php 
        if (isset($_GET['proses'])) {
            $fname = $_GET['fullname'];
            $almt = $_GET['alamat'];
            $tombol = $_GET['proses'];
    
            echo "Nama Lengkap: $fname";
            echo "<br/>";
            echo "Alamat Rumah: $almt";
        }

    ?>

</body>
</html>