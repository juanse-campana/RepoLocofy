import * as React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.parent}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1-1.png")}
      />
      <Text style={styles.userPost1}>User_Post_1</Text>
      <Image
        style={[styles.clipPathGroup, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/clip-path-group.png")}
      />
      <Image
        style={[styles.navigationHouse01, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/navigation--house-01.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={styles.shapeWithText}
        resizeMode="cover"
        source={require("../assets/shape-with-text.png")}
      />
      <View style={styles.header3Layout}>
        <Image
          style={styles.shapeWithText1}
          resizeMode="cover"
          source={require("../assets/shape-with-text1.png")}
        />
        <View style={styles.header3Layout}>
          <View style={[styles.header3, styles.header3Border]} />
        </View>
      </View>
      <View style={styles.shapeWithText2} />
      <Text style={[styles.text, styles.textClr]}>9</Text>
      <Image
        style={[styles.vectorIcon5, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <ScrollView style={styles.carrusel}>
        <View style={styles.shapeWithTextGroup}>
          <Image
            style={styles.shapeWithText3}
            resizeMode="cover"
            source={require("../assets/shape-with-text2.png")}
          />
          <View style={styles.shapeLayout}>
            <View style={[styles.shapeWithText4, styles.shapeLayout]} />
          </View>
          <Text style={[styles.tuHistoria, styles.user1Typo]}>Tu historia</Text>
          <Image
            style={[styles.groupChild, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-5.png")}
          />
        </View>
        <View style={styles.shapeWithTextGroup}>
          <Image
            style={styles.shapeWithText3}
            resizeMode="cover"
            source={require("../assets/shape-with-text2.png")}
          />
          <View style={styles.shapeLayout}>
            <View style={[styles.shapeWithText4, styles.shapeLayout]} />
          </View>
          <Text style={[styles.user1, styles.user1Typo]}>user_1</Text>
        </View>
        <View style={styles.shapeWithTextGroup}>
          <Image
            style={styles.shapeWithText3}
            resizeMode="cover"
            source={require("../assets/shape-with-text2.png")}
          />
          <View style={styles.shapeLayout}>
            <View style={[styles.shapeWithText4, styles.shapeLayout]} />
          </View>
          <Text style={[styles.user1, styles.user1Typo]}>user_1</Text>
        </View>
        <View style={styles.shapeWithTextGroup}>
          <Image
            style={styles.shapeWithText3}
            resizeMode="cover"
            source={require("../assets/shape-with-text2.png")}
          />
          <View style={styles.shapeLayout}>
            <View style={[styles.shapeWithText4, styles.shapeLayout]} />
          </View>
          <Text style={[styles.user1, styles.user1Typo]}>user_1</Text>
        </View>
        <View style={styles.shapeWithTextGroup}>
          <Image
            style={styles.shapeWithText3}
            resizeMode="cover"
            source={require("../assets/shape-with-text2.png")}
          />
          <View style={styles.shapeLayout}>
            <View style={[styles.shapeWithText4, styles.shapeLayout]} />
          </View>
          <Text style={[styles.user1, styles.user1Typo]}>user_1</Text>
        </View>
        <View style={styles.shapeWithTextGroup}>
          <Image
            style={styles.shapeWithText3}
            resizeMode="cover"
            source={require("../assets/shape-with-text2.png")}
          />
          <View style={styles.shapeLayout}>
            <View style={[styles.shapeWithText4, styles.shapeLayout]} />
          </View>
          <Text style={[styles.user1, styles.user1Typo]}>user_1</Text>
        </View>
      </ScrollView>
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text1, styles.textClr]}>1/6</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "5.62%",
    bottom: "7.82%",
  },
  vectorIconPosition: {
    top: "89.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  header3Border: {
    borderWidth: 4,
    borderColor: Color.colorDarkorchid,
    borderStyle: "solid",
  },
  textClr: {
    color: Color.color2,
    textAlign: "center",
    position: "absolute",
  },
  shapeLayout: {
    height: 109,
    width: 109,
  },
  user1Typo: {
    top: 115,
    textAlign: "center",
    color: Color.color1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: -0.3,
    fontSize: FontSize.size_mini_4,
    position: "absolute",
  },
  icon: {
    top: 325,
    left: 0,
    width: 448,
    height: 502,
    position: "absolute",
  },
  userPost1: {
    top: 280,
    left: 71,
    textAlign: "center",
    color: Color.color1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_mini_4,
    letterSpacing: -0.3,
    position: "absolute",
  },
  clipPathGroup: {
    height: "3.38%",
    width: "7.19%",
    top: "5.6%",
    right: "4.72%",
    bottom: "91.01%",
    left: "88.09%",
  },
  navigationHouse01: {
    top: "89.64%",
    right: "87.19%",
    left: "7.19%",
    bottom: "7.82%",
    height: "2.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.64%",
    right: "66.97%",
    left: "27.42%",
    bottom: "7.82%",
    width: "5.62%",
  },
  vectorIcon1: {
    width: "5.39%",
    right: "46.97%",
    bottom: "7.93%",
    left: "47.64%",
    height: "2.54%",
  },
  vectorIcon2: {
    height: "2.75%",
    width: "5.84%",
    top: "89.43%",
    right: "26.52%",
    left: "67.64%",
    bottom: "7.82%",
  },
  vectorIcon3: {
    width: "6.29%",
    top: "6.03%",
    right: "18.65%",
    bottom: "91.44%",
    left: "75.06%",
    height: "2.54%",
  },
  vectorIcon4: {
    height: "4.06%",
    width: "29.89%",
    top: "5.77%",
    right: "65.62%",
    bottom: "90.17%",
    left: "4.49%",
  },
  shapeWithText: {
    width: 32,
    height: 32,
  },
  shapeWithText1: {
    width: 35,
    height: 35,
  },
  header3: {
    height: 41,
    width: 41,
  },
  header3Layout: {
    height: 41,
    width: 41,
  },
  shapeWithText2: {
    backgroundColor: "#ff4343",
    width: 23,
    height: 23,
  },
  text: {
    top: 45,
    left: 417,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    letterSpacing: -0.3,
    color: Color.color2,
  },
  vectorIcon5: {
    height: "0.85%",
    width: "2.7%",
    top: "7.51%",
    right: "60.67%",
    bottom: "91.65%",
    left: "36.63%",
  },
  shapeWithText3: {
    width: 92,
    height: 92,
  },
  shapeWithText4: {
    borderWidth: 4,
    borderColor: Color.colorDarkorchid,
    borderStyle: "solid",
  },
  tuHistoria: {
    left: 23,
  },
  groupChild: {
    height: "19.7%",
    width: "23.85%",
    top: "56.12%",
    right: "7.8%",
    bottom: "24.18%",
    left: "68.35%",
  },
  shapeWithTextGroup: {
    height: 134,
    width: 109,
  },
  user1: {
    left: 40,
  },
  carrusel: {
    top: 111,
    left: -81,
    height: 153,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 2,
    gap: 17,
    maxHeight: 153,
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    top: 338,
    left: 387,
    width: 36,
    height: 36,
    position: "absolute",
  },
  text1: {
    top: 346,
    left: 391,
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    width: 30,
    height: 21,
  },
  parent: {
    backgroundColor: Color.color2,
    flex: 1,
    height: 946,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
