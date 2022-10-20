import React from "react";
import { View, Text } from "react-native";


const Text = props => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}; 

export default Text;