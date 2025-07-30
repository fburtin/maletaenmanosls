function Hero() {

const videoFiles = [
  "10956667-uhd_3840_2160_30fps.mp4",
  "11652280-hd_1920_1080_30fps.mp4",
  "12177252_3840_2160_30fps.mp4",
  "12219096_3840_2160_30fps.mp4",
  "13326487-hd_1920_1080_30fps.mp4",
  "13447477_3840_2160_25fps.mp4",
  "13680731_3840_2160_25fps.mp4",
  "13907757_3840_2160_25fps.mp4",
  "17579220-hd_1920_1080_25fps.mp4",
  "3015519-hd_1920_1080_24fps.mp4",
  "3018533-hd_1920_1080_24fps.mp4",
  "3115231-hd_1920_1080_24fps.mp4",
  "3143825-uhd_2562_1440_24fps.mp4",
  "3512545-hd_1920_1080_25fps.mp4",
  "3655304-uhd_3840_2160_30fps.mp4",
  "3703770-hd_1920_1080_30fps.mp4",
  "3818213-uhd_3840_2160_30fps.mp4",
  "3853624-hd_1920_1080_30fps.mp4",
  "4035574-uhd_3840_2160_30fps.mp4",
  "4131450-uhd_3840_2160_25fps.mp4",
  "4902988-hd_1920_1080_25fps.mp4",
  "4984759-hd_1920_1080_30fps.mp4",
  "5408391-hd_1920_1080_30fps.mp4",
  "5442766-hd_1920_1080_25fps.mp4",
  "5442787-hd_1920_1080_25fps.mp4",
  "6128490-uhd_3840_2160_30fps.mp4",
  "6141313-uhd_3840_2160_25fps.mp4",
  "7069320-hd_2048_1080_24fps.mp4",
  "8350149-uhd_3840_2160_25fps.mp4",
  "8441278-hd_1920_1080_25fps.mp4"
];



  return (
    <div className="container mt-5">
      <h3 className="mb-4">Galería de destinos</h3>
      <div className="row">
        {videoFiles.map((file, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <video
              src={`/videos/${file}`}
              controls
              muted
              autoPlay
              loop
              style={{ width: '100%' }}
            >
              Tu navegador no soporta el video.
            </video>
            <small className="d-block mt-1 text-muted">{file}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
