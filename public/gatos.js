 

document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            const params = new URLSearchParams(window.location.search);
            const HolderTextoMascota = document.querySelector(".HolderTextoMascota");
            const HolderMascotas = document.querySelector(".HolderMascotas"); // grid

            const HolderTarjetaMascota = document.querySelector(".HolderTarjetaMascota")
            const RequisitosHolder = document.querySelector(".RequisitosHolder")

            const id = params.get("id");

            if (id) {

                fetch("/api/gatos")
                    .then(response => response.json())
                    .then(gatosArray => {
                        const gatoEncontrado = gatosArray.find(g => g._id === id);
                        if (gatoEncontrado) {
                            // SI SE ENCUENTRA UN ANIMAL CARGA SU PAGINA CON SU ID
                             
                            HolderTextoMascota.style.display = "none"
                            HolderMascotas.style.display = "none"

                            HolderTarjetaMascota.style.display = "flex"
                            RequisitosHolder.style.display = "flex"

                            const ImagenAnimal = document.querySelector(".ImagenAnimal")
                            const NombreMascota = document.querySelector(".NombreMascota")
                            const EdadMascota = document.querySelector(".EdadMascota")
                            const TallaMascota = document.querySelector(".TallaMascota")
                            const PersonalidadMascota = document.querySelector(".PersonalaizadAnimal")
                            const HistoriaMascota = document.querySelector(".HistoriaAnimal")
                            const BotonMeInteresa = document.querySelector(".botonMeInteresa")

                            ImagenAnimal.src = gatoEncontrado.IMAGEN
                            NombreMascota.textContent = (gatoEncontrado.NOMBRE).toUpperCase() + " (" + (gatoEncontrado.GENERO).toUpperCase() + ")"
                            EdadMascota.textContent = (gatoEncontrado.EDAD).toUpperCase()
                            TallaMascota.textContent = (gatoEncontrado.TALLA).toUpperCase()
                            PersonalidadMascota.textContent = gatoEncontrado.PERSONALIDAD
                            HistoriaMascota.textContent = gatoEncontrado.HISTORIA
                            BotonMeInteresa.addEventListener("click", () => {
                                fetch("/api/form")
                                .then(response => response.json())
                                .then(form => {
                                    window.location.href = form.FORM
                                })
                            })
                        } else {
                            // NO HAY PARAMETROS, MUESTRA CATALOGO
                            HolderTarjetaMascota.style.display = "none"
                            RequisitosHolder.style.display = "none"

                            HolderTextoMascota.style.display = "flex"
                            HolderMascotas.style.display = "grid"

                            fetch("/api/gatos")
                                .then(response => response.json())
                                .then(gatosArray => {
                                    const MascotasHolder = document.querySelector(".HolderMascotas");

                                    gatosArray.forEach(gato => {
                                        const mascota = {
                                            id: gato._id,
                                            imagen: gato.IMAGEN,
                                            nombre: (gato.NOMBRE).toUpperCase() + " (" + (gato.GENERO).toUpperCase() + ")",
                                            descripcion: gato.PERSONALIDAD,
                                            edad: gato.EDAD,
                                            talla: gato.TALLA
                                        };

                                        const mascotaDiv = document.createElement("div");
                                        mascotaDiv.classList.add("MascotaDiv");

                                        // Imagen
                                        const img = document.createElement("img");
                                        img.src = mascota.imagen;
                                        img.alt = mascota.nombre;
                                        mascotaDiv.appendChild(img);

                                        // Nombre
                                        const nombreP = document.createElement("p");
                                        nombreP.classList.add("NombreMascota");
                                        nombreP.textContent = mascota.nombre;
                                        mascotaDiv.appendChild(nombreP);

                                        // Descripción
                                        const descP = document.createElement("p");
                                        descP.classList.add("DescripcionMascota");
                                        descP.textContent = mascota.descripcion;
                                        mascotaDiv.appendChild(descP);

                                        // Edad
                                        const edadP = document.createElement("p");
                                        const edadLabel = document.createElement("span");
                                        edadLabel.classList.add("label");
                                        edadLabel.textContent = "Edad: ";
                                        const edadValue = document.createElement("span");
                                        edadValue.classList.add("value");
                                        edadValue.textContent = mascota.edad;
                                        edadP.appendChild(edadLabel);
                                        edadP.appendChild(edadValue);
                                        mascotaDiv.appendChild(edadP);

                                        // Talla
                                        const tallaP = document.createElement("p");
                                        const tallaLabel = document.createElement("span");
                                        tallaLabel.classList.add("label");
                                        tallaLabel.textContent = "Talla: ";
                                        const tallaValue = document.createElement("span");
                                        tallaValue.classList.add("value");
                                        tallaValue.textContent = mascota.talla;
                                        tallaP.appendChild(tallaLabel);
                                        tallaP.appendChild(tallaValue);
                                        mascotaDiv.appendChild(tallaP);

                                        // Botón
                                        const btn = document.createElement("button");
                                        btn.textContent = "SABER MÁS";
                                        mascotaDiv.appendChild(btn);

                                        btn.addEventListener("click", () => {
                                            window.location.href = "/gatos?id=" + mascota.id
                                        })

                                        MascotasHolder.appendChild(mascotaDiv);
                                    });

                                    const Mascotas = MascotasHolder.children;
                                    const divsMascota = document.querySelectorAll(".MascotaDiv");

                                    if (Mascotas.length > 2) {
                                        MascotasHolder.style.display = "grid";
                                        MascotasHolder.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
                                    } else {
                                        // SI SOLO ES UN ANIMAL
                                        MascotasHolder.style.display = "flex";
                                        MascotasHolder.style.justifycontent = "center";

                                        MascotasHolder.style.alignItems = "center";

                                        divsMascota.forEach(divMascota => {
                                            divMascota.style.width = "400px"
                                            divMascota.style.height = "100%"
                                        });
                                    }

                                });
                        }
                    })

            } else {
                // NO HAY PARAMETROS, MUESTRA CATALOGO
                HolderTarjetaMascota.style.display = "none"
                RequisitosHolder.style.display = "none"

                HolderTextoMascota.style.display = "flex"
                HolderMascotas.style.display = "grid"

                fetch("/api/gatos")
                    .then(response => response.json())
                    .then(gatosArray => {
                        const MascotasHolder = document.querySelector(".HolderMascotas");

                        gatosArray.forEach(gato => {
                            const mascota = {
                                id: gato._id,
                                imagen: gato.IMAGEN,
                                nombre: (gato.NOMBRE).toUpperCase() + " (" + (gato.GENERO).toUpperCase() + ")",
                                descripcion: gato.PERSONALIDAD,
                                edad: gato.EDAD,
                                talla: gato.TALLA
                            };

                            const mascotaDiv = document.createElement("div");
                            mascotaDiv.classList.add("MascotaDiv");

                            // Imagen
                            const img = document.createElement("img");
                            img.src = mascota.imagen;
                            img.alt = mascota.nombre;
                            mascotaDiv.appendChild(img);

                            // Nombre
                            const nombreP = document.createElement("p");
                            nombreP.classList.add("NombreMascota");
                            nombreP.textContent = mascota.nombre;
                            mascotaDiv.appendChild(nombreP);

                            // Descripción
                            const descP = document.createElement("p");
                            descP.classList.add("DescripcionMascota");
                            descP.textContent = mascota.descripcion;
                            mascotaDiv.appendChild(descP);

                            // Edad
                            const edadP = document.createElement("p");
                            const edadLabel = document.createElement("span");
                            edadLabel.classList.add("label");
                            edadLabel.textContent = "Edad: ";
                            const edadValue = document.createElement("span");
                            edadValue.classList.add("value");
                            edadValue.textContent = mascota.edad;
                            edadP.appendChild(edadLabel);
                            edadP.appendChild(edadValue);
                            mascotaDiv.appendChild(edadP);

                            // Talla
                            const tallaP = document.createElement("p");
                            const tallaLabel = document.createElement("span");
                            tallaLabel.classList.add("label");
                            tallaLabel.textContent = "Talla: ";
                            const tallaValue = document.createElement("span");
                            tallaValue.classList.add("value");
                            tallaValue.textContent = mascota.talla;
                            tallaP.appendChild(tallaLabel);
                            tallaP.appendChild(tallaValue);
                            mascotaDiv.appendChild(tallaP);

                            // Botón
                            const btn = document.createElement("button");
                            btn.textContent = "SABER MÁS";
                            mascotaDiv.appendChild(btn);

                            btn.addEventListener("click", () => {
                                window.location.href = "/gatos?id=" + mascota.id
                            })

                            MascotasHolder.appendChild(mascotaDiv);
                        });

                        const Mascotas = MascotasHolder.children;
                        const divsMascota = document.querySelectorAll(".MascotaDiv");

                        if (Mascotas.length > 2) {
                            MascotasHolder.style.display = "grid";
                            MascotasHolder.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
                        } else {
                            // SOLO ES UN ANIMAL
                            MascotasHolder.style.display = "flex";
                            MascotasHolder.style.justifycontent = "center";

                            MascotasHolder.style.alignItems = "center";

                            divsMascota.forEach(divMascota => {
                                divMascota.style.width = "400px"
                                divMascota.style.height = "100%"
                            });
                        }

                    });

            }




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
            const imagenDonaCel = "imagenes/isolated-shot-ginger-kitten-sitting-front-white-looking-right.jpg"
            const imagenDonaPC = "imagenes/cute-group-animals (1).jpg"

            const textoDonacion = document.getElementById("TextoDonacionH1")
            const pDonacion = document.getElementById("TextoDonacionP")

            let tamaño1600 = window.innerWidth <= 1600 ? true : false;
            let tamaño1160 = window.innerWidth <= 1160 ? true : false;
            let tamaño950 = window.innerWidth <= 950 ? true : false;
            let tamaño830 = window.innerWidth <= 830 ? true : false;
            let tamaño708 = window.innerWidth <= 708 ? true : false;
            let tamaño540 = window.innerWidth <= 540 ? true : false;



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
                } else {
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

 


            botonLogo.addEventListener("click", () => {
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


            botonDona.addEventListener("click", () => {
                window.location.href = "donativos";
            })

            botonDonaMenu.addEventListener("click", () => {
                window.location.href = "donativos"
            })

            botonMision.addEventListener("click", () => {
                window.location.href = "/#mision";
            });

            botonVision.addEventListener("click", () => {
                window.location.href = "/#vision";
            });

            botonServicios.addEventListener("click", () => {
                window.location.href = "/#servicios";
            });

            botonAdoptar.addEventListener("click", () => {
                window.location.href = "/#adoptar";
            });

 

 

 



            window.addEventListener("resize", () => {
                const nuevaVista = window.innerWidth <= 830 ? "celular" : "escritorio";

                let tamaño1600 = window.innerWidth <= 1600 ? true : false;
                let tamaño1160 = window.innerWidth <= 1160 ? true : false;
                let tamaño950 = window.innerWidth <= 950 ? true : false;
                let tamaño830 = window.innerWidth <= 830 ? true : false;
                let tamaño708 = window.innerWidth <= 708 ? true : false;
                let tamaño540 = window.innerWidth <= 540 ? true : false;

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
        ["click", "touchend"].forEach(evt => {
            link.addEventListener(evt, e => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                 
                window.location.href = "/#" + targetId;
        });
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