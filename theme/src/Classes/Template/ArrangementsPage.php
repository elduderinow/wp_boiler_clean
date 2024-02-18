<?php

namespace Classes\Template;

use Classes\General\Category;
use Classes\PostType\BasePost;
use Classes\Helper\ContentHelper;
use Classes\Traits\SearchCriteria;

/**
 * Class Homepage: Specific fields only used on Homepage-template
 * @package Classes\Template
 */
class ArrangementsPage extends BasePost
{

    use SearchCriteria;
    protected $contentHelper;
    private $arrangements = [];
    private $filters = [];
    private $types = [];
    private $category = null;


    public function __construct($post, $term = false)
    {
        if(!$term) parent::__construct($post);

        if($term) { 
            $category = new Category($post);
            $this->category = $category;
        }
        

        $this->contentHelper = new ContentHelper();
        $this->setSearchCriteria();
        $this->setArrangements();
    }

    public function setArrangements()
    {
        $this->arrangements = $this->contentHelper->getArrangements($this->searchCriteria, $this->category);
    }

    public function getArrangements()
    {
        return $this->arrangements;
    }
}
