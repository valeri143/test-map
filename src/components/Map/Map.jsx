import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { InfoContainer } from '../InfoContainer/InfoContainer';
import { MapContainer, MapMarker } from './Map.styled';
const Map = ({ listings, selectedListing, onSelectListing, onAddListing }) => {
  const center = { lat: 0, lng: 0 };
  const [showInfo, setShowInfo] = useState(false);

  const handleMapClick = ({ lat, lng }) => {
    const newListing = {
      id: listings.length + 1,
      lat,
      lng,
      title: `Listing ${listings.length + 1}`,
    };

    onAddListing(newListing);
    onSelectListing(newListing);
    setShowInfo(true);
  };

  const handleMarkerClick = (listing) => {
    onSelectListing(listing);
    setShowInfo(true);
  };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDFQMHQh4fBaF0z1iTq-RtCEXYeGk0QG3w' }}
        defaultCenter={center}
        defaultZoom={3}
        onClick={handleMapClick}
      >
        {listings.map((listing) => (
          <MapMarker
            key={listing.id}
            lat={listing.lat}
            lng={listing.lng}
            onClick={() => handleMarkerClick(listing)}
          >
            {listing.title}
          </MapMarker>
        ))}
      </GoogleMapReact>
      {showInfo && selectedListing && (
        <InfoContainer>{selectedListing}</InfoContainer>
      )}
    </MapContainer>
  );
};

export default Map;
