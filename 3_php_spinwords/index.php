<?php

function spinWords(string $str): string {
  return implode(' ', array_map(fn($e) => strlen($e) >= 5 ? strrev($e) : $e, explode(' ', $str)));
}