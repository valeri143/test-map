import {
  ListingsContainer,
  ListingsHeader,
  ListingsList,
  ListingsItem,
} from './Listings.styled';

const Listings = ({ listings, onSelectListing }) => {
  return (
    <ListingsContainer>
      <ListingsHeader>Listings</ListingsHeader>
      <ListingsList>
        {listings.map((listing) => (
          <ListingsItem
            key={listing.id}
            onClick={() => onSelectListing(listing)}
          >
            {listing.title}
          </ListingsItem>
        ))}
      </ListingsList>
    </ListingsContainer>
  );
};

export default Listings;
