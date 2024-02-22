## 1 UPDATE VALUES IN DICTIONARIES AND LISTS
#
#x = [ [5,2,3], [10,8,9] ] 
#students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
#]
#sports_directory = {
#    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
#}
#z = [ {'x': 10, 'y': 20} ]
#
#
#x[1][0] = 15
#students[0]['last_name'] = 'Bryant'
#sports_directory['soccer'][0] = 'Andres'
#
#z[0]['y'] = 30
#
#
#print(x)
#print(students)
#print(sports_directory)
#print(z)
#
#
## 2 ITERATE THROUGH A LIST OF DICTIONARIES

#students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#    ]
#def iterateDictionary(students):
#    for key in students:
#        print(key)
#iterateDictionary(students)

# 3 Get Values From a List of Dictionaries
#students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
#
#def iterateDictionary2(key_name, some_list ):
#   for i in some_list:
#        print(i[key_name])
#
#
#
#iterateDictionary2('first_name', students)
#iterateDictionary2('last_name', students)
#

# 4 Iterate Through a Dictionary with List Values

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    
    print(len(dojo['locations']), "locations")
    for i in range (0, len(dojo['locations'])):
        print(dojo['locations'][i])
    print('\n', len(dojo['instructors']), "Instructors")
    for i in range (0, len(dojo['instructors'])):
        print(dojo['instructors'][i])



printInfo(dojo)


