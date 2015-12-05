var Header = React.createClass({
	render:function(){
		return(
		<div>
			<header>
		    <ul>
		        <li><a href="">Home</a></li>
		        <li><a href id="digits-sdk" onclick="onLoginButtonClick()">Sign In</a></li>
		    </ul>
			    <h1>Geekskool Blog</h1>
			    <h3>Write.  Share.  Learn</h3>
			</header>
		</div>
		)
	}
})


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
	
	render:function(){
		return(
			<div>
			<form action="/new_blog" method="post" onSubmit={this.handleSubmit}>
				<fieldset>
		            <input type="text" id="title" ref="title" name="title" placeholder="Enter the title of the post"/>
		            <input type="text" id="author" ref="author" placeholder="Author"/>
	                <textarea id="blog" ref="blog" placeholder="Enter your post" name="blog"></textarea>
	                <input type="submit" id="post" ref="submit" value="Post"/>
	             </fieldset> 
             </form>   
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
				<Header/>
				<Body/>
				<Footer/>
			</div>
		)
	}
})

ReactDOM.render(<Main />,document.getElementById('app'))