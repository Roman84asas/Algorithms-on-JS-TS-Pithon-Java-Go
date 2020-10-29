<?php
class SelectionSort
{
    private $count_array;
    public $arr;

    function __construct($arr)
    {
        $this->arr = $arr;
        $this->count_array = count($arr);
    }

    function sort_array() {
        for($i = 0; $i < count($this->arr); $i++) {
            $min_ell = $i;
            for($j = $i + 1; $j < $this->count_array; $j++) {
                if($this->arr[$j] < $this->arr[$min_ell]) $min_ell = $j;
            }
            list($this->arr[$i], $this->arr[$min_ell]) = array($this->arr[$min_ell], $this->arr[$i]);
        }
        return $this->arr;
    }    
}

$arr = (array) [4, 1, 3, 22, 7];
$select_arr = new SelectionSort($arr);

print_r($select_arr->sort_array());