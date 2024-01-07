import { StyledInfoContainer } from './InfoContainer.styled';
export const InfoContainer = ({ children }) => {
  return (
    <StyledInfoContainer>
      <h3>{children.title}</h3>
      <p>Latitude: {children.lat}</p>
      <p>Longitude: {children.lng}</p>
    </StyledInfoContainer>
  );
};
