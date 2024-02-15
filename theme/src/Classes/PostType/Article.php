<?php namespace Classes\PostType;

use Classes\Traits\Paragraphs;

/**
 * Class Article: News-article - POST
 * @package Classes\PostType
 */
class Article extends BasePost
{
    use Paragraphs;

    private $subtitle;

    public function __construct($post) {
        parent::__construct($post);

        $this->setSubtitle($post);
        $this->setParagraphs($post);
    }

    /**
     * @return string
     */
    public function getSubtitle()
    {
        return $this->subtitle;
    }

    /**
     * @param mixed $post
     */
    public function setSubtitle($post): void
    {
        $this->subtitle = get_field('subtitle', $post);
    }
}
