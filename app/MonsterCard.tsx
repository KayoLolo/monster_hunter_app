import { Image, StyleSheet, Text, View } from "react-native";
import Monster from "./types";

interface MonsterCardProps {
    monster: Monster;
}


export default function MonsterCard({monster}: MonsterCardProps) {
    
    return (
        <View style={styles.card}>
            <Image source={{ uri : monster.imgUrl }} style= {styles.imgUrl}/>
            <Text>{monster.name}</Text>
            <Text>{monster.type}</Text>
            <Text>{monster.element}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "lightblue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    imgUrl: {
        width: 100,
        height: 50
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    type: {
        fontSize: 14,
        color: "gray"
    },
    element: { 
        fontSize: 14,
        color: "gray"
    }
})