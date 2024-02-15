<?php
/**
 * Template Name: Homepage
 * Description: Homepage.
 */
use Classes\Template\Homepage;
use Classes\General\MetaData;

//Init context
$context = Timber::context();

//Add data to context
$context['page'] = new Homepage(Timber::get_post());
$context['metaData'] = MetaData::constructFromPost(Timber::get_post());

//Render
Timber::render('front-page.twig', $context);
