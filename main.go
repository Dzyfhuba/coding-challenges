package main

import (
	"fmt"

	golangminmax "github.com/Dzyfhuba/coding-challenges/2_golang_minmax"
)

func main() {
	fmt.Println(golangminmax.MinMax([]int{1,2,3,4}))
	fmt.Println(golangminmax.MinMax([]int{}))
}