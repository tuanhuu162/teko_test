import csv
import json

#data = pd.read_csv("D:/teko/data.csv",dtype={
#			"InvoiceNo" : str,
#			"StockCode" : str,
#			"Description": str,
#			"Quantity"  : str,
#			"InvoiceDate": str,
#			"UnitPrice" : str,
#			"CustomerID": str,
#			"Country": str
#			},)
csv_file = open('D:/teko/data.csv','r',errors="ignore")

fieldnames = ("InvoiceNo","StockCode","Description","Quantity","InvoiceDate","UnitPrice","CustomerID","Country")
reader = csv.DictReader(csv_file,fieldnames)
rows = [row for row in reader]
for i in range(2):
    jsonfile = open('D:/teko/data' + str(i) + '.json','w')
    length = 19931
    data_file = {'test' : {str(i):dict(j) for i,j in enumerate(rows[1 + length*i:length*(i+1)])}}
    out = json.dumps(data_file)
    jsonfile.write(out)
    