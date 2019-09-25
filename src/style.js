import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        backgroundColor: '#34495e',
        padding: 10,
        paddingTop: 20
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    list: {
        backgroundColor: '#f0f3f4',
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})

export default styles