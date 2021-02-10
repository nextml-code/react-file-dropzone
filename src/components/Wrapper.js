import styled, { css } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  font-weight: ${(props) => props.styles.fontWeight};
  color: ${(props) => props.styles.color};
  font-family: ${(props) => props.styles.fontFamily};
  background-color: ${(props) => props.styles.backgroundColor};
  font-size: ${(props) => props.styles.fontSize};
  border: ${(props) => props.styles.border};
  border-top-left-radius: ${(props) => props.styles.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.styles.borderTopRightRadius};
  border-bottom-right-radius: ${(props) =>
    props.styles.borderBottomRightRadius};
  border-bottom-left-radius: ${(props) => props.styles.borderBottomLeftRadius};

  ${(props) =>
    props.dragging &&
    css`
      color: ${(props) => props.styles.colorDragging};
      background-color: ${(props) => props.styles.backgroundColorDragging};
    `}
`;

export default Wrapper;
