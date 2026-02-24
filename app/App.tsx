import { FlatList, Text, View } from "react-native";
import { monsters } from "../app/data/monsters";
import MonsterCard from "./MonsterCard";

export default function App() {
    

    return(
        
        <View>
            <Text>Bienvenu sur mon app de Monstre</Text>
            {/* <Image source={{ uri: rathalos.imgUrl }} style={{width: 50, height : 50}}/>
            <Text>Name: {rathalos.name}</Text>
            <Text>Type: {rathalos.type}</Text>
            <Text>Element: {rathalos.element}</Text> */}
                {/* //je peux utiliser flatlist avec cette syntaxe pour afficher tous les monstres de mon tableau monsters */}
                <FlatList
                data={monsters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MonsterCard monster={item}/>}>
            </FlatList>
        
            
        </View>
        
            
    );
}