import { useState, useEffect } from 'react';
import Map from '../../components/Map/Map.jsx';
import Listings from '../../components/Listings/Listings';
import AddListingForm from '../../components/AddListingForm/AddListingForm';
import dataFromFile from '../../db/db.json';

const HomePage = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    const data = getDataFromLocal('data');
    if (data.length === 0) {
      saveDataToLocal('data', dataFromFile);
    }
    setFetchedData(data);
  }, []);

  const saveDataToLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getDataFromLocal = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };

  const handleAddListing = (newListing) => {
    const updatedData = [...getDataFromLocal(), newListing];
    saveDataToLocal(updatedData);
    setFetchedData(updatedData);
  };

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
