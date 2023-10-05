# Map and filter

nums  = [1,2,3,4,5,6,7,8,9]

print(list(map(lambda x: x+ 2, nums)))

print(list(filter(lambda x: x%4 == 0, nums)))


