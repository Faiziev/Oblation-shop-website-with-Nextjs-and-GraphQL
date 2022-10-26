function MapEmbed() {
  return (
    <div className="map-responsive">
      <style jsx global>
        {`
        .map-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          width: 100%;
          height: 0;
        }
        
        .map-responsive iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }      
      `}
      </style>
      <iframe
        width="853"
        height="480"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.3399020510245!2d28.647315384900512!3d41.03926443067515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b559f9e42fac11%3A0xeeb6dbbac1cfc555!2zQmxrIFnEsWxkxLFyxLFtIEFkYWsgS3VyYmFu!5e0!3m2!1sen!2str!4v1666633933560!5m2!1sen!2str"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded map"
        style={{border: 0}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapEmbed;
