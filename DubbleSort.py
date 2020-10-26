arr = [4, 1, 3, 22, 7]

class DubbleSort:
    def __init__(self, array):
        self.array = array

    def sort_array(self):
        for i in  range(len(self.array)-1):
            for j in range(len(self.array)-1):
                if self.array[j] > self.array[j+1]:    
                        tempVal = self.array[j]
                        self.array[j] = self.array[j+1]
                        self.array[j+1] = tempVal
        return self.array

get_number = DubbleSort(arr)
print(get_number.sort_array())