import model
import preprocessor
import calcfunctions
import numpy as np
import json

def analyze_property(user_input):
    user_input = {"mode": "investor"}
    data = {"bed":1, "bath":1, "city":"Bronx", "state":"New York",
             "acre_lot":.11, "house_size":756, "date": 2007, "price":160000}
    '''
    user_input = json.loads(user_input)
    data = user_input["data"]
    '''
    model.create()

    price = data["price"]
    zest = price * 0.008
    appreciation_curr = calc_appreciation(data, price)
    appreciation_infl = np.array([calcfunctions.calc_inflation_adj(appreciation_curr[i], i) for i in range(11)]).astype(np.int64)
    depreciation = [calcfunctions.calc_depreciation(price, i) for i in range(11)]
    property_taxes = [calcfunctions.get_tax_amount(price, data["state"], i) for i in range(11)]
    mortgage = [calcfunctions.calc_mortage(price) * 12 * i for i in range(11)]
    if user_input["mode"] != "buyer":
        rent = [calcfunctions.calc_rental_income(price, zest, i) for i in range(11)]
    else:
        rent = np.zeros(11)
    
    total = np.array(appreciation_infl) + np.array(depreciation) - np.array(property_taxes) - np.array(mortgage) + np.array(rent)
    
    ret = {
        "appreciation_curr": appreciation_curr,
        "appreciation_infl": appreciation_infl,
        "depreciation": depreciation,
        "property_taxes": property_taxes,
        "mortgage": mortgage,
        "rent": rent,
        "total": total
    }
    
    return json.dumps(ret)


def calc_appreciation(input_wide, price):

    input = preprocessor.transform(input_wide)
    prediction = model.predict(input)[0]
    price_predicted = preprocessor.transform_price(prediction)

    mult = price/price_predicted

    ret = np.zeros(11)
    for i in range(11):
        ret[i] = round(price_predicted * mult)
        input_wide["date"] += 1
        input = preprocessor.transform(input_wide)
        prediction = model.predict(input)[0]
        price_predicted = preprocessor.transform_price(prediction)
    
    return ret