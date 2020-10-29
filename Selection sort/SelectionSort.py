def selection_sort(araay):
    for i, e in enumerate(araay):
        mn = min(range(i, len(araay)), key=araay.__getitem__)
        araay[i], araay[mn] = araay[mn], e
    return araay

arr = [4, 1, 3, 22, 7]
array = selection_sort(arr)
print(array)