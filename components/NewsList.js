import React from 'react';
import {View,StyleSheet, FlatList} from 'react-native';
import {List , ListItems} from 'react-native-elements'


const newsList = props => {
    return(
        <View>
            <FlatList data={[
            {key: 'News1'},
            {key: 'News2'},
            {key: 'News3'},
            {key: 'News4'},
            {key: 'News5'},
            {key: 'News6'},
            {key: 'News7'},
            {key: 'News8'},
            {key: 'News9'},
            {key: 'News10'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    );
}

export default newsList;