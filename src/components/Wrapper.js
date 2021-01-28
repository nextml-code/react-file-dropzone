import styled, { css } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-family: var(--aiwizo-application-default-font);
  background-color: var(--aiwizo-application-light-background-blue);
  align-items: center;
  font-weight: 900;
  font-size: var(--aiwizo-application-font-size-big);
  color: #111;
  border-radius: var(--aiwizo-application-border-radius-primary);
  cursor: pointer;
  border: 1px solid var(--aiwizo-application-primary-border-blue);

  ${(props) =>
    props.dragging &&
    css`
      background-color: var(--aiwizo-application-blue);
      color: #ffffff;
    `}
`;

export default Wrapper;
