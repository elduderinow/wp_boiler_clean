<?php
/**
 * The Template for displaying a single arrangement
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

use Classes\PostType\Arrangement;
use Classes\General\MetaData;

$context = Timber::context();
$current_post = get_queried_object();

$context['arrangement'] = new Arrangement($current_post);
$context['metaData'] = MetaData::constructFromPost($current_post);

Timber::render( array('pages/singles/single-arrangement.twig'), $context);
