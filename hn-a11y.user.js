// ==UserScript==
// @name HN Accessibility
// @description Screen reader accessibility improvements when navigating Hacker News
// @namespace http://jscholes.net
// @version 0.1
// @include https://news.ycombinator.com/*
// @license MIT
// ==/UserScript==

var POST_LINK_SELECTOR = 'a.storylink';

var post_links = document.querySelectorAll(POST_LINK_SELECTOR);

var post_link;
for(post_link of post_links)
{
    // link.setAttribute('role', 'heading');
    // link.setAttribute('aria-level', 2);
    var heading_node = document.createElement('h2');
    post_link.parentNode.replaceChild(heading_node, post_link);
    heading_node.appendChild(post_link);
}
