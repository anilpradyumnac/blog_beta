


var GetPosts = React.createClass({
	componentDidMount:function(){
		$.get('/get_blogs',function(data){
			alert(data[2].content)
			
		})
	},
	render:function(){
	return(
		<div >
				<div id="Title">
						<p></p>
				</div>
		</div>
	)
}
})
ReactDOM.render(<GetPosts />,document.getElementById('app'))