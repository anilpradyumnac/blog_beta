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
	handleSubmit:function(){
		// $(document).ready(function()
{
    $("#post").click(function()
    {
        var title = $("#title").val();
        var slug = $("#title").val();
        var author = $("#author").val();
        var desc = $("#blog").val();
        var mark = parseInt($("#mark").val();
        var data = 
        {
    "id" : 2,
    "slug" : "creating-a-super-simple-todo-app-using-angular-2—tutorial",
    "title" : "Creating a Super Simple Todo app Using Angular 2 — Tutorial",
    "description" : "Angular 2 is already popular and so many JavaScript developers are eagerly waiting to try it out. You may have the idea that Angular 2 is going to introduce a lot of new & exciting features and remove several old concepts. So, in this tutorial I will show you how to create a super simple Todo app using Angular 2.0. In the process you will also learn how to use Components, Templates, Data Binding and a few other important stuff. So, let's start!",
    "author" : {
      "photo" : "/images/syed.jpg",
      "name" : "Syed"
    }
  }
      
        fullData.users.push(data);
        console.log(fullData);
        alert(JSON.stringify(fullData));
    });
// });
	},
	
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