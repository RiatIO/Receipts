import React from "react";
import Dialog from "react-native-dialog";
import styled from "styled-components/native";
import { FAB } from "../../../../components/FAB";
import { Alert, StyleSheet, Pressable, Modal, Button } from "react-native";
import { Text, View } from "../../../../components/Themed";

const Container = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
`;

const Content = styled.View`
  align-items: center;
  justify-content: center;
  background-color: blue;
  margin: auto;
  border-radius: 8px;
  width: 300px;
`;

export const CollectionCreate = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Container>
      <Modal
        onRequestClose={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        visible={visible}
        transparent
      >
        <Content>
          <Text>Hello, World!</Text>
          <Button onPress={() => setVisible(false)} title={"Close"} />
        </Content>
      </Modal>
      <FAB onPress={() => setVisible(true)} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  containeralt: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#eee",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    height: 300,
    margin: "auto",
    padding: 30,
    width: 300,
  },
  gap: {
    height: 10,
  },
});
