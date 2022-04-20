import { View, Text, TextInput } from "react-native"
import { useState } from 'react'
import {styles} from '../constants/styles'
export default function OgFgCalcutingScreen({ navigation }) {

    const [fg, setFg] = useState(1050)
    const [og, setOg] = useState(1000)
    return (
        <View style={styles.container} >
            <View style={styles.box}>
            <Text style={styles.inputText} >Fg (First gravity )</Text>
            <TextInput onChange={setFg} value={fg} />
            </View>
            <View style={styles.box}>
            <Text style={styles.inputText}>Og (Original gravity )</Text>
            <TextInput onChange={setOg} value={og} />
            </View>
        </View>
    )
}
