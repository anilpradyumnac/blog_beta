import redis
import os

def connect_to_redis():
    try:
        with open('config.cfg') as fd:
            while True:
                line = fd.readline()
                if line:
                    config_list = line.split(':')
                    if config_list[0].strip() == 'REDIS_PATH':
                        redis_path = config_list[1].strip().split("'")[1].strip()
                        os.system(redis_path+'/src/redis-server')
                else:
                    break
    except IOError:
        print 'No Config file'
    except redis.ConnectionError:
        print 'Please check your redis server path mentioned in the config.cfg file'

if __name__ == '__main__':
    connect_to_redis()