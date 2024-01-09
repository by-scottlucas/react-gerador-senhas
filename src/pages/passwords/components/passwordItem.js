import React from 'react';
import { Pressable, StyleSheet, Text } from "react-native";

export function PasswordItem({ data, removePassword }) {

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.texto}>{data}</Text>
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
    texto: {
        color: "#fff"
    }
})