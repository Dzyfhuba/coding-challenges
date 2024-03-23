package golangminmax

func MinMax(arr []int) [2]int {
	return [2]int{Min(arr), Max(arr)}
}

func Min(values []int) (min int) {
	if len(values) == 0 {
		return 0
	}

	min = values[0]
	for _, v := range values {
		if v < min {
			min = v
		}
	}

	return min
}

func Max(values []int) (max int) {
	if len(values) == 0 {
		return 0
	}

	max = values[0]
	for _, v := range values {
		if v > max {
			max = v
		}
	}

	return max
}