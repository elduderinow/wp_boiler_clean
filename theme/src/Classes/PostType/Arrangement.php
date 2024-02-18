<?php

namespace Classes\PostType;

use Classes\General\Category;
use Classes\Helper\ContentHelper;
use Classes\General\Image;

class Arrangement extends BasePost
{
    protected $contentHelper;
    private $price;
    private $categories;

    public function __construct($post)
    {
        parent::__construct($post);
        $this->contentHelper = new ContentHelper();
        $this->setPrice($post);
        $this->setCategories($post); // Update the method call
    }


    /**
     * @param mixed $post
     */
    public function setPrice($post): void
    {
        $this->price = get_field('arrangement_price', $post);
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param mixed $post
     */
    public function setCategories($post)
    {
        $terms = wp_get_post_terms($post->ID, 'type-arrangement');

        if (!empty($terms) && !is_wp_error($terms)) {
            $this->categories = $this->_parseTerms($terms);
        } else {
            $this->categories = [];
        }
    }

    /**
     * @return mixed
     */
    public function getCategory()
    {
        return $this->categories;
    }

    public function _parseTerms($items)
    {
        $terms = [];
        foreach ($items as $item) {
            $terms[] = new Category($item);
        }
        return $terms;
    }
}
