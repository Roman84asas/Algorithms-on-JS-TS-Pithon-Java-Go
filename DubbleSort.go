package main

import "fmt"

func duubleSort(Args []int) []int {
	var sortArr = Args
	var tempVal int
	for i := 0; i < len(sortArr)-1; i++ {
		for j := 0; j < len(sortArr)-1; j++ {
			if sortArr[j] > sortArr[j+1] {
				tempVal = sortArr[j]
				sortArr[j] = sortArr[j+1]
				sortArr[j+1] = tempVal
			}
		}
	}
	return sortArr
}

func main() {
	var arr []int = []int{4, 1, 3, 22, 7}
	var result []int = duubleSort(arr)
	fmt.Println(result)
}
