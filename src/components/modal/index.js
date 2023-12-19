import * as Clipboard from 'expo-clipboard';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native-web";

export function ModalPassword({ password, handleClose }) {

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password);
        alert("Senha salva com sucesso!");

        handleClose();
    }

    return (
        <View style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 4,
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
        borderRadius: 4,
        backgroundColor: "#392de9",
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "bold",
    }
});