


var GetPosts = React.createClass({
	componentDidMount:function(){
		$.get('/get_blogs',function(data){
			alert(data[2].title)
			for (var i = 0; i < data.length; i++) {
			            (data[i].title)
			        }
		})
	},
	render:function(){
	return(
		<div >
				<div id="Title">
						
				</div>
		</div>
	)
}
})
ReactDOM.render(<GetPosts />,document.getElementById('app'))