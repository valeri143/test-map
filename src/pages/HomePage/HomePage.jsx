import { useState } from 'react';
import Map from '../../components/Map/Map';
import Listings from '../../components/Listings/Listings';
import AddListingForm from '../../components/AddListingForm/AddListingForm';

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleSelectListing = (listing) => {
    setSelectedListing(listing);
  };

  const handleAddListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  return (
    <>
      <Map
        listings={listings}
        selectedListing={selectedListing}
        onSelectListing={handleSelectListing}
        onAddListing={handleAddListing}
      />
      <Listings listings={listings} onSelectListing={handleSelectListing} />
      <AddListingForm onAddListing={handleAddListing} />
    </>
  );
};

export default HomePage;
