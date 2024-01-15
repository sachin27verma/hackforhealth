import numpy as np 
import pandas as pd 
train=pd.read_csv("Training.csv")
test=pd.read_csv("Testing.csv")
pd.set_option('display.max_columns', None)
#print(train)
columns_to_drop = ["nodal_skin_eruptions","muscle_wasting","burning_micturition","spotting_ urination",
                   "patches_in_throat","sunken_eyes","acute_liver_failure","fluid_overload","swelled_lymph_nodes",
                   "malaise","phlegm","swollen_blood_vessels","puffy_face_and_eyes","swollen_extremeties","weakness_of_one_body_side",
                   "passage_of_gases","toxic_look_(typhos)","altered_sensorium","dischromic _patches","polyuria","mucoid_sputum",
                   "rusty_sputum","receiving_blood_transfusion","receiving_unsterile_injections","fluid_overload","blood_in_sputum",
                   "prominent_veins_on_calf","silver_like_dusting","small_dents_in_nails","inflammatory_nails","yellow_crust_ooze",
                   "Unnamed: 133"
                   ]
df_train=train.drop(columns=columns_to_drop,axis=1)
df_train.isna().sum()
# df_train.head(5)
columns_to_drop_1 = ["nodal_skin_eruptions","muscle_wasting","burning_micturition","spotting_ urination",
                   "patches_in_throat","sunken_eyes","acute_liver_failure","fluid_overload","swelled_lymph_nodes",
                   "malaise","phlegm","swollen_blood_vessels","puffy_face_and_eyes","swollen_extremeties","weakness_of_one_body_side",
                   "passage_of_gases","toxic_look_(typhos)","altered_sensorium","dischromic _patches","polyuria","mucoid_sputum",
                   "rusty_sputum","receiving_blood_transfusion","receiving_unsterile_injections","fluid_overload","blood_in_sputum",
                   "prominent_veins_on_calf","silver_like_dusting","small_dents_in_nails","inflammatory_nails","yellow_crust_ooze"
                   ]
df_test = test.drop(columns=columns_to_drop_1,axis=1)
# df_test.head(5)
P = df_train[["prognosis"]]
X = df_train.drop(["prognosis"],axis=1)
Y = df_test.drop(["prognosis"],axis=1)
print(Y.columns)
from sklearn.model_selection import train_test_split
xtrain,xtest,ytrain,ytest = train_test_split(X,P,test_size=0.2,random_state=42)
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
rf= RandomForestClassifier(random_state=42)
model_rf = rf.fit(xtrain,ytrain)
tr_pred_rf = model_rf.predict(xtrain)
ts_pred_rf = model_rf.predict(xtest)

# print("training accuracy is:",accuracy_score(ytrain,tr_pred_rf))
# print("testing accuracy is:",accuracy_score(ytest,ts_pred_rf))
test.join(pd.DataFrame(model_rf.predict(Y),columns=["predicted"]))[["prognosis","predicted"]]