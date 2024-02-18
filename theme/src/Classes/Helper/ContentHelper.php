<?php

namespace Classes\Helper;

use Classes\General\Category;
use Classes\PostType\Arrangement;

class ContentHelper
{
    public function getArrangements($search_criteria, $category = null)
    {

        $args = $this->parseArgs('arrangement', 16, $search_criteria, $category); // -1 retrieves all posts

        $query = new \WP_Query($args);

        $entities = [];
        foreach ($query->posts as $post) {
            $entities['items'][] = new Arrangement($post);
        }

        $entities['total_items'] = $query->found_posts;

        wp_reset_postdata();
        return $entities;
    }

    private function parseArgs($type, $limit, $search_criteria, ?Category $category = null)
    {

        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

        $tax_args = [];
        $args = [
            'post_type' => $type,
            'paged'    => $paged,
            'posts_per_page' => $limit
        ];

        if (!empty($category)) {
            $tax_query = [];
            $tax_query[] = [
                'taxonomy' => $category->getTaxonomy(),
                'terms' => $category->getSlug(),
                'field' => 'slug',
                'operator' => 'IN'
            ];

            $tax_args[] = $tax_query;
        }

        if (!isset($search_criteria['sort'])) {
            $search_criteria['sort'] = 'ASC';
        }

        if (isset($search_criteria['sort'])) {
            $args['orderby'] = [
                'title'   => $search_criteria['sort']
            ];
        }

        if (isset($search_criteria['q'])) {
            $args['s'] =  $search_criteria['q'];
        }


        if (isset($search_criteria['arrangements'])) {
            $arrangements = [];
            $arrangements['relation'] = 'OR';

            foreach ($search_criteria['arrangements'] as $arrangement) {
                $arrangements[] = [
                    'taxonomy' => 'type-arrangement',
                    'field'    => 'slug', // Adjust the field based on how the terms are stored
                    'terms'    => $arrangement,
                    'operator' => 'IN',
                ];
            }

            $tax_args[] = $arrangements;
        }


        if (!empty($meta_args)) {
            $args['meta_query'] = $meta_args;
        }

        if (!empty($tax_args)) {
            $args['tax_query'] = $tax_args;
        }

        return $args;
    }
}
