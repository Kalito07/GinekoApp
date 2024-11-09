import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const GinekoWelcome = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-background"
    >
      <View className="flex justify-center items-center">
        <Image
          source={require("../../assets/images/skip1.png")}
          style={{ width: 400, height: 500 }}
          className="rounded-b-2xl"
          alt="skip1"
        />
      </View>
      <View className="mt-40">
        <Text className="text-7xl mx-auto font-bold text-primary text-left">
          Запазете час при гинеколог лесно и удобно
        </Text>
      </View>
      <View className="flex justify-center mt-4">
        <Text className="text-black text-left text-xl">• • •</Text>
      </View>
      <View className="flex flex-row justify-between items-center mt-4 w-full px-4">
        <TouchableOpacity>
          <Text className="text-black text-base">Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black rounded-full p-3">
          <Text className="text-white text-xl">→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GinekoWelcome;
