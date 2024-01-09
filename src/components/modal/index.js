import * as Clipboard from 'expo-clipboard';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useStorage from '../../hooks/useStorage';


export function ModalPassword({ password, handleClose }) {

    const { saveItem } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem("@pass", password);

        alert("Senha salva com sucesso!");

        handleClose();
    }

    return (
        <View style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.boxPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(24, 24, 24, 0.6)",
    },
    content: {
        width: "80%",
        borderRadius: 4,
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 24,
    },
    boxPassword: {
        width: "90%",
        padding: 14,
        borderRadius: 2,
        backgroundColor: "#0e0e0e",
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    buttonArea: {
        width: "90%",
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave: {
        borderRadius: 2,
        backgroundColor: "#3d9ae2",
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "bold",
    }
});