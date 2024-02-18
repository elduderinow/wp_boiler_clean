<?php
namespace Classes\Traits;

use Classes\General\Video;


trait SearchCriteria
{

    private $searchCriteria = [];

    private function setSearchCriteria() {
        $this->searchCriteria = $_GET;
    }

}