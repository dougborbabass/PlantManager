import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Header } from "../components/Header";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelect() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>

        <Text style={styles.subTitle}>você quer colocar sua planta</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.heading,
  },
});
