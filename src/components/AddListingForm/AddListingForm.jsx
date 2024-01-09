import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './AddListingForm.styled';

const AddListingForm = ({ onAddListing }) => {
  const formik = useFormik({
    initialValues: {
      lat: '',
      lng: '',
      title: '',
      description: '',
    },
    onSubmit: (values) => {
      onAddListing({ ...values, id: nanoid() });
      formik.resetForm();
    },
  });

  return (
    <FormContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel>
          Latitude:
          <StyledInput
            type="number"
            name="lat"
            value={formik.values.lat}
            onChange={formik.handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Longitude:
          <StyledInput
            type="number"
            name="lng"
            value={formik.values.lng}
            onChange={formik.handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Title:
          <StyledInput
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Description:
          <StyledInput
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </StyledLabel>
        <StyledButton type="submit">Add</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default AddListingForm;
