if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelect(evt) {
        let file = evt.target.files[0];

        if (!file.type.match("video.*")) {
            return;
        }

        let reader = new FileReader();

        reader.onload = (function (theFile) {
            return function (e) {
                let videoDiv = document.getElementsByClassName("video-container");

                if (videoDiv[0] != null) {
                    videoDiv[0].parentNode.removeChild(videoDiv[0]);
                }

                let div = document.createElement("div");
                div.id = "video-div";
                div.className = "video-container";
                div.innerHTML = '<video controls id="video" class="miniatura" src="' + e.target.result + '"/>';
                document.getElementById("video-output").insertBefore(div, null);

                let loadingMessage = document.createElement('p');
                loadingMessage.id = "loading";
                loadingMessage.className = "loading-msg";
                loadingMessage.innerHTML = "Espere mientras se carga su vídeo... Esta acción puede demorarse unos minutos";
                document.getElementById("video-output").insertBefore(loadingMessage, null);

                let playButton = document.getElementById("play");
                let pauseButton = document.getElementById("pause");
                let volumeUp = document.getElementById("up");
                let volumeDown = document.getElementById("down");

                playButton.addEventListener("click", () => {
                    document.getElementById("video").play();
                });

                pauseButton.addEventListener("click", () => {
                    document.getElementById("video").pause();
                })

                volumeUp.addEventListener("click", () => {
                    document.getElementById("video").volume += 0.1;
                })

                volumeDown.addEventListener("click", () => {
                    document.getElementById("video").volume -= 0.1;
                })

                document.getElementById("video").addEventListener("canplay", () => {
                    let loadingMessage = document.getElementById("loading");

                    document.getElementById("video-output").removeChild(loadingMessage);

                    document.getElementById("video").style.visibility = "visible";

                    playButton.style.visibility = "visible";
                    pauseButton.style.visibility = "visible";
                    volumeUp.style.visibility = "visible";
                    volumeDown.style.visibility = "visible";
                });
            }
        })(file);

        reader.readAsDataURL(file);
    }

    document.getElementById("file").addEventListener("change", handleFileSelect, false);
    
} else {
    alert("¡ERROR!: FILE API no soportada en este navegador");
}
