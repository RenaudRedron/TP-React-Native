import { Text, View, StyleSheet } from "react-native";

export default function ListTitle({ props }) {

    const { title, color, textSize, lineHeight  } = props;

    return (
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View style={{ 
                ...styles.line, 
                height: lineHeight, 
                backgroundColor: color,
            }} />
                <View>
                    <Text style={{
                        ...styles.text,
                        color: color, 
                        fontSize: textSize
                    }}>
                        {title}
                    </Text>
                </View>
            <View style={{ 
                ...styles.line, 
                height: lineHeight, 
                backgroundColor: color,
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        padding: 10,
        fontWeight: "bold"
    },
    line: {
        flex: 1, 
        marginHorizontal:10,
    }
});