import {
  ListingsContainer,
  ListingsHeader,
  ListingsList,
  ListingsItem,
} from './Listings.styled';

const Listings = ({ listings, onSelectListing }) => {
  return (
    listings.length !== 0 && (
      <ListingsContainer>
        <ListingsHeader>Переглянуті</ListingsHeader>
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
    )
  );
};

export default Listings;
