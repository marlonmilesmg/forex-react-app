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
        <View style={styles.indent}>
        <Text>IDR</Text>
        <Text>144 104.50</Text>
        <Text>( - )</Text>
        </View>
        <Text>IDR - Indonesian Rupiah</Text>
        <Text>1 USD = IDR 14 410.45</Text>
        </View>

        <View style={styles.c2}>
        <View style={styles.indent}>
        <Text>EUR</Text>
        <Text>8.5694</Text>
        <Text>( - )</Text>
        </View>
        <Text>EUR - Euro</Text>
        <Text>1 USD = 0.8569 </Text>
        </View>

        <View style={styles.c3}>
        <View style={styles.indent}>
        <Text>GBP</Text>
        <Text>7.5894</Text>
        <Text>( - )</Text>
        </View>
        <Text>GBP - British Pound</Text>
        <Text>1 USD = GBP 0.7589</Text>
        </View>

        <View style={styles.c4}>
        <View style={styles.indent}>
        <Text>SGD</Text>
        <Text>13.6637</Text>
        <Text>( - )</Text>
        </View>
        <Text>SGD - Singapore Dollar</Text>
        <Text>1 USD = SGD 1.3664</Text>
        </View>

        <View style={styles.c5}>
        <View style={styles.indent}>
        <Text>( + ) Add More Currencies</Text>
        </View>
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
        alignItems: "flex-start", 
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
    indent : {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    removeButton : {
        width: "100%",
        height: 36,
        fontWeight: "bold",
        alignItems: "center",
        backgroundColor: "green", 
        flexDirection: "row",
    },
    c1 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 100,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "orange",
        alignItems: "baseline", 
        flexDirection: "column",
        justifyContent: "space-between",
    },
    c2 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 100,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "yellow",
        alignItems: "baseline", 
        flexDirection: "column",
        justifyContent: "space-between",
    },
    c3 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 100,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "green",
        alignItems: "baseline", 
        flexDirection: "column",
        justifyContent: "space-between",
    },
    c4 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 100,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "red",
        alignItems: "baseline", 
        flexDirection: "column",
        justifyContent: "space-between",
    },
    c5 : {
        position: "relative",
        top: 50,
        width: "100%",
        height: 36,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "yellow",
        alignItems: "baseline", 
        flexDirection: "column",
        justifyContent: "center",
    },
})

export default Homepage;