import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { monsters as initialMonsters } from "./data/monsters";
import MonsterCard from "./MonsterCard";
import Monster from "./types";


export default function App() {

        const [monsters, setMonsters] = useState<Monster[]>(initialMonsters);

        function handleHunt(id: number){
                setMonsters(prev=> prev.map(monster =>
                        monster.id == id
                        ? {...monster, isHunted: !monster.isHunted}
                        : monster
                )

                );
        }
    

    return(
        
        <View>
            <Text style={styles.text}>Bienvenu sur mon app de Monstre</Text>
            {/* <Image source={{ uri: rathalos.imgUrl }} style={{width: 50, height : 50}}/>
            <Text>Name: {rathalos.name}</Text>
            <Text>Type: {rathalos.type}</Text>
            <Text>Element: {rathalos.element}</Text> */}
                {/* //je peux utiliser flatlist avec cette syntaxe pour afficher tous les monstres de mon tableau monsters */}
                <FlatList
                contentContainerStyle={styles.list}
                numColumns={2}
                data={monsters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MonsterCard monster={item} onHunt={handleHunt}/>}>
            </FlatList>
        
            
        </View>
        
            
    );
}

const styles = StyleSheet.create({ 
                text: {
                        fontSize: 20,
                        fontWeight: "bold",
                        padding:5,
                        margin:20
                },
                list:{
                        paddingHorizontal: 10 
                        
                }
        }
);