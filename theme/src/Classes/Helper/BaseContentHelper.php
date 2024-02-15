<?php

namespace Classes\Helper;

use Classes\PostType\Page;

class BaseContentHelper
{
    public function getEntities($classname, $number = 0, $postsPerPage = null, $sticky = false, $category=null)
    {
        $fqn = 'Classes\\PostType\\' . $classname;

        $entities = [];
        $query = $this->_getEnititiesQuery($classname, $number, $postsPerPage,$sticky,$category);
        foreach ($query->posts as $post) {
            $entities[] = new $fqn($post);
        }
        wp_reset_postdata();
        return $entities;
    }

    public function getEntitiesWithPagination($classname, $number = 0,$postsPerPage = null,$sticky = false)
    {
        $fqn = 'Classes\\PostType\\' . $classname;

        $entities = [];

        $query = $this->_getEnititiesQuery($classname, $number,$postsPerPage, $sticky);
        foreach ($query->posts as $post) {
            $entities['items'][] = new $fqn($post);
        }
        $entities['pagination'] = $this->_getPagination($query);
        wp_reset_postdata();
        return $entities;
    }

    private function _getPagination($query)
    {
        $helper = new ContentHelper();
        $newsPage = new Page($helper->getNewsPage());
        $pagination = null;
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        if ($query->max_num_pages > 1) {
            $pagination = "<div class='pagination-wrapper'>";

            for ($i = 1; $i <= $query->max_num_pages; $i++) {
            if ($query->max_num_pages > 1) {
                if ($paged ==$i ) {
                    $active_class = "active";
                }
                else{
                    $active_class = '';
                }
                $pagination .= "<div class='$active_class count p-text'><a href='".$newsPage->getPermalink()."page/" . $i . "' target='_self'>"  . $i . "</a></div>";
            }
            }
        }
        return $pagination;
    }

    private function _getEnititiesQuery($classname, $number = 0, $postsPerPage = null,$sticky = null,$category=null)
    {
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        if (!empty($category)) {
            $slug =  (array($category));
        }
        if ($classname == 'Article') {
            $posttype = 'post';
        } else {
            $posttype = strtolower($classname);
        }
        if ($postsPerPage == null || $postsPerPage == false) {
            $postsPerPage = get_option('posts_per_page');
        }

        if ($sticky!=null){
            $args['meta_key'] ='sticky_post';
        }
        $meta_args = [];
        if ($sticky == true) {
            $meta_args = array(
                'key'   => 'sticky_post',
                'value' => true,
            );
        }
        $args = array(
            'post_type' => $posttype,
            'status' => 'publish',
            'numberposts' => $number,
            'posts_per_page' => $postsPerPage,
            'suppress_filters' => 0,
            'post_status' => 'publish',
            'ignore_sticky_posts' => 1,
            'meta_query' => array(
                array(
                    $meta_args
                )
            ),
            'order' => get_query_var('order'),
            'paged' => $paged,
        );
        if (!empty($category)) {

            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'category',
                    'field' => 'slug',
                    'terms' => $slug,
                    'hide_empty' => true,
                    'operator' => 'IN'
                )
            );
        }
        return new \WP_Query($args);
    }
}
