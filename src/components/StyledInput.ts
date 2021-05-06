import styled, { css } from "styled-components";
import { shade } from "polished";

interface IInput {
  disabled?: boolean;
  inputSize?: "sm" | "lg";
  shouldShowShadow?: boolean;
  color?: "purple" | "green" | "orange";
  PlaceHolder?: "PlaceHolder" | "Default" | "ERROR";
  rightIcon?: any;
  leftIcon?: any;
  error?: boolean;
  multiline?: boolean;
  row?: "2" | "3" | "4";
}

export const InputDiv = styled.div<IInput>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  svg {
    color: #000;
    width: 25px;
    height: 25px;
  }

  ${(props) =>
    props.rightIcon &&
    css`
      align-items: flex-end;
    `}

  ${(props) =>
    props.leftIcon &&
    css`
      align-items: flex-start;
    `}
`;

export const IconDiv = styled.span`
  position: absolute;
`;

export const StyledTextArea = styled.textarea<IInput>`
  height: 50px;
  width: 100px;

  ${(props) =>
    props.row === "2"
      ? css`
          height: 75px;
          width: 150px;
        `
      : props.row === "3"
      ? css`
          height: 100px;
          width: 200px;
        `
      : props.row === "4" &&
        css`
          height: 125px;
          width: 250px;
        `}
`;

export const StyledInput = styled.input<IInput>`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  outline: none;
  font-family: Verdana;
  box-sizing: border-box;

  :focus {
    border-color: #0a0ecf;
    border-width: 3px;
  }

  padding-right: ${({ rightIcon }) => (rightIcon ? "40px" : "12px")};

  padding-left: ${({ leftIcon }) => (leftIcon ? "40px" : "12px")};

  ${(props) =>
    props.inputSize === "sm"
      ? css`
          width: 100px;
        `
      : props.inputSize === "lg" &&
        css`
          width: 400px;
        `}

  ${(props) =>
    props.shouldShowShadow === true &&
    css`
      box-shadow: 10px 10px 8px #888888;
    `}

  ${(props) =>
    props.disabled === true &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `}

    ${(props) =>
    props.error === true &&
    css`
      border-color: #fc2403;
      border-width: 3px;

      margin-top: 37px;
      :focus {
        border-color: #fc2403;
      }
    `}

    ${(props) =>
    props.color === "green"
      ? css`
          background-color: #54c481;
          :hover {
            background: ${shade(0.2, "#54c481")};
          }
          :focus {
            border-color: #8fde5f;
            border-width: 3px;
          }
        `
      : props.color === "purple"
      ? css`
          background-color: #c34ac7;
          :hover {
            background: ${shade(0.2, "#c34ac7")};
          }
          :focus {
            border-color: #9909e8;
            border-width: 3px;
          }
        `
      : props.color === "orange" &&
        css`
          background-color: #f54a16;
          :hover {
            background: ${shade(0.2, "#f54a16")};
          }
          :focus {
            border-color: #db000b;
            border-width: 3px;
          }
        `}
`;
