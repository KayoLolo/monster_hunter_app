import { Image, StyleSheet, Text, View } from "react-native";
import Monster from "./types";

interface MonsterCardProps {
    monster: Monster;
}


export default function MonsterCard({monster}: MonsterCardProps) {
    
    return (
        <View style={styles.card}>
            <Image source={{ uri : monster.imgUrl }} style= {styles.imgUrl}/>
            <Text style= {styles.name}>{monster.name}</Text>
            <Text style= {styles.type}>{monster.type}</Text>
            <Text>{monster.element}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,                 
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        marginHorizontal: 5,     
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
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
        color: "brown"
    },
    element: { 
        fontSize: 14,
        color: "gray"
    }
})