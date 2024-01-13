import pickle
import pandas as pd
import sys
import json

model_loaded = pickle.load(open("controllers/knn_model.pkl","rb"))


# print("Prediction is going on")

data = json.loads(sys.argv[1])
# print(data)
# print(len(data[0]))
values = data[1]    
df = pd.DataFrame([values], columns=data[0])

# print(df)
prediction = model_loaded.predict(df)

# print(prediction)
prediction_result = prediction.tolist()

print(prediction_result)

