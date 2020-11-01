<?php
function mergeSort($arr){
    if(count($arr) == 1 ) return $arr;
    
    $mid = count($arr) / 2;
    
    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

	$left = mergeSort($left);
    $right = mergeSort($right);
    
	return merge($left, $right);
}
 
function merge($left, $right){
    $result = array();
    
	while (count($left) > 0 && count($right) > 0){
		if($left[0] > $right[0]){
            list($result[], $right) = array($right[0], array_slice($right , 1));
		}else{
            list($result[], $left) = array($left[0], array_slice($left , 1));
		}
    }
    
	while (count($left) > 0){
        list($result[], $left) = array($left[0], array_slice($left , 1));
    }
    
	while (count($right) > 0){
		list($result[], $right) = array($right[0], array_slice($right , 1));
    }
    
	return $result;
}
 
$arr = [5, 22, 8, 15, 1, 3];
$arr = mergeSort($arr);
print_r($arr);