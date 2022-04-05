import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import Contain from "./Name/components/Contain";
import styles from "./Name/components/style";

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.layout} >Layout1  </Text>
          <Text style={styles.about} >About </Text>
          <Text style={styles.service}>Service </Text>
          <Text style={styles.contact}>Contact</Text>
        </View>
        <Text style={styles.heading} >Page Heading
          <Text style={styles.secondary}> Secondary Text
          </Text>
        </Text>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => {
          return (
            <View key={index}>
              <Contain />
            </View>
          );
        })}
        {/* <Contain />
        <Contain />
        <Contain />
        <Contain />

        <Contain />
        <Contain />

        <Contain />
        <Contain /> */}
      </ScrollView>
    </>
  );
}
