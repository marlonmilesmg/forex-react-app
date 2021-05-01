import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function Homepage(props) {
    return (
        <SafeAreaView>
        <View style={styles.header}>
        <Text>USD - United States Dollars</Text>
        </View>

        <View style={styles.usd}>
        <Text>USD</Text>
        <Text>10.0000</Text>
        </View>

        <View style={styles.c1}>
        <Text>CURRENCY 1</Text>
        </View>

        <View style={styles.c2}>
        <Text>CURRENCY 2</Text>
        </View>

        <View style={styles.c3}>
        <Text>CURRENCY 3</Text>
        </View>

        <View style={styles.c4}>
        <Text>CURRENCY 4</Text>
        </View>
        </SafeAreaView>

        
    );
}

const styles = StyleSheet.create({
    header : {
        position: "absolute",
        top: 20,
        width: "100%",
        height: 36,
        fontSize: 16,
        backgroundColor: "blue",
        alignItems: "left", 
    },
    usd : {
        position: "absolute",
        top: 50,
        width: "100%",
        height: 36,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "red",
        alignItems: "baseline", 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    c1 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 36,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "orange",
        alignItems: "baseline", 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    c2 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 36,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "yellow",
        alignItems: "baseline", 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    c3 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 36,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "green",
        alignItems: "baseline", 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    c4 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 36,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "red",
        alignItems: "baseline", 
        flexDirection: "row",
        justifyContent: "space-between",
    },
})

export default Homepage;