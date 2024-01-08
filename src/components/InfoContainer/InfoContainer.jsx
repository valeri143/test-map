import { StyledInfoContainer } from './InfoContainer.styled';
export const InfoContainer = ({ children }) => {
  return (
    children && (
      <StyledInfoContainer>
        <h3>{children.title}</h3>
        <img src={children.image} alt={children.description} />
        <p>Latitude: {children.lat}</p>
        <p>Longitude: {children.lng}</p>
        <p>Description: {children.description}</p>
      </StyledInfoContainer>
    )
  );
};
