#!/bin/bash

# Function to run tests and print result
run_test() {
    target=$1
    command=$2
    echo -n "  Running $target"
    ( $command > /dev/null ) &
    pid=$!
    spin='-\|/'
    i=0
    while kill -0 $pid 2>/dev/null; do
        i=$(( (i+1) % 4 ))
        printf "\r${spin:$i:1}"
        sleep 0.1
    done
    wait $pid
    echo -e "\r$target tests:" $( [ $? -ne 0 ] && echo -e "\e[31mFAILED\e[0m" || echo -e "\e[32mSUCCESS\e[0m" )
}

run_test "1_javascript_narcissistic" "npx mocha --file 1_javascript_narcissistic/index_test.js"
run_test "2_golang_minmax" "ginkgo 2_golang_minmax/"
run_test "3_php_spinwords" "./vendor/bin/phpunit 3_php_spinwords/*_test.php"
run_test "4_java_squaredigits" "mvn -f 4_java_squaredigits/main/pom.xml test"
run_test "5_typescript_isogram" "npx ts-mocha 5_typescript_isogram/index_test.ts"
run_test "6_python_tocamelcase" "python3 6_python_tocamelcase/app_test.py"
run_test "7_rust_digpow" "cargo test --manifest-path=7_rust_digpow/Cargo.toml"