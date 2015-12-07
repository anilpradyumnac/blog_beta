


var FormBody = React.createClass({

	/*handleSubmit:function(){
		// $(document).ready(function()
{
    $("#post").click(function()
    {
        var title = $("#title").val();
        var slug = $("#title").val();
        var author = $("#author").val();
        var desc = $("#blog").val();
        var mark = parseInt($("#mark").val();
				$.getJSON( "/public/static/post.json", function( data ) {
				
	        var data_pushed = 
					{
						"id":,
						"slug":slug,
						"title":title,
						"description":desc,
						"author":{
							"name":author
						}
					}
        
      
	        data.users.push(data_pushed);
	        console.log(data);
	        alert(JSON.stringify(data));
				  
	});
        
    });
// });
	},*/
	
	handleSubmit:function(){
      var title = ReactDOM.findDOMNode(this.refs.title).value
      var author = ReactDOM.findDOMNode(this.refs.author).value
      var blog = ReactDOM.findDOMNode(this.refs.blog).value
      
	},
	render:function(){
		return(
			<div>
				Hello! :P
           </div>
		)
	}
})

var Footer = React.createClass({
	render:function(){
		return(
		 <footer>
        Powered by Geekskool.
    </footer>
		)
	}
})


var Body = React.createClass({
	render:function(){
		return(
			<div className="wrapper">
				<FormBody/>
			</div>
		)
	}
})

var Main = React.createClass({
	render:function(){
		return(
			<div>
				<Body/>
				<Footer/>
			</div>
		)
	}
})

ReactDOM.render(<Main />,document.getElementById('app'))