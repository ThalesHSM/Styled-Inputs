import React from "react";
import {
  Div,
  Text,
  HelperText,
  Header,
  InputDiv,
  ComponentDiv,
} from "./StyledApp";
import Input from "./components/Input";
import { AiOutlineCheck, AiOutlineGithub } from "react-icons/ai";

const App: React.FC = () => (
  <InputDiv>
    <Header>Inputs</Header>

    <Div>
      <Text>Simple Input</Text>
      <Input PlaceHolder="Default" />

      <Input PlaceHolder="Default"></Input>
    </Div>

    <Div>
      <Text>Error Input</Text>

      <ComponentDiv>
        <Input error PlaceHolder="ERROR" />
        <HelperText style={{ color: "#fc2403", marginTop: 5 }}>
          An error ocurred!
        </HelperText>
      </ComponentDiv>
    </Div>

    <Div>
      <Text>Input Shadow</Text>
      <Input PlaceHolder="PlaceHolder" shouldShowShadow />
    </Div>

    <Div>
      <Text>Disabled Input</Text>
      <Input disabled />
    </Div>

    <Div>
      <Text>Input Size</Text>

      <ComponentDiv>
        <HelperText>Small</HelperText>
        <Input inputSize="sm" />
      </ComponentDiv>

      <ComponentDiv>
        <HelperText>Large</HelperText>
        <Input inputSize="lg" />
      </ComponentDiv>
    </Div>

    <Div>
      <Text>Input Multiline</Text>

      <ComponentDiv>
        <HelperText>Multiline</HelperText>
        <Input multiline />
      </ComponentDiv>

      <ComponentDiv>
        <HelperText>Multiline row-2</HelperText>
        <Input multiline row="2" />
      </ComponentDiv>

      <ComponentDiv>
        <HelperText>Multiline row-3</HelperText>
        <Input multiline row="3" />
      </ComponentDiv>

      <ComponentDiv>
        <HelperText>Multiline row-4</HelperText>
        <Input multiline row="4" />
      </ComponentDiv>
    </Div>

    <Div>
      <Text>Input with Icon</Text>
      <Input
        icon={<AiOutlineGithub style={{ marginLeft: 10, marginTop: 3 }} />}
      />
      <Input
        icon={<AiOutlineCheck style={{ marginRight: 10, marginTop: 3 }} />}
        endIcon
      />
    </Div>

    <Div>
      <Text>Input Color</Text>
      <Input color="green" />
      <Input color="purple" />
      <Input color="orange" />
    </Div>
  </InputDiv>
);

export default App;
