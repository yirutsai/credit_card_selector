from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__, template_folder = "../templates")

with open('static/data', 'r', encoding="UTF-8") as json_file:
    data = json.load(json_file)

@app.route('/', methods=['GET', 'POST'])
def index():
    # return "test_hello_index"
    if request.method == 'POST':
        selected_product = request.form['product']
        recommendations = data["product_data"].get(selected_product, [])
        return render_template('index.html', products=data["product_data"].keys(), selected_product=selected_product, recommendations=recommendations)
    return render_template('index.html',products=data["product_data"].keys(), selected_product=None, recommendations=None)

@app.route('/update', methods=['GET', 'POST'])
def update():
    if request.method == 'POST':
        new_entry = {
            "name": request.form['cardName'],
            "offers": request.form['cardOffers'],
            "desc": request.form['cardDesc'],
            "valid_date": request.form['validDate']
        }
        # print(new_entry)
        target_data = data["product_data"].get(request.form['productName'].lower(), [])
        target_data.append(new_entry)
        data["product_data"][request.form['productName'].lower()] = target_data
        # print(data)
        # Write updated data to data.json
        with open('./static/data', 'w', encoding="UTF-8") as json_file:
            json.dump(data, json_file, indent=4, ensure_ascii=False)

        return redirect(url_for('update'))

    return render_template('update.html')

@app.route("/delete", methods=['GET', 'POST'] )
def delete():
    product_cards = data["product_data"].items()
    if(request.method == "POST"):
        pass
    else:
        return render_template("delete.html", product_cards = product_cards)
# if __name__ == '__main__':
#     app.run(debug=True,host="0.0.0.0",port=3030)
