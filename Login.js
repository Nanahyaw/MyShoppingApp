import { Icon } from "native-base";
import React from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  Button,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    //Container start
    <ScrollView styles={{ flex: 1, backgroundColor: "#ffffff" }}>
      showsVerticalScrollIndicator={false}
      {/* Brand view */}
      <ImageBackground source={require("./assets/backgroundImage.png")}>
        style=
        {{
          height: Dimensions.get("window").height / 2.5,
        }}
        <View style={styles.brandView}>
          <Icon
            name="location-sharp"
            style={{ color: "#ffffff", fontSize: 100 }}
          />
          <Text style={styles.brandViewText}>Foster Classic</Text>
        </View>
      </ImageBackground>
      {/* Bottom View */}
      <View style={style.bottomView} />
      {/* Welcome View*/}
      <View style={{ padding: 40 }}>
        <Text style={{ color: "#4632A1", fontSize: 34 }}>WELCOME</Text>
        <Text>
          Don't have an account?
          <Text style={{ color: "red", fontStyle: "italic" }}>
            {" "}
            Register now
          </Text>
        </Text>
        {/*Form Inputs View*/}
        <View style={{ marginTop: 50 }}>
          <Item floatingLabel style={{ borderColor: "#4632A1" }}>
            <label>Email</label>
            <Input value="design@test.com" keyboardType="email-address" />
            <Icon name="checkmark" style={{ color: "#4632A1" }} />
          </Item>
          <Item floatingLabel style={{ borderColor: "#4632A1", marginTop: 20 }}>
            <label>Password</label>
            <Input value="********" />
            <Icon name="eye" style={{ color: "#4632A1" }} />
          </Item>
        </View>

        {/* Forgot password & Remember me View*/}
        <View style={styles.forgotPassView}>
          <View style={{ flex: 1, marginLeft: -20 }}>
            <ListItem noBorder>
              <CheckBox checked={true} color="#463241" />
              <Body>
                <Text style={{ color: "#8f9195", alignSelf: "flex-start" }}>
                  {" "}
                  Remember me
                </Text>
              </Body>
            </ListItem>
          </View>
          <View style={{ flex: 1, marginRight: -20 }}>
            <ListItem noBorder>
              <Body>
                <Text style={{ color: "#8f9195", alignSelf: "flex-ends" }}>
                  Forgot Password
                </Text>
              </Body>
            </ListItem>
          </View>
        </View>
        {/* Login Button & Social Login Buttons View */}
        <View
          style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            rounded
            style={
              (styles.loginBtn, styles.shadowBtn, { shadowColor: "#00acee" })
            }
          >
            <Text style={{ color: "#ffffff" }}>Login</Text>
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center" }}>or Login With</Text>
          {/* Social Buttons View */}
          <View style={style.socialLoginView}>
            <Button
              icon
              style={(styles.shadowBtn, { backgroundColor: "#4267b2" })}
              rounded
            >
              <Icon
                type="MaterialCommunityIcons"
                name="facebook"
                style={{ color: "#ffffff" }}
              />
            </Button>
            <Button
              icon
              style={(styles.shadowBtn, { backgroundColor: "#00acee" })}
              rounded
            >
              <Icon
                type="MaterialCommunityIcons"
                name="twitter"
                style={{ color: "#ffffff" }}
              />
            </Button>
            <Button
              icon
              style={(styles.shadowBtn, { backgroundColor: "#db4a39" })}
              rounded
            >
              <Icon
                type="MaterialCommunityIcons"
                name="google-plus"
                style={{ color: "#ffffff" }}
              />
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
    //Container  End
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
  },
  loginBtn: {
    alignSelf: "center",
    backgroundColor: "#4632A1",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
  },
  socialLoginView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    marginTop: 20,
  },
  shadowBtn: {
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },
});
