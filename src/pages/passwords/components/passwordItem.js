import React from 'react';
import { Pressable, StyleSheet, Text } from "react-native-web";

export function PasswordItem(data, removePassword) {

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text>{data}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 14,
        backgroundColor: "#0e0e0e",
        marginBottom: 14,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#fff"
    }
})