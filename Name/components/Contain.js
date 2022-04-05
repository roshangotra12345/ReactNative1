import { View, Text, Image } from "react-native";
import React from "react";

const Contain = () => {
  return (
    <View>
      <Image
        source={{
          uri: "http://www.protekdevices.com/xyz/images/placeholder/700x400.gif",
        }}
        style={{
          width: 300,
          paddingTop: 0,
          padding: 20,
          marginLeft: 25,
          marginRight: 20,
          marginBottom: 0,
          marginTop: 50,
          height: 400,
        }}
      />
      <Text
        style={{
          color: '#7C8BCC',
          fontSize: 20,
          marginLeft: 20,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        Project Name
      </Text>
      <Text style={{ marginLeft: 20, marginRight: 10, color:"red" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
    </View>
  );
};

export default Contain;
