import { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import { InfoContainer } from '../InfoContainer/InfoContainer';
import { MapContainer, MapMarker } from './Map.styled';
import data from '../../db/db.json';

const AnyReactComponent = ({ text, lat, lng, map }) => {
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
const Map = ({ listings, selectedListing, onSelectListing, onAddListing }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDFQMHQh4fBaF0z1iTq-RtCEXYeGk0QG3w&libraries=geometry`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  // const center = { lat: 0, lng: 0 };
  // const [showInfo, setShowInfo] = useState(false);

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFetchedData(data);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(data);
  //     try {
  //       const response = await fetch('./db.json');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //       setFetchedData(data);
  //     } catch (error) {
  //       console.error('Error loading listings:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleMapClick = ({ lat, lng, title }) => {
  //   const newListing = {
  //     id: fetchedData.length + 1,
  //     lat,
  //     lng,
  //     title,
  //   };

  //   onAddListing(newListing);
  //   onSelectListing(newListing);
  //   setShowInfo(true);
  // };

  // const handleMarkerClick = (listing) => {
  //   onSelectListing(listing);
  //   setShowInfo(true);
  // };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDFQMHQh4fBaF0z1iTq-RtCEXYeGk0QG3w' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {/* {fetchedData.map((listing) => (
          <AnyReactComponent
            key={listing.id}
            lat={listing.lat}
            lng={listing.lng}
            text={listing.title}
          />
        ))} */}
        <AnyReactComponent lat={10.99835602} lng={77.01502627} text="My Maer" />
      </GoogleMapReact>
    </div>
    // <MapContainer>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: 'AIzaSyDFQMHQh4fBaF0z1iTq-RtCEXYeGk0QG3w' }}
    //     defaultCenter={center}
    //     defaultZoom={3}
    //     onClick={handleMapClick}
    //   >
    //     {fetchedData.map((listing) => (
    //       <MapMarker
    //         key={listing.id}
    //         lat={listing.lat}
    //         lng={listing.lng}
    //         onClick={() => handleMarkerClick(listing)}
    //       >
    //         {listing.title}
    //       </MapMarker>
    //     ))}
    //   </GoogleMapReact>
    //   {showInfo && selectedListing && (
    //     <InfoContainer>{selectedListing}</InfoContainer>
    //   )}
    // </MapContainer>
  );
};

export default Map;
