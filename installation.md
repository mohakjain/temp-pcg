# Installation and Editing Instructions

This document contains installation, editing, and deployment instructions for Phoenix webteam members. It assumes little background knowledge. Table of contents: 
- Summary of Code and Dependencies
- Setting up your Local Environment
- Getting Started with the Website
- Making Pull Requests
- Deploying the Website

## Summary of Code and Dependencies

`pcg-site` is built using [GatsbyJS](https://www.gatsbyjs.com/), a static site engine. It is written largely in [ReactJS](https://reactjs.org/) in a [JSX](https://reactjs.org/docs/introducing-jsx.html) framework. This means the HTML for the site is embedded inside of React components. We use traditional CSS for styling and a small number of GraphQL queries in order to load images. 

A full list of required packages can be found in `node_modules`, but some of the more important ones are listed here: 
- **Frontend**: React-Bootstrap
- **Environment**: 
- **Backend**:

## Setting up your Local Environment
GatsbyJS's [in-depth tutorial](https://www.gatsbyjs.com/tutorial/part-zero/) Step 0 provides great system agnostic instructions for installing all of the environment dependencies you need. 

By the time you've gone through the tutorial, you should have installed and verified the following: 
- Developer tools
- A package manager called Node
- A version control system called Git
- A client called Gatsby-CLI

## Getting Started with the Website
Open up your Terminal and `cd` into the directory that you would like the site to live in. Then type in the following: 
```
git clone https://github.com/phoenix-consulting/pcg-site.git
```
This will create a folder called `pcg-site` containing all of the files of the website so far. We want to move into `pcg-site`, so: 
```
cd pcg-site
```
Provided that you installed the Gatsby CLI while setting up your environment, you should now be able to run the following
```
gatsby develop
```
This will build the site according to the files in `pcg-site` and deploy it locally at port 8000. You can view the website at this [link](http://localhost:8000/)

## Making Pull Requests
Git, the version control system you installed above, is basically a very powerful save feature. Just like how Microsoft Word requires you to "command + s" in order to save documents, Git has a series of commands it requires to save things as well. 

When you have made some edits, type the following into your Terminal while you are inside of `pcg-site`: 
```
git add -A
```
```
git commit -m "What did you change? Add a message in between the quotes here."
```
This will make a *commit*, or snapshot of the website files at a given time in a hidden folder called `pcg-site.git` inside of `pcg-site`. If you're curious about seeing it, you can press CMD + SHIFT + PERIOD while opening up a Finder window. 

Once you know how to commit using Git, the next step is to begin working with *pull requests* (often abbreviated PR). PRs are drafts that you submit to Phoenix's online repository for code review; working with them prevents sudden changes to `master`, the public version of the website. We won't go into the full process of making pull requests here, but you can check out this wonderful [guide](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/) starting from "3. Create a Branch" for details. 

Once you have made your pull request, comment what you changed and what still must be done. Somebody from the officer team will go ahead and review the code. After review is done, you can *merge* it into the `master` branch, effectively making those changes public.

## Deploying the Website
Coming soon!

*Compiled by Christopher Zou, '22, in 8/2020*






