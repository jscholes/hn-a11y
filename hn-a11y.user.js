// ==UserScript==
// @name HN Accessibility
// @description Screen reader accessibility improvements when navigating Hacker News
// @namespace http://jscholes.net
// @version 0.1
// @include https://news.ycombinator.com/*
// @license MIT
// ==/UserScript==

var NODE_TYPE_TEXT = 3;
var POST_LINK_SELECTOR = 'a.storylink';
var SITEBIT_SELECTOR = 'span.sitebit';

var post_links = document.querySelectorAll(POST_LINK_SELECTOR);
var post_link;
for(post_link of post_links)
{
    var heading_node = document.createElement('h2');
    post_link.parentNode.replaceChild(heading_node, post_link);
    heading_node.appendChild(post_link);
}

var post_sites = document.querySelectorAll(SITEBIT_SELECTOR);
var post_site;
for(post_site of post_sites)
{
    for(child of post_site.childNodes)
    {
        if(child.nodeType == NODE_TYPE_TEXT)
        {
            child.remove();
        }
    }
}
