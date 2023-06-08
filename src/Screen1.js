import React, { useEffect } from "react";
import { View, Text, Image, ImageBackground } from "react-native";

const Screen1 = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Screen2");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground
      source={require("./photos/award_bg.png")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("./photos/castingLogo.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
        <Image
          source={require("./photos/girlClap.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>
    </ImageBackground>
  );
};

export default Screen1;
