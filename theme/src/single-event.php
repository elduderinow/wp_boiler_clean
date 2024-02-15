<?php
/**
 * The Template for displaying a single article
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

use Classes\PostType\Event;
use Classes\Helper\ContentHelper;
use Classes\General\MetaData;

$helper = new ContentHelper();
$context = Timber::get_context();
$current_post = get_queried_object();

$context['event'] = new Event($current_post);
$context['metaData'] = MetaData::constructFromPost($current_post);

Timber::render( array('single-event.twig'), $context);
