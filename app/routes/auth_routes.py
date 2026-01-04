# all of these will be split into routing folders where only the functions are required
# each file needs the render_template import at minimum

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")

@app.route("/signup")
def signup():
    return render_template("auth/signup.html")

@app.route("/login")
def login():
    return render_template("auth/login.html")

app.run()
