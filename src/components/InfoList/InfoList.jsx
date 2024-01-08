import { InfoContainer } from '../InfoContainer/InfoContainer';
const InfoList = ({ children }) => {
  return (
    children && (
      <ul>
        {children.map((item) => (
          <li key={item.id}>
            <InfoContainer>{item}</InfoContainer>
          </li>
        ))}
      </ul>
    )
  );
};

export default InfoList;
