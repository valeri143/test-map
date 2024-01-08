import styled from 'styled-components';

export const ListingsContainer = styled.div`
  margin-left: 15px;
`;

export const ListingsHeader = styled.h2`
  color: #3498db;
`;

export const ListingsList = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const ListingsItem = styled.li`
  background-color: #ecf0f1;
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bdc3c7;
  }
`;
