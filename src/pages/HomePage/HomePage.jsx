import { useState, useEffect } from 'react';
import Map from '../../components/Map/Map.jsx';
import Listings from '../../components/Listings/Listings';
import AddListingForm from '../../components/AddListingForm/AddListingForm';
import data from '../../db/db.json';

const HomePage = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    setFetchedData(data);
  }, [listings]);

  const handleSelectListing = (listing) => {
    setSelectedListing(listing);
    setListings((prevListings) => {
      if (!prevListings.some((l) => l.id === listing.id)) {
        return [...prevListings, listing];
      } else {
        return prevListings;
      }
    });
  };

  const handleListing = (listing) => {
    setSelectedListing(listing);
  };

  const handleAddListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  return (
    <>
      <Map
        fetchedData={fetchedData}
        selectedListing={selectedListing}
        onSelectListing={handleSelectListing}
        onAddListing={handleAddListing}
      />
      <Listings listings={listings} onSelectListing={handleListing} />
      <AddListingForm onAddListing={handleAddListing} />
    </>
  );
};

export default HomePage;
