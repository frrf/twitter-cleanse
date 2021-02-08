from flask import Flask, render_template, request
from getStatusId import test

app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/', methods=['POST'])
def my_form_post():
    target_handle = request.form['target_handle_text']
    termToSearch = request.form['term_to_search_text']
    tweetIDList = test(target_handle, termToSearch)
    if (type(tweetIDList) is not list):
      return render_template("index.html", tweetIDList=tweetIDList, target_handle=target_handle, termToSearch=termToSearch)
    else:
      return render_template("index.html", target_handle_tweet_id=tweetIDList[0], tweetIDList=tweetIDList)
    
if __name__ == "__main__":
  app.run(debug=True)