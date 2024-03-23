package golangminmax_test

import (
	"testing"

	golangminmax "github.com/Dzyfhuba/coding-challenges/2_golang_minmax"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func TestMinMax(t *testing.T) {
	Describe("2GolangMinmax/2GolangMinmax", func() {
		Context("test", func() {
			It("Sample tests", func() {
				Expect(golangminmax.MinMax([]int{1, 2, 3, 4, 5})).To(Equal([2]int{1, 5}))
				Expect(golangminmax.MinMax([]int{2334454, 5})).To(Equal([2]int{5, 2334454}))
			})
		})
	})
}