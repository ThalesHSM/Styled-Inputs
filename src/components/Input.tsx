import { StyledInput, InputDiv, IconDiv, StyledTextArea } from "./StyledInput";

interface IInput {
  disabled?: boolean;
  icon?: any;
  inputSize?: "sm" | "lg";
  shouldShowShadow?: boolean;
  color?: "purple" | "green" | "orange";
  PlaceHolder?: "PlaceHolder" | "Default" | "ERROR";
  endIcon?: any;
  error?: boolean;
  multiline?: boolean;
  row?: "2" | "3" | "4";
}

const Input = ({
  disabled,
  icon,
  inputSize,
  shouldShowShadow,
  color,
  PlaceHolder,
  endIcon,
  error,
  multiline,
  row,
}: IInput) => {
  return (
    <InputDiv endIcon={endIcon}>
      {multiline ? (
        <StyledTextArea
          disabled={disabled}
          color={color}
          shouldShowShadow={shouldShowShadow}
          placeholder={PlaceHolder}
          icon={icon}
          endIcon={endIcon}
          error={error}
          inputSize={inputSize}
          row={row}
        />
      ) : (
        <StyledInput
          disabled={disabled}
          color={color}
          shouldShowShadow={shouldShowShadow}
          placeholder={PlaceHolder}
          endIcon={endIcon}
          icon={icon}
          error={error}
          inputSize={inputSize}
          multiline={multiline}
        />
      )}

      <IconDiv>{icon && icon}</IconDiv>
    </InputDiv>
  );
};

export default Input;
