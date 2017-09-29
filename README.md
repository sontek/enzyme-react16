# enzyme-react16

enzyme-react16 test reproduction npm package.

## Table of Contents

  - [Changelog](#changelog)
  - [Reminders](#reminders)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## Changelog

  - View [Changelog](CHANGELOG.md)

## How it work

- Todo: write how it work !
  
## Installation

npm install:

    npm install git+git@github.com:kopax/enzyme-react16.git

## Reminders

**⚠️ When using this plugin, you must import in the first line of your application javascript entry file `babel-polyfill`: ⚠️**
  
    import "babel-polyfill";
    
To enable ES features in older browsers, you MUST include in the package.json

    "browserslist": ["ie >= 9", "last 2 versions"]
    // or
    "browserslist": ["ie >= 10", "last 2 versions"]

## Quick start

Clone project

    git clone git@github.com:kopax/enzyme-react16.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch
