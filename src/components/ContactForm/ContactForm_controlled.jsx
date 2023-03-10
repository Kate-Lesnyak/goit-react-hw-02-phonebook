// import { Component } from 'react';

// import {
//   StyledForm,
//   StyledFormField,
//   StyledLabel,
//   StyledInput,
//   StyledButton,
// } from './ContactForm.styled';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// export class ContactForm extends Component {
//   state = { ...INITIAL_STATE };

//   handleInputChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <StyledForm onSubmit={this.handleSubmit}>
//         <StyledFormField>
//           <StyledLabel>Name</StyledLabel>
//           <StyledInput
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleInputChange}
//           />
//         </StyledFormField>

//         <StyledFormField>
//           <StyledLabel>Number</StyledLabel>
//           <StyledInput
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleInputChange}
//           />
//         </StyledFormField>
//         <StyledButton type="submit">Add contacts</StyledButton>
//       </StyledForm>
//     );
//   }
// }
