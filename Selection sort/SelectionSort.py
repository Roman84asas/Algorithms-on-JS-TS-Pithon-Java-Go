from typing import List

class SelectionSort:
    def __init__(self, array):
        self.array = array

    def selection_sort(self, data: List[int]) -> List[int]:
        for i, e in enumerate(self.array):
            mn = min(range(i, len(self.array)), key=self.array.__getitem__)
            self.array[i], self.array[mn] = self.array[mn], e
        return self.array


arr = [4, 1, 3, 22, 7]
array = SelectionSort(arr)
print(array.selection_sort())