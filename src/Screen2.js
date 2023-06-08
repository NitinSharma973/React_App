import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

const Screen2 = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  const timeout = setTimeout(() => {
    navigation.navigate("Screen3");
  }, 20000);

  const handleArrowPress = () => {
    navigation.navigate("Screen3");
  };

  return (
    <ImageBackground
      source={require("./photos/award_bg.png")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [500, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Image
            source={require("./photos/avtar2.png")}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 40,
            }}
          />
        </Animated.View>

        <Image
          source={require("./photos/main-heart.png")}
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.imageText}>Gave U some Love</Text>
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

export default Screen2;

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
