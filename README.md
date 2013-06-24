# D3 Testing

## Introduction

This is an example project for how to unit test d3 visualisations with jasmine and structure with base classes to avoid duplicating code.

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