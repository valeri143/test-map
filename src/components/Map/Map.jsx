import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import InfoList from '../InfoList/InfoList';
import { InfoContainer } from '../InfoContainer/InfoContainer';
import { MapContainer, MapMarker } from './Map.styled';

const API_KEY = import.meta.env.REACT_APP_API_KEY;

console.log(API_KEY);

const Map = ({ fetchedData, selectedListing, onSelectListing }) => {
  const [visibleListings, setVisibleListings] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    const centerMap = () => {
      if (fetchedData.length > 0) {
        const center = fetchedData.reduce(
          (a, b) => {
            return {
              lat: (a.lat + b.lat) / 2,
              lng: (a.lng + b.lng) / 2,
            };
          },
          { lat: 0, lng: 0 }
        );
        setCenter(center);
      }
    };

    centerMap();
  }, [fetchedData]);

  const handleMapChange = ({ center, zoom, bounds }) => {
    const visibleListings = fetchedData.filter((listing) => {
      const isInBounds =
        listing.lat >= bounds.sw.lat &&
        listing.lat <= bounds.ne.lat &&
        listing.lng >= bounds.sw.lng &&
        listing.lng <= bounds.ne.lng;

      return isInBounds;
    });

    setVisibleListings(visibleListings);
    setCenter(center);
    setZoom(zoom);
  };

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

  return (
    <MapContainer>
      <GoogleMapReact
        key={fetchedData.length}
        bootstrapURLKeys={{ key: 'AIzaSyDFQMHQh4fBaF0z1iTq-RtCEXYeGk0QG3w' }}
        zoom={zoom}
        center={center}
        onChange={({ center, zoom, bounds }) =>
          handleMapChange({ center, zoom, bounds })
        }
      >
        {fetchedData.map((listing) => (
          <MapMarker
            key={listing.id}
            lat={listing.lat}
            lng={listing.lng}
            onClick={() => onSelectListing(listing)}
          >
            {listing.title}
          </MapMarker>
        ))}
      </GoogleMapReact>
      {fetchedData && visibleListings.length === 0 && (
        <InfoList>{fetchedData}</InfoList>
      )}
      {visibleListings.length > 0 && !selectedListing && (
        <InfoList>{visibleListings}</InfoList>
      )}
      {selectedListing && <InfoContainer>{selectedListing}</InfoContainer>}
    </MapContainer>
  );
};

export default Map;
