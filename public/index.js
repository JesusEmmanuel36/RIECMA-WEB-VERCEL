document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      let vistaActual = window.innerWidth <= 830 ? "celular" : "escritorio";


      const botonLogo = document.getElementById("ButtonlogoHolder")
      const mision = document.getElementById("mision")
      const textoMision = document.getElementById("textoMision")
      const textoVision = document.getElementById("textoVision")
      const imagenMision = document.getElementById("misionImagen")
      const holderSecciones = document.getElementById("holderSecciones");
      const botonMenu = document.getElementById("menu");
      const botonFb = document.getElementById("botonfacebook");
      const botonInsta = document.getElementById("botonInstagram");
      const botonTk = document.getElementById("botonTiktok");
      const AdoptarGato = document.getElementById("AdoptarGato")
      const AdoptarPerro = document.getElementById("AdoptarPerro")
      const botonDona = document.getElementById("donaciones")
      const botonDonaMenu = document.getElementById("botonDonaciones")
      const FbButtonFooter = document.getElementById("FbButtonFooter")
      const InstaButtonFooter = document.getElementById("InstaButtonFooter")
      const TkButtonFooter = document.getElementById("TkButtonFooter")
      const botonMision = document.getElementById("botonMision")
      const botonVision = document.getElementById("botonVision")
      const botonServicios = document.getElementById("botonServicios")
      const botonAdoptar = document.getElementById("botonAdoptar")
       
      const textoVisionCel = "Ser reconocidos por promover la conciencia sobre el cuidado, protección y bienestar de los animales y del medio ambiente, en colaboración con la comunidad y distintos organismos."
      const textoVisionPC = "Ser reconocidos por el afán en la difusión de crear conciencia con la comunidad sobre el resguardo, protección, cuidado y bienestar que fomente y promueva la responsabilidad sobre los animales y el Medio Ambiente, en alianza con organismos gubernamentales, Privados, sociales y comunidad en general."

      let tamaño1600 = window.innerWidth <= 1600 ? true : false;
      let tamaño1160 = window.innerWidth <= 1160 ? true : false;
      let tamaño950 = window.innerWidth <= 950 ? true : false;
      let tamaño830 = window.innerWidth <= 830 ? true : false;
      let tamaño708 = window.innerWidth <= 708 ? true : false;
      let tamaño540 = window.innerWidth <= 540 ? true : false;

      try {
        if (tamaño540) {
          imagenMision.src = "imagenes/russkiy-toy-sitting-floor-Photoroom.png";
          mision.style.height = "350px";
          imagenMision.style.width = "230px";
          imagenMision.style.height = "100%";


          textoMision.textContent = "Somos una Asociación Civil de niños, padres y maestras dedicada al rescate y protección de animales, así como al cuidado del medio ambiente.";
          textoVision.textContent = textoVisionCel
        } else if (tamaño708) {
          imagenMision.src = "imagenes/russkiy-toy-sitting-floor-Photoroom.png";
          textoMision.textContent =
            "Somos una Asociación Civil de niños, padres y maestras dedicada al rescate y protección de animales, así como al cuidado del medio ambiente.";
          textoVision.textContent = textoVisionCel
          imagenMision.style.width = "300px";
          mision.style.height = "400px";
          
        } else if (tamaño830) {
          imagenMision.src = "imagenes/russkiy-toy-sitting-floor-Photoroom.png";
          imagenMision.style.width = "300px";
          mision.style.height = "400px";
          textoVision.textContent = textoVisionPC
          textoMision.textContent =
            "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
        } else if (tamaño950) {
          imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
          imagenMision.style.width = "540px";
          mision.style.height = "480px";
          textoVision.textContent = textoVisionPC
          textoMision.textContent =
            "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
        } else if (tamaño1160) {
          imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
          imagenMision.style.width = "620px";
          mision.style.height = "500px";
          textoVision.textContent = textoVisionPC
          textoMision.textContent =
            "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
        } else if (tamaño1600) {
          imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
          imagenMision.style.width = "800px";
          mision.style.height = "600px";
          textoVision.textContent = textoVisionPC
          textoMision.textContent =
            "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
        } else {
          imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
          imagenMision.style.width = "1000px";
          mision.style.height = "674px";
          textoVision.textContent = textoVisionPC
          textoMision.textContent =
            "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
        }
      } catch (error) {
        console.error("Error en el bloque de misión/visión:", error);
      }



      const items = gsap.utils.toArray("#holderSecciones li");
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
          // Preparar antes de mostrar
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

          // Animar los elementos li dentro
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

      AdoptarPerro.addEventListener("click", () =>{
        window.location.href = "perros";
      })

      AdoptarGato.addEventListener("click", () =>{
        window.location.href = "gatos";
      })

      botonDona.addEventListener("click", () =>{
        window.location.href = "donativos";
      })

      botonDonaMenu.addEventListener("click", () =>{
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

        const tamañoActual = window.innerWidth

        let tamaño1600 = window.innerWidth <= 1600 ? true : false;
        let tamaño1160 = window.innerWidth <= 1160 ? true : false;
        let tamaño950 = window.innerWidth <= 950 ? true : false;
        let tamaño830 = window.innerWidth <= 830 ? true : false;
        let tamaño708 = window.innerWidth <= 708 ? true : false;
        let tamaño540 = window.innerWidth <= 540 ? true : false;

        try {
          if (tamaño540) {
            imagenMision.src = "imagenes/russkiy-toy-sitting-floor-Photoroom.png";
            mision.style.height = "350px";
            imagenMision.style.width = "230px";
            imagenMision.style.height = "100%";
            textoVision.textContent = textoVisionCel
            textoMision.textContent =
              "Somos una Asociación Civil de niños, padres y maestras dedicada al rescate y protección de animales, así como al cuidado del medio ambiente.";
          } else if (tamaño708) {
            imagenMision.src = "imagenes/russkiy-toy-sitting-floor-Photoroom.png";
            textoVision.textContent = textoVisionCel
            textoMision.textContent =
              "Somos una Asociación Civil de niños, padres y maestras dedicada al rescate y protección de animales, así como al cuidado del medio ambiente.";
            imagenMision.style.width = "300px";
            mision.style.height = "400px";
          } else if (tamaño830) {
            imagenMision.src = "imagenes/russkiy-toy-sitting-floor-Photoroom.png";
            imagenMision.style.width = "300px";
            mision.style.height = "400px";
            textoVision.textContent = textoVisionPC
            textoMision.textContent =
              "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
          } else if (tamaño950) {
            imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
            imagenMision.style.width = "540px";
            mision.style.height = "480px";
            textoVision.textContent = textoVisionPC
            textoMision.textContent =
              "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
          } else if (tamaño1160) {
            imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
            imagenMision.style.width = "620px";
            mision.style.height = "500px";
            textoVision.textContent = textoVisionPC
            textoMision.textContent =
              "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
          } else if (tamaño1600) {
            imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
            imagenMision.style.width = "800px";
            mision.style.height = "600px";
            textoVision.textContent = textoVisionPC
            textoMision.textContent =
              "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
          } else {
            imagenMision.src = "imagenes/photo-1597467300696-ce10c74bbaa1-Photoroom.png";
            imagenMision.style.width = "1000px";
            mision.style.height = "674px";
            textoVision.textContent = textoVisionPC
            textoMision.textContent =
              "Somos una Asociación Civil integrada por niños de primaria y secundaria, padres de familia y maestras; dedicada al rescate, guarda, protección y promoción de animales y del Bienestar Animal en todas sus vertientes así como Protección al Medio Ambiente.";
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
          vistaActual = nuevaVista; 
        }
      });
    });

     fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footerHolder").innerHTML = data;

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