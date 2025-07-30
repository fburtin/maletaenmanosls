import '../styles/Destinos.css';

function Destinos() {
  const gallery = [
    {
      country: "Argentina",
      videos: [
        {
          src: "/videos/Argentina/4984759-sd_640_360_30fps.mp4",
          title: "Misiones Cataratas del Iguazú"
        },
        {
          src: "/videos/Argentina/5408391-sd_640_360_30fps.mp4",
          title: "Pasarela Cataratas"
        },
        {
          src: "/videos/Argentina/13735575_640_360_24fps.mp4",
          title: "Misiones Cataratas del Iguazú"
        }
      ]
    },
    {
      country: "Brasil",
      videos: [
        {
          src: "/videos/Brazil/13326487-sd_640_360_30fps.mp4",
          title: "Rio de Janeiro"
        },
        {
          src: "/videos/Brazil/3127125-sd_640_360_30fps.mp4",
          title: "Cristo"
        },
        {
          src: "/videos/Brazil/13326453-sd_640_360_30fps.mp4",
          title: "Playas"
        }
      ]
    },
    {
      country: "Francia",
      videos: [
        {
          src: "/videos/France/2034261-sd_640_360_30fps.mp4",
          title: "Torre Eiffel Paris"
        },
        {
          src: "/videos/France/3703770-sd_640_360_30fps.mp4",
          title: "Museo Louvre Paris"
        },
        {
          src: "/videos/France/8531830-sd_640_360_25fps.mp4",
          title: "Quesos"
        }
      ]
    },
    {
      country: "Italia",
      videos: [
        {
          src: "/videos/Italy/13447472_640_360_25fps.mp4",
          title: "Roma Coliseo"
        },
        {
          src: "/videos/Italy/5912737-sd_640_360_30fps.mp4",
          title: "terraza del Gianicolo (en italiano, Janiculum)"
        },
        {
          src: "/videos/Italy/5979469-sd_640_360_30fps.mp4",
          title: "Venecia"
        }
      ]
    },
    {
      country: "Marruecos",
      videos: [
        {
          src: "/videos/Morocco/3015519-sd_640_360_24fps.mp4",
          title: "Mezquita Kutubía"
        },
        {
          src: "/videos/Morocco/3115231-sd_640_360_24fps.mp4",
          title: "Marruecos Negocio"
        },
        {
          src: "/videos/Morocco/5442766-sd_640_360_25fps.mp4",
          title: "Marruecos Desierto del Sahara"
        }
      ]
    },
    {
      country: "Portugal",
      videos: [
        {
          src: "/videos/Portugal/19052363-sd_640_360_25fps.mp4",
          title: "Santuario Nacional de Cristo Rey"
        },
        {
          src: "/videos/Portugal/19909764-sd_640_360_30fps.mp4",
          title: "Marques Do Pombal"
        },
        {
          src: "/videos/Portugal/5738602-sd_640_360_24fps.mp4",
          title: "Playa de Benagil"
        }
      ]
    },
    {
      country: "España",
      videos: [
        {
          src: "/videos/Spain/17579220-sd_640_360_25fps.mp4",
          title: "Andalucía - Puente Nuevo. Centro de Interpretación"
        },
        {
          src: "/videos/Spain/8441280-sd_640_360_25fps.mp4",
          title: " Plaza de Colón en Madrid"
        },
        {
          src: "/videos/Spain/4243914-sd_640_360_30fps.mp4",
          title: "Palacio Real de Madrid"
        }
      ]
    },
    {
      country: "Suiza",
      videos: [
        {
          src: "/videos/Switzerland/3512545-sd_640_360_25fps.mp4",
          title: "Alpes Suizos"
        },
        {
          src: "/videos/Switzerland/3655304-sd_640_360_30fps.mp4",
          title: "Berna"
        },
        {
          src: "/videos/Switzerland/3217373-sd_640_360_25fps.mp4",
          title: "Alpes Suizos"
        }
      ]
    }
  ];

    return (
    <div className="container mt-5 text-center">
        {gallery.map((item, idx) => (
        <div key={idx} className="mb-5">
            <h3 className="country-title mb-4">{item.country}</h3>
            <div className="row justify-content-center">
            {item.videos.map((video, index) => (
                <div key={index} className="col-md-4 mb-4 d-flex flex-column align-items-center">
                <video
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    playsInline // evita pantalla completa automática en móviles
                    disablePictureInPicture // evita PIP en navegadores compatibles
                    controlsList="nodownload nofullscreen noremoteplayback"
                    style={{ width: "100%", borderRadius: "8px", pointerEvents: 'none' }} // pointerEvents evita clics en el video
                >
                    <source src={video.src} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <small className="mt-2 text-muted">{video.title}</small>
                </div>
            ))}
            </div>
        </div>
        ))}
    </div>
    );
}

export default Destinos;