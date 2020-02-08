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

	pushSHow = (id)=>{
		//console.log('你点击了pushshow，我应该给你展示这条消息的信息，留下历史记录');
		this.props.history.push(`/home/message/detail/${id}`)
	}

	replaceShow = (id)=>{
		//console.log('你点击了replaceShow，我应该给你展示这条消息的信息，但是不留下历史记录');
		this.props.history.replace(`/home/message/detail/${id}`)
	}

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									<Link to={`/home/message/detail/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp;
									<button onClick={()=>{this.pushSHow(msgObj.id)}}>push查看</button>
									<button onClick={()=>{this.replaceShow(msgObj.id)}}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>
				<hr/>
				<Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
			</div>
		)
	}
}
