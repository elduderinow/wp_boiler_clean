<?php namespace Classes\Template;

use Classes\PostType\BasePost;
use Classes\Traits\Paragraphs;

/**
 * Class Homepage: Specific fields only used on Homepage-template
 * @package Classes\Template
 */
class Homepage extends BasePost
{
    use Paragraphs;
    public function __construct($post)
    {
        parent::__construct($post);
        $this->setParagraphs($post);
    }
}