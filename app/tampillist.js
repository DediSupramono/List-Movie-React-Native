import React, {Component} from 'react';
import {listView, Text} from 'react-native';

export default class tampilist extends Component {

	render(){d                      
		return (
			<listView
				dataSourche=this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
		)
	}
}