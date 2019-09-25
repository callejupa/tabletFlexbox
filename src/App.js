import React from 'react'
import { FlatList, View, Text } from 'react-native'
import styles from './style.js'

import Post from './components/Post'
import data from './data/data.json'

class App extends React.Component{
  state = {
    dataSource: data.posts
  }

  render(){
    const DATA = this.state.dataSource
    return(
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>latest posts</Text>
        </View>
        <FlatList 
          data={DATA}
          renderItem={ ({ item }) => <Post {...item} /> }
          keyExtractor={ item => item.id }
          style={styles.list} 
          contentContainerStyle={styles.content}/>
      </View>
    )
  }
}

export default App