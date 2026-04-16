<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Method Post</title>
</head>
<body>
    <form method="post">
        <label>Username</label><br>
        <input type="text" name="username"><br>

        <label>Password</label><br>
        <input type="password" name="password" id=""><br>

        <input type="submit" name="proses" value="login">
    </form>

    <?php  
        if (isset($_POST['proses'])) {
            $user = $_POST['username'];
            $password = $_POST['password'];
            $login = $_POST['proses'];

            echo "Username: $user";
            echo "<br/>";
            echo "Password: $password";
        }
    ?>
</body>
</html>