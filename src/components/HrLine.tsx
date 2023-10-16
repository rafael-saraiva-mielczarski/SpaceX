import styled from "styled-components/native";

export default function HrLine() {
  return <StyledHrLine testID="hr-line" />;
}

const StyledHrLine = styled.View`
  border: 1px solid black;
  width: 100%;
`;
