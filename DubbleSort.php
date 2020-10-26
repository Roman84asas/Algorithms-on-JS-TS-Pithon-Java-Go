<?php 
$arr = (array) [4, 1, 3, 22, 7];

class DubbleSort 
{
    public $tempVal;
    public $sortArray;

    function __construct($array)
    {
        $this->sortArray = $array;
    }

    function sort_array() {
        for ($i=0; $i < count($this->sortArray)-1; $i++) { 
            for ($j=0; $j < count($this->sortArray)-1; $j++) { 
               if ($this->sortArray[$j] > $this->sortArray[$j+1]) {
                   $this->tempVal = $this->sortArray[$j];
                   $this->sortArray[$j] = $this->sortArray[$j+1];
                   $this->sortArray[$j+1] = $this->tempVal;
               }
            }
        }
        return $this->sortArray;
    }
}

$select_arr = new DubbleSort($arr);

print_r($select_arr->sort_array());