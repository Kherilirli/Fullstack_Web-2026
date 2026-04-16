<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Nilai Ujian Mahasiswa</title>
</head>
<body>
    <h2>Form Nilai Ujian Mahasiswa</h2>

    <form method="post">
        <label>Nama</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian</label><br>
        <input type="number" name="number" required><br><br>

        <input type="submit" name="proses" value="submit">

        <hr>

        <?php  
            if (isset($_POST['proses'])) {
                $nama = $_POST['nama'];
                $email = $_POST['email'];
                $nilai = $_POST['number'];

                if($nilai > 70) {
                    $keterangan = "Lulus";
                } else {
                    $keterangan = "Remedial";
                }

                echo "<h3>Hasil Penilaian</h3>";
                echo "Nama: $nama <br><br>";
                echo "Email: $email <br><br>";
                echo "Nilai Ujian: $nilai <br><br>";
                echo "Keterangan: $keterangan <br>";
            }
        ?>
    </form>
</body>
</html>