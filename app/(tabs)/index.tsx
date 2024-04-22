import {StyleSheet} from 'react-native';
import {View} from '@/components/Themed';
import {Canvas} from "@shopify/react-native-skia";
import Star from "@/components/Star";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Canvas style={styles.skia}>
                <Star/>
            </Canvas>
        </View>
    );
}

const styles = StyleSheet.create({
    skia: {
        width: 300,
        height: 300
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
