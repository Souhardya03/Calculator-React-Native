import React, {useState} from 'react'
import {View, Text, StyleSheet, StatusBar, ScrollView, Pressable} from 'react-native'

const MainScreen = () => {
    const [value, setValue] = useState('0')
    const [bracketopen, setBracketOpen] = useState(false)

    const handlePress = (val) => {
        if (val === 'AC') {
            setValue('0')
        }
        else if (val === '=') {
            try {
                if ((value.match(/\(/g) || []).length === (value.match(/\)/g) || []).length) {

                    if (value.slice(-1) === '+' || value.slice(-1) === '-' || value.slice(-1) === '*' || value.slice(-1) === '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }
                }
            }
            catch (e) {
                setValue('Format Error')
            }
        }
        else if (val === 'back') {
            setValue(value.slice(0, -1))
        }
        else if (val === '()') {
            if (value === '0') {
                setValue('(')
                setBracketOpen(true)

            }
            else if (value.slice(-1) === '+' || value.slice(-1) === '-' || value.slice(-1) === '*' || value.slice(-1) === '/') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketopen === true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }
            }
        }
        else {
            if (value === '0') {
                if (val === '+' || val === '-' || val === '*' || val === '/' || val === '.' || val === '%') {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }
            }
            // console.log(val)
            else if (isNaN(val)) {
                console.log(value.slice(-1))
                if (value.slice(-1) === '+' || value.slice(-1) === '-' || value.slice(-1) === '*' || value.slice(-1) === '/' || value.slice(-1) === '.' || value.slice(-1) === '%') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else if (!isNaN(val)) {
                setValue(value + val)
            }
        }


    }

    return (
        <View style={styles.container}>

            <ScrollView style={styles.calc_display} ref={ref => { this.scrollView = ref }}
                        onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
                <Text style={styles.calc_display_text}>
                    {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
            </ScrollView>
            <View style={styles.calc_AllButtons}>

                <View style={styles.calc_AllButtons_Row}>
                    <Pressable onPress={()=>handlePress("AC")}>
                        <View style={styles.bt1_Outer}><Text style={styles.bt1_Button}>AC</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("()")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>( )</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("%")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>%</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("/")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>/</Text></View>
                    </Pressable>
                </View>
                <View style={styles.calc_AllButtons_Row}>
                    <Pressable onPress={()=>handlePress("7")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>7</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("8")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>8</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("9")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>9</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("*")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>*</Text></View>
                    </Pressable>
                </View>
                <View style={styles.calc_AllButtons_Row}>
                    <Pressable onPress={()=>handlePress("4")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>4</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("5")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>5</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("6")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>6</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("-")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>-</Text></View>
                    </Pressable>
                </View>
                <View style={styles.calc_AllButtons_Row}>
                    <Pressable onPress={()=>handlePress("1")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>1</Text></View>
                    </Pressable >
                    <Pressable onPress={()=>handlePress("2")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>2</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("3")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>3</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("+")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>+</Text></View>
                    </Pressable>
                </View>
                <View style={styles.calc_AllButtons_Row}>
                    <Pressable onPress={()=>handlePress("0")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>0</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress(".")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>.</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("back")}>
                        <View style={styles.bt1_Outer}><Text style={styles.bt1_Button}>&lt;</Text></View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress("=")}>
                        <View style={styles.bt2_Outer}><Text style={styles.bt2_Button}>=</Text></View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fcfcfc',

    },
    calc_display: {
        width: '95%',
        borderRadius: 10,
        elevation: 5,
        display: 'flex',
        padding: 10,
        backgroundColor: 'white',
    },
    calc_display_text:{
        fontSize: 50,
        textAlign: 'right',
    },
    calc_AllButtons: {

        height: "68%",
        width: "100%",
        display: "flex",
        flexDirection: 'column',
        gap: 10,
        padding: 10,


    },
    calc_AllButtons_Row: {
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    bt1_Outer: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        borderRadius: 90,
        overflow: 'hidden',
    },
    bt1_Button: {
        backgroundColor: '#FF5757',
        color: 'white',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    bt2_Outer: {
        width: 80,
        height: 80,
        borderRadius: 90,
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bt2_Button: {

        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default MainScreen;
