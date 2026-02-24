import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Monster from "./types";



interface MonsterCardProps {
    monster: Monster;
    //onHunt est une fonction qui prend un id de monstre en paramètre et ne retourne rien (void).
    //onHunt est utilisée pour gérer l'action de chasser ou de ne pas chasser un monstre, en fonction de son id.
    //En définissant onHunt de cette manière, je peux m'assurer que toute fonction passée en tant que prop onHunt respecte ce contrat, 
    // ce qui améliore la sécurité des types dans mon application.
    onHunt: (id: number) => void;
}




export default function MonsterCard({monster, onHunt}: MonsterCardProps) {
    
    return (
        <View style={styles.card}>
            <Image source={{ uri : monster.imgUrl }} style= {styles.imgUrl}/>
            <Text style= {styles.name}>{monster.name}</Text>
            <Text style= {styles.type}>{monster.type}</Text>
            <Text>{monster.element}</Text>
            <TouchableOpacity style={monster.isHunted ? styles.buttonHunted : styles.buttonNotHunted} onPress={()=>onHunt(monster.id)} >
                <Text style={styles.buttonText}>{monster.isHunted ? "Chassé" : "Non chassé"}</Text>
            </TouchableOpacity>
            
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
    },
    buttonHunted: {
    backgroundColor: "green",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    marginTop: 8,
},
buttonNotHunted: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    marginTop: 8,
},
buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
}
})