import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from '../home_message_detail/home_message_detail'

export default class HomeMessage extends Component {

	state = {
		messages:[]
	}

	//模拟网络请求
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				messages:[
					{id:'001',title:'消息1'},
					{id:'002',title:'消息2'},
					{id:'003',title:'消息3'},
					{id:'004',title:'消息4'},
				]
			})
		},1000)
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									<Link replace={true} to={`/home/message/detail/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				<Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
			</div>
		)
	}
}
