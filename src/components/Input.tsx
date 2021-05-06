import { HelperText } from "../StyledApp";
import { StyledInput, InputDiv, IconDiv, StyledTextArea } from "./StyledInput";

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
const Input = ({
  disabled,
  inputSize,
  shouldShowShadow,
  color,
  PlaceHolder,
  rightIcon,
  leftIcon,
  error,
  multiline,
  row,
}: IInput) => {
  return (
    <InputDiv rightIcon={rightIcon} leftIcon={leftIcon}>
      {multiline ? (
        <StyledTextArea
          disabled={disabled}
          color={color}
          shouldShowShadow={shouldShowShadow}
          placeholder={PlaceHolder}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          error={error}
          inputSize={inputSize}
          row={row}
        />
      ) : null}

      {error ? (
        <>
          <StyledInput
            disabled={disabled}
            color={color}
            shouldShowShadow={shouldShowShadow}
            placeholder={PlaceHolder}
            rightIcon={rightIcon}
            leftIcon={leftIcon}
            error={error}
            inputSize={inputSize}
            multiline={multiline}
          />

          <HelperText
            style={{ color: "#fc2403", marginTop: 5, marginLeft: 10 }}
          >
            An error ocurred!
          </HelperText>
        </>
      ) : null}

      {!multiline && !error ? (
        <StyledInput
          disabled={disabled}
          color={color}
          shouldShowShadow={shouldShowShadow}
          placeholder={PlaceHolder}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          error={error}
          inputSize={inputSize}
          multiline={multiline}
        />
      ) : null}

      <IconDiv>
        {(leftIcon ? leftIcon : null) || (rightIcon ? rightIcon : null)}
      </IconDiv>
    </InputDiv>
  );
};

export default Input;
