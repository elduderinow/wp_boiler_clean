<?php

/**
 * Template Name: Arrangements
 * Description: Overzichtspagina voor Arrangements
 */

use Classes\Template\ArrangementsPage;
use Classes\General\MetaData;

$context = Timber::context();
$current_post = get_queried_object();

$context['page'] = new ArrangementsPage($current_post);
$context['metaData'] = MetaData::constructFromPost($current_post);

Timber::render('pages/page-arrangements.twig', $context);
