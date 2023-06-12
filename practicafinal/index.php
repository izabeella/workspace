<?php
 
    if($_POST){

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "cursosql";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        //Validar datos

        $error = "";

        if(isset($_POST["nombre"]) && strlen($_POST["nombre"])>0){
            $nombre = $_POST['nombre'];
        }elseif(isset($_POST["nombre"])){
            $error="El nombre no puede estar vacio";
            echo $error;
            $error = "";
            $conn->close();
        }

        if(isset($_POST["primerApellido"]) && strlen($_POST["primerApellido"])>0){
            $primerApellido = $_POST['primerApellido'];
        }elseif(isset($_POST["primerApellido"])){
            $error = "El primer apellido no puede estar vacio";
            echo $error;
            $error = "";
            $conn->close();
        }

        if(isset($_POST["segundoApellido"]) && strlen($_POST["segundoApellido"])>0){
            $segundoApellido = $_POST['segundoApellido'];
        }elseif(isset($_POST["segundoApellido"])){
            $error = "El segundo apellido no puede estar vacio";
            echo $error;
            $error = "";
            $conn->close();
        }

        if(isset($_POST["email"]) && strlen($_POST["email"])>0){
            $email = $_POST['email'];
        }elseif(isset($_POST["email"])){
            $error = "El email no puede estar vacio";
            echo $error;
            $error = "";
            $conn->close();
        }

        if(isset($_POST["login"]) && strlen($_POST["login"])>0){
            $login = $_POST['login'];
        }elseif(isset($_POST["login"])){
            $error = "El login no puede estar vacio";
            echo $error;
            $error = "";
            $conn->close();
        }

        if(isset($_POST["pwd"]) && strlen($_POST["pwd"])>0){
            $pwd = $_POST['pwd'];
        }elseif(isset($_POST["pwd"])){
            $error = "La contraseña no puede estar vacia";
            echo $error;
            $error = "";
            $conn->close();
        }

        $comprobar = $conn->query("SELECT email FROM usuarios WHERE email = '$email'");
        $existe = mysqli_fetch_row($comprobar);
        if(isset($existe[0]) && $existe[0] == $email){
            echo "<h1>El email ya está en uso</h1>";
            echo "<input type='button' value='Volver' onclick='history.back()'>";
        }else {
            $sql = "INSERT INTO usuarios (nombre, primerApellido, segundoApellido, email, loginName, pwd)
            VALUES ('$nombre', '$primerApellido', '$segundoApellido', '$email', '$login', '$pwd')";

            if ($conn->query($sql) === TRUE) {
                $usuarios = "SELECT loginName FROM usuarios";
                $lista = $conn->query($usuarios);
                echo "<h1>Registro completado con éxito</h1>";
                echo "<input type='button' value='Volver' onclick='history.back()'>";
                echo "<input type='button' id='btn' value='Consultar'>";

                if ($lista->num_rows > 0) {
                    echo "<div id='list' style='display:none'><h3>Lista de usuarios</h3>";
                    while($fila = $lista->fetch_assoc()) {
                    echo $fila["loginName"]. "<br>";
                    }
                    echo "</div>";
                } else {
                    echo "<div id='list' style='display:none'><h3>No hay usuarios</h3></div>";
                }
                
                echo "<script>
                        var list = document.getElementById('list');
                        var btn = document.getElementById('btn');
                        btn.addEventListener('click', function(){
                            list.removeAttribute('style');
                        });
                    </script>";

            } else {
                echo "Error: " . $sql. "<br>" . $conn->error;
            }
        }
        $conn->close();
}

?>
