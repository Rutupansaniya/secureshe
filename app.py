from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/emergency')
def emergency():
    return render_template('emergency.html')

# You can add more routes based on your functionality pages

if __name__ == '__main__':
    app.run(debug=True)
