# D3 Testing

## Introduction

There's lot of d3 examples on the web but they mainly very simple tutorial examples, which is great for getting started but if you plan to have a complex set of visualisations you want to avoid duplicating JS in your different visualisations and do automated testing.

I've created this as an example of how to write testable d3 javascript with inheritance so multiple visualisations can share common functionality. Having a base object for your visualisations means you can write common code once and automated testing allows you to validate changes without manual testing. Obviously there is a limit to how much you can or should test your visualisations without looking at them in browser, but this allows you to write testable code, do TDD coding and encourage re-use in your javascript.

Using (jasmine)[http://pivotal.github.io/jasmine/] to test the Javascript, extending jasmine with (jasmine-jquery)[https://github.com/velesin/jasmine-jquery] for jquery selectors and ruby (1.9.2+) to install dependencies (not required but makes life easier). I also use (jasmine-headless)[http://johnbintz.github.io/jasmine-headless-webkit/] to run tests without opening the browser.

Github page lives [here](http://stevenalexander.github.io/d3-testing/).

## Overview

The site is just static html and javascript with the tests stored in the spec folder.

Requires:
- ruby (1.9.2+, with gems and bundler)

## Running the tests

First get the pre-reqs:
> bundle

To run tests inside jasmine (open browser at http://localhost:8888 to see results):
> rake jasmine

To run tests using headless jasmine:
> jasmine-headless-webkit -c spec/javascripts/

Running headless is great for speed but nasty to debug failures, use jasmine with the browser dev tools to investigate problems.