import '../styles/Destinos.css';

function Destinos() {
  const gallery = [
    {
      country: "Argentina",
      videos: [
        {
          src: "/videos/Argentina/4984759-hd_1920_1080_30fps.mp4",
          title: "Misiones Cataratas del Iguazú"
        },
        {
          src: "/videos/Argentina/5408391-hd_1920_1080_30fps.mp4",
          title: "Pasarela Cataratas"
        }
      ]
    },
    {
      country: "Brasil",
      videos: [
        {
          src: "/videos/Brazil/13326487-hd_1920_1080_30fps.mp4",
          title: "Rio de Janeiro"
        },
        {
          src: "/videos/Brazil/4902988-hd_1920_1080_25fps.mp4",
          title: "Cristo"
        }
      ]
    },
    {
      country: "Francia",
      videos: [
        {
          src: "/videos/France/2034261-hd_1920_1080_30fps.mp4",
          title: "Torre Eiffel Paris"
        },
        {
          src: "/videos/France/3703770-hd_1920_1080_30fps.mp4",
          title: "Museo Louvre Paris"
        }
      ]
    },
    {
      country: "Italia",
      videos: [
        {
          src: "/videos/Italy/20606535-hd_1920_1080_24fps.mp4",
          title: "Roma Coliseo"
        },
        {
          src: "/videos/Italy/4840581-hd_1920_1080_25fps.mp4",
          title: "Roma La Fuente de Trevi"
        }
      ]
    },
    {
      country: "Marruecos",
      videos: [
        {
          src: "/videos/Morocco/3015519-hd_1920_1080_24fps.mp4",
          title: "Mezquita Kutubía"
        },
        {
          src: "/videos/Morocco/3115231-hd_1920_1080_24fps.mp4",
          title: "Marruecos Negocio"
        },
        {
          src: "/videos/Morocco/5442766-hd_1920_1080_25fps.mp4",
          title: "Marruecos Desierto del Sahara"
        }
      ]
    },
    {
      country: "Portugal",
      videos: [
        {
          src: "/videos/Portugal/19052363-hd_1920_1080_25fps.mp4",
          title: "Santuario Nacional de Cristo Rey"
        },
        {
          src: "/videos/Portugal/4820471-hd_1920_1080_25fps.mp4",
          title: "Marques Do Pombal"
        }
      ]
    },
    {
      country: "España",
      videos: [
        {
          src: "/videos/Spain/17579220-hd_1920_1080_25fps.mp4",
          title: "Andalucía - Puente Nuevo. Centro de Interpretación"
        },
        {
          src: "/videos/Spain/7069320-hd_2048_1080_24fps.mp4",
          title: "Madrid"
        }
      ]
    },
    {
      country: "Suiza",
      videos: [
        {
          src: "/videos/Switzerland/3512545-hd_1920_1080_25fps.mp4",
          title: "Alpes Suizos"
        },
        {
          src: "/videos/Switzerland/3853624-hd_1920_1080_30fps.mp4",
          title: "Berna"
        }
      ]
    }
  ];

    return (
    <div className="container mt-5 text-center">
      {gallery.map((item, idx) => (
        <div key={idx} className="mb-5">
          <h3  className="country-title mb-4">{item.country}</h3>
          <div className="row justify-content-center">
            {item.videos.map((video, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex flex-column align-items-center">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  style={{ width: "100%", borderRadius: "8px" }}
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