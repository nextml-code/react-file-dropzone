import styled from "styled-components";

const Label = styled.label`
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: ${(props) => props.styles.padding};
`;

export default Label;
