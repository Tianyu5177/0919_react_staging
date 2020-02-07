import React, { Component } from 'react'
import Item from '../item/item'

export default class List extends Component {
	render() {
		const {users} = this.props //接收App传递过来的users
		return (
			<div className="row">
				{
					users.map((personObj)=>{
						return <Item key={personObj.login} {...personObj}/>
					})
				}
			</div>
		)
	}
}
