import server
import requests
import ast
import redis
import time

redis_server = redis.Redis('localhost',db=1)

def check_redis_connection():
    try:
        if redis_server.ping():
            return True
    except redis.ConnectionError:
        return False

def html_logged_in_header():
    header_html = ''
    with open('./views/header_signin.html', 'r') as fd:
        header_html = fd.read()
    fd.close()
    return header_html

def html_header():
    header_html = ''
    with open('./views/header.html', 'r') as fd:
        header_html = fd.read()
    fd.close()
    return header_html


def html_tail():
    footer_html = ''
    with open('./views/footer.html', 'r') as fd:
        footer_html = fd.read()
    fd.close()
    return footer_html

def signout(request, response):
    session_data = server.get_session(request)
    if session_data and 'user' in session_data:
        server.del_session(request)
    home(request, response)

def home(request, response):
    print 'Home'
    session_data = server.get_session(request)
    if session_data and 'user' in session_data:
        data = html_logged_in_header()
        data += 'Hi '
        user = str(session_data['user'])
        data += user
        blogs = redis_server.smembers('user_blogs' + ':' + user)
    else:
        data = html_header()
        blogs = redis_server.smembers('all_blogs')
    for blog in blogs:
        data += '<p>'
        data += redis_server.hget(blog, 'title')
        data += redis_server.hget(blog, 'time') if redis_server.hget(blog, 'time') else ''
        data += redis_server.hget(blog, 'slug') if redis_server.hget(blog, 'slug') else ''
        data += '<br>'
        data += redis_server.hget(blog, 'content')
        data += '</p>'
    data += html_tail()
    server.send_html_handler(request, response, data)

def get_blogs(request, response):
    session_data = server.get_session(request)
    json = '['
    if session_data and 'user' in session_data:
        user = str(session_data['user'])
        blogs = redis_server.smembers('user_blogs'+':'+user)
    else:
        blogs = redis_server.smembers('all_blogs')
    for blog in blogs:
        json += '{'
        json += 'title : "' + redis_server.hget(blog, 'title') + '",'
        json += 'author:"' + redis_server.hget(blog,'') + '",'
        json += 'slug : "' + (redis_server.hget(blog, 'slug') if redis_server.hget(blog, 'slug') else '') + '",'
        json += 'time : "' + (redis_server.hget(blog, 'time') if redis_server.hget(blog, 'time') else '') + '",'
        json += 'content : "' + redis_server.hget(blog, 'content') + '"'
        json += '},'
    json += ']'
    server.send_html_handler(request, response, json)


def login(request, response):
    with open("./views/login.html", "r") as fd:
        content = fd.read()
    fd.close()
    server.send_html_handler(request, response, content)
    


def verify(request, response):
    print 'verify'
    url = request['content']['apiUrl'][0]
    header = {'Authorization': ''.join(request['content']['authHeader'])}
    data = requests.get(url, headers=header).text
    data_dict = ast.literal_eval(data)
    phone_num = data_dict['phone_number']
    if redis_server.sismember('all_users', phone_num):
        result = 'success'
    else:
        result = 'failure'
    print result
    print phone_num
    content = {'status': result, 'user': phone_num}
    server.add_session(request, content)
    server.send_json_handler(request, response, content)


def profile(request, response):
    with open("./views/profile.html", "r") as fd:
        content = fd.read()
    fd.close()        
    server.send_html_handler(request, response, content)

def get_user_details(request, response):
    session_data = server.get_session(request)
    if session_data and 'user' in session_data:
        redis_key = 'user_profile' + ':' + session_data['user']
        name = redis_server.hget(redis_key, 'name') if redis_server.hget(redis_key, 'name') else ''
        email = redis_server.hget(redis_key, 'email') if redis_server.hget(redis_key, 'email') else ''
        mobile = session_data['user']
        user_details = {'name': name, 'email': email, 'mobile' : mobile}
        server.send_json_handler(request, response, user_details)

def update_profile(request, response):
    session_data = server.get_session(request)
    if session_data and 'user' in session_data:
        name = request['content']['name'][0]
        email = request['content']['email'][0]
        redis_key = 'user_profile' + ':' + session_data['user']
        user_details = {'name': name, 'email': email}
        redis_server.hmset(redis_key, user_details)
        return home(request, response)

def edit(request, response):
    with open("./views/edit.html","r") as fd:
        content = fd.read()
    fd.close()        
    server.send_html_handler(request,response, content)


def write(request, response):
    with open("./views/write.html", "r") as fd:
        content = fd.read()
    fd.close()        
    server.send_html_handler(request, response, content)

def getjson(request,response):
    with open("./public/static/post.json","r") as fd:
        content = fd.read()
    fd.close()        
    server.send_html_handler(request, response, content)        

def index(request, response):
    print 'Index'
    with open("./views/index.html", "r") as fd:
        content = fd.read()
    fd.close()        
    server.send_html_handler(request, response, content)    


def new_blog(request, response):
    print 'new_blog'
    session_data = server.get_session(request)
    print session_data
    if session_data and 'user' in session_data:
        title = request['content']['title'][0]
        blog = request['content']['blog'][0]
        print title, '__', blog
        redis_server.incr('counter')
        counter = redis_server.get('counter')
        blog_id = 'blog' + counter
        slug = '-'.join(title.lower().split())
        blog_details = {'title': title, 'content': blog, 'time': time.strftime("%a, %d %b %Y %H:%M:%S", time.localtime())+' IST', 'slug': slug}
        redis_server.hmset(blog_id, blog_details)
        redis_server.sadd('user_blogs' + ':' + session_data['user'], blog_id)
        redis_server.sadd('all_blogs', blog_id)
        redis_server.save()
    return home(request, response)


def admin(request, response):
    print 'admin'
    with open("./views/admin.html", "r") as fd:
        content = fd.read()
    fd.close()        
    server.send_html_handler(request, response, content)


def new_user(request, response):
    print 'new_user'
    content = request['content']
    print 'content : ', content
    session_data = server.get_session(request)
    print 'users ',redis_server.smembers('all_users')
    if session_data and 'user' in session_data:
        new_user = content['user'][0]
        redis_server.sadd('all_users', new_user)
    return home(request, response)


def build_routes():
    server.add_route('get', '/', home)
    server.add_route('get', '/login', login)
    server.add_route('post', '/verify', verify)
    server.add_route('get', '/profile', profile)
    server.add_route('post', '/update_profile', update_profile)
    server.add_route('get', '/write', write)
    server.add_route('post', '/new_blog', new_blog)
    server.add_route('get', '/index', index)    
    server.add_route('get', '/admin', admin)
    server.add_route('post', '/new_user', new_user)
    server.add_route('get','/public/static/post.json',getjson)
    server.add_route('get','/edit',edit)
    server.add_route('get','/signout',signout)
    server.add_route('get', '/get_blogs', get_blogs)
    server.add_route('get', '/get_user_details', get_user_details)

if __name__ == "__main__":
    if check_redis_connection():
        port = int(raw_input("PORT>"))
        build_routes()
        server.start_server("127.0.0.1", port, 100)
    else:
        print 'Redis server has not started, please start your redis server'
        print 'Start the redis server by executing $python start_redis.py'
