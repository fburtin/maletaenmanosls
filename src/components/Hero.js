function Hero() {
  const fileId = '18c9DpWlcixSF-X2aH1bFxsPV72vFkGZn'; // Replace with actual ID
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={embedUrl}
        allow="autoplay"
        allowFullScreen
        title="Video desde Google Drive"
      ></iframe>
    </div>
  );
}

export default Hero;
