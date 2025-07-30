function Hero() {
  const gallery = [
    {
      country: "Argentina",
      videos: [
        "/videos/Argentina/4984759-hd_1920_1080_30fps.mp4",
        "/videos/Argentina/5408391-hd_1920_1080_30fps.mp4"
      ]
    },
    {
      country: "Brazil",
      videos: [
        "/videos/Brazil/13326487-hd_1920_1080_30fps.mp4",
        "/videos/Brazil/4902988-hd_1920_1080_25fps.mp4"
      ]
    },
    {
      country: "France",
      videos: ["/videos/France/3703770-hd_1920_1080_30fps.mp4"]
    },
    {
      country: "Italy",
      videos: [
        "/videos/Italy/20606535-hd_1920_1080_24fps.mp4",
        "/videos/Italy/4840581-hd_1920_1080_25fps.mp4"
      ]
    },
    {
      country: "Morocco",
      videos: [
        "/videos/Morocco/3015519-hd_1920_1080_24fps.mp4",
        "/videos/Morocco/3115231-hd_1920_1080_24fps.mp4",
        "/videos/Morocco/5442766-hd_1920_1080_25fps.mp4"
      ]
    },
    {
      country: "Portugal",
      videos: [
        "/videos/Portugal/19052363-hd_1920_1080_25fps.mp4",
        "/videos/Portugal/4820471-hd_1920_1080_25fps.mp4"
      ]
    },
    {
      country: "Spain",
      videos: [
        "/videos/Spain/17579220-hd_1920_1080_25fps.mp4",
        "/videos/Spain/7069320-hd_2048_1080_24fps.mp4"
      ]
    },
    {
      country: "Switzerland",
      videos: [
        "/videos/Switzerland/3512545-hd_1920_1080_25fps.mp4",
        "/videos/Switzerland/3853624-hd_1920_1080_30fps.mp4"
      ]
    }
  ];

  return (
    <div className="container mt-5">
      {gallery.map((item, idx) => (
        <div key={idx} className="mb-5">
          <h4 className="mb-3">{item.country}</h4>
          <div className="row">
            {item.videos.map((videoPath, index) => (
              <div key={index} className="col-md-4 mb-4">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  style={{ width: "100%", borderRadius: "8px" }}
                >
                  <source src={videoPath} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
                <small className="d-block mt-1 text-muted">
                  {videoPath.split("/").pop()}
                </small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
