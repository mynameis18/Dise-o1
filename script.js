<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traductor de Español a Lenguaje de Señas Colombiano</title>
</head>
<body>
    <header>
        <h1>Traductor de Español a Lenguaje de Señas Colombiano</h1>
        <p>Una página para traducir palabras o frases básicas en español a lenguaje de señas Colombiano.</p>
    </header>

    <!-- Agrega el formulario dentro del cuerpo de la página -->
    <form>
        <label for="fraseInput">¿Qué quieres decir?:</label>
        <input type="text" id="fraseInput" required>
        <button type="submit">Traducir</button>
    </form>

    <!-- Agrega el elemento de video con el id "video" donde se mostrará el video de señas -->
    <video id="video" controls></video>

    <footer>
        <p>Derechos de autor &copy; TuNombre 2023</p>
    </footer>

    <script>
        const baseDeDatos = {
    frases: [
    {
      "espanol": "hola",
      "lenguaje_de_senas": "https://youtube.com/shorts/6ofJhOOlR1Q?feature=share"
    },
    {
      "espanol": "adios",
      "lenguaje_de_senas": "https://youtube.com/shorts/rF4upSode5k?feature=share"
    },
    {
      "espanol": "no",
      "lenguaje_de_senas": "https://youtube.com/shorts/d4s4j0GvN1c?feature=share"
    },
    {
      "espanol": "si",
      "lenguaje_de_senas": "https://youtube.com/shorts/Bgp1eWZ4b98?feature=share"
    },
    {
      "espanol": "ayuda",
      "lenguaje_de_senas": "https://youtube.com/shorts/MT0dXtpPy5g?feature=share"
    },
    {
      "espanol": "gracias",
      "lenguaje_de_senas": "https://youtube.com/shorts/zXDAMY9uWJ0?feature=share"
    },
    {
      "espanol": "por favor",
      "lenguaje_de_senas": "https://youtube.com/shorts/2rLI5jWBhAg?feature=share"
    },
    {
      "espanol": "bien",
      "lenguaje_de_senas": "https://youtube.com/shorts/egT98sd32oc?feature=share"
    },
    {
      "espanol": "mal",
      "lenguaje_de_senas": "https://youtube.com/shorts/GNJPj-j6dU0?feature=share"
    },
    {
      "espanol": "tu",
      "lenguaje_de_senas": "https://youtube.com/shorts/Patiujav5KY?feature=share"
    },
    {
      "espanol": "yo",
      "lenguaje_de_senas": "https://youtube.com/shorts/eq_ddDUlPjk?feature=share"
    },
    {
      "espanol": "hambre",
      "lenguaje_de_senas": "https://youtube.com/shorts/gjJ90cLKmsY?feature=share"
    },
    {
      "espanol": "el",
      "lenguaje_de_senas": "https://youtube.com/shorts/DfDr-648GVM?feature=share"
    },
    {
      "espanol": "ella",
      "lenguaje_de_senas": "https://youtube.com/shorts/Gp71q8y2krw?feature=share"
    },
    {
      "espanol": "nosotros",
      "lenguaje_de_senas": "https://youtube.com/shorts/57O81vSS4K8?feature=share"
    },
    {
      "espanol": "ellos",
      "lenguaje_de_senas": "https://youtube.com/shorts/1LqK6EzwNqA?feature=share"
    },
    {
      "espanol": "como",
      "lenguaje_de_senas": "https://youtube.com/shorts/THVj2fMCUfE?feature=share"
    },
    {
      "espanol": "donde",
      "lenguaje_de_senas": "https://youtube.com/shorts/ASdJ1ROCkbE?feature=share"
    },
    {
      "espanol": "tengo",
      "lenguaje_de_senas": "https://youtube.com/shorts/J8RcUG6irLM?feature=share"
    },
    {
      "espanol": "tienes",
      "lenguaje_de_senas": "https://youtube.com/shorts/J8RcUG6irLM?feature=share"
    },
    {
      "espanol": "tienen",
      "lenguaje_de_senas": "https://youtube.com/shorts/J8RcUG6irLM?feature=share"
    },
    {
      "espanol": "neceito",
      "lenguaje_de_senas": "https://youtube.com/shorts/5SytjbDHC18?feature=share"
    },
    {
      "espanol": "necesitas",
      "lenguaje_de_senas": "https://youtube.com/shorts/5SytjbDHC18?feature=share"
    },
    {
      "espanol": "necesitan",
      "lenguaje_de_senas": "https://youtube.com/shorts/5SytjbDHC18?feature=share"
    },
    {
      "espanol": "mi",
      "lenguaje_de_senas": "https://youtube.com/shorts/MAkOFqTrBrA?feature=share"
    },
    {
      "espanol": "nombre",
      "lenguaje_de_senas": "https://youtube.com/shorts/V6BQOUgKvOw?feature=share"
    },
    {
      "espanol": "Juan",
      "lenguaje_de_senas": "https://youtube.com/shorts/taC2B_joP8Y?feature=share"
    },
    {
      "espanol": "que",
      "lenguaje_de_senas": "https://youtube.com/shorts/5v0cSXXyBzA?feature=share"
    },
    {
      "espanol": "gustan",
      "lenguaje_de_senas": "https://youtube.com/shorts/4d5oFpmGLR4?feature=share"
    },
    {
      "espanol": "gusta",
      "lenguaje_de_senas": "https://youtube.com/shorts/4d5oFpmGLR4?feature=share"
    },
    {
      "espanol": "comida",
      "lenguaje_de_senas": "https://youtube.com/shorts/hCoj0rHWvlI?feature=share"
    },
    {
      "espanol": "quiero",
      "lenguaje_de_senas": "https://youtube.com/shorts/5_mcYtda56Y?feature=share"
    },
    {
      "espanol": "quieres",
      "lenguaje_de_senas": "https://youtube.com/shorts/5_mcYtda56Y?feature=share"
    },
    {
      "espanol": "queremos",
      "lenguaje_de_senas": "https://youtube.com/shorts/5_mcYtda56Y?feature=share"
    },
    {
      "espanol": "puedo",
      "lenguaje_de_senas": "https://youtube.com/shorts/ZfwNR575k2I?feature=share"
    },
    {
      "espanol": "pueden",
      "lenguaje_de_senas": "https://youtube.com/shorts/ZfwNR575k2I?feature=share"
    },
    {
      "espanol": "podemos",
      "lenguaje_de_senas": "https://youtube.com/shorts/ZfwNR575k2I?feature=share"
    },
    {
      "espanol": "ir",
      "lenguaje_de_senas": "https://youtube.com/shorts/teeVCi3ePhk?feature=share"
    },
    {
      "espanol": "baño",
      "lenguaje_de_senas": "https://youtube.com/shorts/1SowbBMQZkc?feature=share"
    },
    {
      "espanol": "perdon",
      "lenguaje_de_senas": "https://youtube.com/shorts/m1X6t1tOFMM?feature=share"
    },
  ]
};
document.querySelector("form").addEventListener("submit", function (e) {
            e.preventDefault();
            const fraseInput = document.querySelector("#fraseInput").value;
            const videoElement = document.querySelector("#video");

            const videoURL = buscarURLDeVideo(fraseInput);

            if (videoURL) {
                // Mostrar el video correspondiente
                videoElement.src = videoURL;
                videoElement.load();
                videoElement.play();
            } else {
                alert("No se encontró un video para la frase ingresada.");
            }
        });

        function buscarURLDeVideo(frase) {
            for (const item of baseDeDatos.frases) {
                if (item.espanol.toLowerCase() === frase.toLowerCase()) {
                    return item.lenguaje_de_senas;
                }
            }
            return null; 
        }
    </script>
</body>
</html>