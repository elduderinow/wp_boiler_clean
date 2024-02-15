<?php namespace Classes\PostType;

use Classes\Traits\Paragraphs;

class Page extends BasePost
{
    use Paragraphs;

    private $template;
    private $subtitle;

    public function __construct($post) {
        parent::__construct($post);

        $this->setTemplate($post);
        $this->setSubtitle($post);
        $this->setParagraphs($post);
    }

    /**
     * getTemplate
     * @return string
     */
    public function getTemplate()
    {
        return $this->template;
    }
    /**
     * @return string
     */
    public function getSubtitle()
    {
        return $this->subtitle;
    }

    /**
     * setTemplate
     * @param mixed $post
     */
    public function setTemplate($post) {
        $this->template = get_page_template_slug($post->ID);
    }
    /**
     * @param mixed $post
     */
    public function setSubtitle($post): void
    {
        $this->subtitle = get_field('subtitle', $post->ID);
    }

}
