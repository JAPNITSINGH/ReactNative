import React from 'react';
import {Button} from 'react-native';

const FetchNewsUpdates = props =>{
    return (
        <Button title="Get NewsUpdates" onPress={props.onGetNewsUpdates} />
    );

};

export default FetchNewsUpdates