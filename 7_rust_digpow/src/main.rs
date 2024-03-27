pub fn dig_pow(n: i64, p: i32) -> i64 {
    let digits: Vec<_> = n
        .to_string()
        .chars()
        .map(|d| d.to_digit(10).unwrap() as i64)
        .collect();

    let sum: i64 = digits
        .iter()
        .enumerate()
        .map(|(i, &d)| d.pow((p + i as i32) as u32))
        .sum();

    if sum % n == 0 {
        sum / n
    } else {
        -1
    }
}

fn main() {
    println!("{}", dig_pow(46288, 3));
}

#[cfg(test)]
mod tests {
    use super::*;

    fn dotest(n: i64, p: i32, exp: i64) -> () {
        println!(" n: {:?};", n);
        println!("p: {:?};", p);
        let ans = dig_pow(n, p);
        println!(" actual:\n{:?};", ans);
        println!("expect:\n{:?};", exp);
        println!(" {};", ans == exp);
        assert_eq!(ans, exp);
        println!("{};", "-");
    }

    #[test]
    fn basic_tests() {
        dotest(89, 1, 1);
        dotest(92, 1, -1);
        dotest(46288, 3, 51);
    }
}
