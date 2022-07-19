# Daily Journal App

## Overview
The Daily Journal App allows you to write down any thoughts, ideas or memories that would like to record.

## Features
The Daily Journal App automatically records the date of each journal entry and publishes them in chronological order.

### Requirements
1. Node v16.10.0
2. Yarn 1.22.18
3. Json-server installed

## Installation
1. Fork and clone `git@github.com:seanmartinstudio/daily-journal.git`
2. Open the project in Visual Studio Code.
3. In the terminal type `yarn start` to start up the App in `http://localhost:3000/`.
4. In a separate terminal type `json-server --p 3001 --w db.json` to start up the local server in `http://localhost:3001/journalData`.

## How To Use
1. Navigate to the `WRITE` page to write and publish your journal entry.
2. Navigate to the `READ` page to read your journal entries in chronological order.
3. You may delete ay journal entry by clicking on the entry's `DELETE` button. 

## Future Updates
1. Search journal entries by date.
2. `HOME` page renders a randomized inspirational quote from an outside API.
3. App deployed to the internet, beyond just local server. 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

