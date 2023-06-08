import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 40000) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowPress = () => {
    navigation.navigate("Screen1");
  };

  return (
    <ImageBackground
      source={require("./photos/award_bg.png")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("./photos/main-heart.png")}
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.imageText}> {count}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("./photos/girlClap.png")}
              style={styles.image}
            />
            <TouchableOpacity
              onPress={handleArrowPress}
              style={{
                marginTop: 20,
                padding: 10,
                borderRadius: 5,
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("./photos/arrow.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </View>
          {/* Rest of your content */}
        </View>
        <Image
          source={require("./photos/awardPlatform.png")}
          style={{
            width: 300,

            resizeMode: "contain",
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Screen3;
const styles = StyleSheet.create({
  arrowImage: {
    width: 100,
    height: 100,
  },

  imagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 230,
    marginHorizontal: 60, // Adjust the spacing between images
  },
  imageText: {
    fontSize: 20,
    color: "yellow",
    fontWeight: "bold",
  },
});
