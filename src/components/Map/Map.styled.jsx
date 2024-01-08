import styled from 'styled-components';

export const MapContainer = styled.div`
  display: flex;
  gap: 5px;
  height: 400px;
  margin-bottom: 20px;
`;

export const MapMarker = styled.div`
  position: absolute;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  left: ${(props) => props.$lat}px;
  top: ${(props) => props.$lng}px;
`;
