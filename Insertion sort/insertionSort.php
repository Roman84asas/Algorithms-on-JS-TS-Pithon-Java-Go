<?php 
function insertionSort($arr) { 
    $length_arr = (int) count($arr);

    for ($i = 1; $i < $length_arr; $i++) { 
        $key = $arr[$i]; 
        $j = $i-1; 
      
        while ($j >= 0 && $arr[$j] > $key) { 
            $arr[$j + 1] = $arr[$j]; 
            $j = $j - 1; 
        }          
        $arr[$j + 1] = $key; 
    }
    return $arr;
} 
$arr = [4, 1, 3, 22, 7];
$array = insertionSort($arr);
print_r($array);