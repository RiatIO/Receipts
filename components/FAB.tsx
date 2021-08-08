import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const CircleButton = styled.View`
  width: 50px;
  height: 50px;
  background-color: pink;
  position: fixed;
  bottom: 50px;
  right: 0;
  border-radius: 25px;
`;

const Content = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

interface Props {
  onPress?: () => void;
}

export const FAB: React.FC<Props> = ({ onPress }) => {
  return (
    <CircleButton>
      <Content onPress={onPress && onPress}>
        <Ionicons name="add" size={32} />
      </Content>
    </CircleButton>
  );
};
