import { useRef, useEffect } from 'react';

const Marker = ({ text, lat, lng, map }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (map && markerRef.current) {
      const projection = map.getProjection();
      const point = projection.fromLatLngToPoint(
        new window.google.maps.LatLng(lat, lng)
      );
      const x = point.x * Math.pow(2, map.getZoom());
      const y = point.y * Math.pow(2, map.getZoom());

      markerRef.current.style.left = `${x}px`;
      markerRef.current.style.top = `${y}px`;
    }
  }, [map, lat, lng]);

  return (
    <div
      ref={markerRef}
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {text}
    </div>
  );
};

export default Marker;
