<?php
/**
 * Template Name: News-overview
 * Description: Overview page for news.
 */
use Classes\Helper\ContentHelper;
use Classes\PostType\Page;
use Classes\General\MetaData;

$helper = new ContentHelper();
$context = Timber::get_context();
$current_post = get_queried_object();

$context['page'] = new Page($current_post);
$context['metaData'] = MetaData::constructFromPost($current_post);

Timber::render( 'archive.twig', $context );
