import pymysql
from flask import Flask, request, jsonify
from flask_cors import CORS

db = pymysql.connect(host='127.0.0.1', user="root", passwd="white514=", db="album")
cursor = db.cursor()

app = Flask(__name__)
CORS(app, resources=r'/*')

@app.route('/thumb/list', methods=['POST'])
def thumb_list():
    if request.method == 'POST':
        # username = request.form.get('username')
        cursor.execute('SELECT id,name,ctime FROM first_album')
        data = cursor.fetchall()
        res = []
        temp = {}
        if data!=None:
            for i in data:
                temp['id']=i[0]
                temp['name']=i[1]
                temp['ctime']=i[2]
                res.append(temp.copy())
            print('result: ', len(data))
        else:
            print('resulst: NULL')
        return jsonify(res)

@app.route('/thumb/list', methods=['GET'])
def thumb_list_get():
    if request.method == 'GET':
        # username = request.form.get('username')
        cursor.execute('SELECT id,name,ctime FROM first_album')
        data = cursor.fetchall()
        res = []
        temp = {}
        if data!=None:
            for i in data:
                temp['id']=i[0]
                temp['name']=i[1]
                temp['ctime']=i[2]
                res.append(temp.copy())
            print('result: ', len(data))
        else:
            print('resulst: NULL')
        return jsonify(res)


@app.route('/detail/get', methods=['POST'])
def detail_get():
    if request.method == 'POST':
        fid = request.json.get('fid')
        print('req=',request.form)
        cursor.execute(f'SELECT name FROM detail_album WHERE fid={fid}')
        data = cursor.fetchall()
        res = []
        temp = {}
        if data!=None:
            for i in data:
                temp['name']=i[0]
                res.append(temp.copy())
            print('result: ', len(data))
        else:
            print('resulst: NULL')
        return jsonify(res)

if __name__=='__main__':
    app.run(host='0.0.0.0', port=8091)
    db.close()
    print('Good bye!')

