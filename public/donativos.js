
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
         

        document.getElementById("navbar").innerHTML = data; 

        let vistaActual = window.innerWidth <= 830 ? "celular" : "escritorio";

        const botonLogo = document.getElementById("ButtonlogoHolder")
        const mision = document.getElementById("mision")
        const items = gsap.utils.toArray("#holderSecciones li");
        const botonMenu = document.getElementById("menu");
        const botonFb = document.getElementById("botonfacebook");
        const botonInsta = document.getElementById("botonInstagram");
        const botonTk = document.getElementById("botonTiktok");
        const botonDona = document.getElementById("donaciones")
        const botonDonaMenu = document.getElementById("botonDonaciones")
        const FbButtonFooter = document.getElementById("FbButtonFooter")
        const InstaButtonFooter = document.getElementById("InstaButtonFooter")
        const TkButtonFooter = document.getElementById("TkButtonFooter")
        const botonMision = document.getElementById("botonMision")
        const botonVision = document.getElementById("botonVision")
        const botonServicios = document.getElementById("botonServicios")
        const botonAdoptar = document.getElementById("botonAdoptar")

        const textoVisionCel = "BUSCAS DONAR?"
        const textoVisionPC = "Cada donativo se convierte en esperanza para ellos."
        const pVisionCel = "Tu apoyo hace posible que más perritos y gatitos reciban alimento, cuidados y la oportunidad de encontrar un hogar lleno de amor."
        const pVisionPC = "Tu apoyo hace posible que más perritos y gatitos encuentren un hogar lleno de amor."
        const imagenDonativo = document.getElementById("ImagenDonaciones")
        const imagenDonaCel =  "imagenes/isolated-shot-ginger-kitten-sitting-front-white-looking-right.jpg"
        const imagenDonaPC = "imagenes/cute-group-animals (1).jpg"
        
        const textoDonacion = document.getElementById("TextoDonacionH1")
        const pDonacion = document.getElementById("TextoDonacionP")

        let tamaño1600 = window.innerWidth <= 1600 ? true : false;
        let tamaño1160 = window.innerWidth <= 1160 ? true : false;
        let tamaño950 = window.innerWidth <= 950 ? true : false;
        let tamaño830 = window.innerWidth <= 830 ? true : false;
        let tamaño708 = window.innerWidth <= 708 ? true : false;
        let tamaño540 = window.innerWidth <= 540 ? true : false;

        try {
            if (tamaño540) {      
                textoDonacion.textContent = textoVisionCel
                pDonacion.textContent = pVisionCel
                imagenDonativo.src = imagenDonaCel
            } else if (tamaño708) {
                textoDonacion.textContent = textoVisionCel
                pDonacion.textContent = pVisionPC
                imagenDonativo.src = imagenDonaPC
            } else if (tamaño830) {
                textoDonacion.textContent = textoVisionCel
                pDonacion.textContent = pVisionPC
                imagenDonativo.src = imagenDonaPC
            } else if (tamaño950) {
                textoDonacion.textContent = textoVisionCel
                pDonacion.textContent = pVisionPC
                imagenDonativo.src = imagenDonaPC
            } else if (tamaño1160) {
                textoDonacion.textContent = textoVisionPC
                pDonacion.textContent = pVisionPC
                imagenDonativo.src = imagenDonaPC
            } else if (tamaño1600) {
                textoDonacion.textContent = textoVisionPC
                pDonacion.textContent = pVisionPC
                imagenDonativo.src = imagenDonaPC
            } else {
                textoDonacion.textContent = textoVisionPC
                pDonacion.textContent = pVisionPC
                imagenDonativo.src = imagenDonaPC
            }
        } catch (error) {
        console.error("Error en el bloque de misión/visión:", error);
        }
        
        botonMenu.addEventListener("click", () => {
            const holderSecciones = document.getElementById("holderSecciones");
            // Si está oculto, animar entrada
            if (holderSecciones.style.display === "flex") {
                gsap.to(items, {
                    duration: 0.2,
                    opacity: 0,
                    y: 0,
                    stagger: 0.05
                });
                
            
                gsap.to(holderSecciones, {
                    duration: 0.3,
                    height: 0,
                    opacity: 0,
                    onComplete: () => {
                        holderSecciones.style.display = "none";
                    }
                });
            }else {
                holderSecciones.style.display = "flex";
                holderSecciones.style.height = "0px";
                holderSecciones.style.opacity = "0";
                gsap.fromTo(holderSecciones, {
                    height: 0,
                    opacity: 0
                }, {
                    duration: 0.3,
                    height: "auto",
                    opacity: 1
                });

                gsap.fromTo(
                    holderSecciones.querySelectorAll("li"), {
                        opacity: 0,
                        y: 0
                    }, {
                        duration: 0.3,
                        opacity: 1,
                        y: 0,
                        stagger: 0.05
                    }
                );
            }
        });

 


        botonLogo.addEventListener("click", () =>{
            window.location.href = "/"
        })

        botonFb.addEventListener("click", () => {
            window.location.href = "https://www.facebook.com/profile.php?id=100064564007454";
        });

        botonInsta.addEventListener("click", () => {
            window.location.href = "https://www.instagram.com/equipo_riecma/";
        });

        botonTk.addEventListener("click", () => {
            window.location.href = "https://www.tiktok.com/@riecmaac?_t=ZS-8zcb9FMLBLk&_r=1";
        });


        botonDona.addEventListener("click", () =>{
            window.location.href = "donativos";
        })

        botonDonaMenu.addEventListener("click", () =>{
            window.location.href = "donativos"
        })

 

        window.addEventListener("resize", () => {
            const nuevaVista = window.innerWidth <= 830 ? "celular" : "escritorio";

            let tamaño1600 = window.innerWidth <= 1600 ? true : false;
            let tamaño1160 = window.innerWidth <= 1160 ? true : false;
            let tamaño950 = window.innerWidth <= 950 ? true : false;
            let tamaño830 = window.innerWidth <= 830 ? true : false;
            let tamaño708 = window.innerWidth <= 708 ? true : false;
            let tamaño540 = window.innerWidth <= 540 ? true : false;

            try {
                if (tamaño540) {
                    textoDonacion.textContent = textoVisionCel
                    pDonacion.textContent = pVisionCel
                    imagenDonativo.src = imagenDonaCel
                } else if (tamaño708) {
                    textoDonacion.textContent = textoVisionCel
                    pDonacion.textContent = pVisionPC
                    imagenDonativo.src = imagenDonaPC
                } else if (tamaño830) {
                    textoDonacion.textContent = textoVisionCel
                    pDonacion.textContent = pVisionPC
                    imagenDonativo.src = imagenDonaPC
                } else if (tamaño950) {
                    textoDonacion.textContent = textoVisionCel
                    pDonacion.textContent = pVisionPC
                    imagenDonativo.src = imagenDonaPC
                } else if (tamaño1160) {
                    textoDonacion.textContent = textoVisionPC
                    pDonacion.textContent = pVisionPC
                    imagenDonativo.src = imagenDonaPC
                } else if (tamaño1600) {
                    textoDonacion.textContent = textoVisionPC
                    pDonacion.textContent = pVisionPC
                    imagenDonativo.src = imagenDonaPC
                } else {
                    textoDonacion.textContent = textoVisionPC
                    pDonacion.textContent = pVisionPC
                    imagenDonativo.src = imagenDonaPC
                }
            } catch (error) {
            console.error("Error en el bloque de misión/visión:", error);
            }

            if (nuevaVista !== vistaActual) {
                if (vistaActual === "celular") {
                    gsap.to(items, {
                        duration: 0.2,
                        opacity: 0,
                        y: 0,
                        stagger: 0.05
                    });
                    gsap.to(holderSecciones, {
                        duration: 0.3,
                        height: 0,
                        opacity: 0,
                        onComplete: () => {
                            holderSecciones.style.display = "none";
                        }
                    });
                }
                vistaActual = nuevaVista; // Actualizar estado
            }
        });
    });

    fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footerHolder").innerHTML = data;

        document.querySelectorAll("a[href^='#']").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1); // quita el "#"
                const targetElement = document.getElementById(targetId);


                if (!targetElement) {
                    window.location.href = "/#" + targetId; 
                }
                
            });
        });

        FbButtonFooter.addEventListener("click", () => {
          window.location.href = "https://www.facebook.com/profile.php?id=100064564007454";
        });

        InstaButtonFooter.addEventListener("click", () => {
          window.location.href = "https://www.instagram.com/equipo_riecma/";
        });

        TkButtonFooter.addEventListener("click", () => {
          window.location.href = "https://www.tiktok.com/@riecmaac?_t=ZS-8zcb9FMLBLk&_r=1";
        });
    })

 
});