import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ModalPassword } from "../../components/Modal";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {

    const [size, setSize] = useState(6);
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function generatePassword() {
        let password = "";
        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        setPasswordValue(password);
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>

            <Image source={require('../../../assets/logo.png')} style={styles.logoIcon} />

            <Text style={styles.logo}>Gerador de Senhas</Text>

            <Text style={styles.title}>{size} Caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#ff0000"
                    minimumTrackTintColor="#000"
                    thumbTintColor="#392de9"
                    value={size}
                    onValueChange={(value) => setSize(Math.round(value))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="face" transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f3ff",
    },
    logoIcon: {
        width: 105,
        height: 162,
        marginBottom: 20
    },
    logo: {
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 60,
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 4,
        padding: 6,
    },
    button: {
        borderRadius: 4,
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#007FBF',
        marginBottom: 18,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,

    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    }
});
