var Profile = React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	loadJson:function(){
	$.get('/get_reg_users',function(newdata){
		console.log(newdata)
			this.setState({ data:newdata })
	 }.bind(this))
	},
	componentDidMount:function(){
		this.loadJson()
	},
	render:function(){
		console.log(this.state.data)
		return(
<div>Hi</div>
		)
	}
})

ReactDOM.render(<Profile/>,document.getElementById('wrapper'))