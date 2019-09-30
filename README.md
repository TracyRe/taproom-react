# _Taproom-React_

#### React component and routing project for Epicodus

_Published_ **April 19 2019**<br>
_Updated_ **September 30 2019**<br>
_Author_ **Tracy Reith**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Development Challenges](#development-challenges)
1. [React versus Angular](#react-versus-angular)
1. [Architecture](#architecture)
1. [Target Audience/Users](#target-audience/users)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Assumptions](#assumptions)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
A website representing a taproom, or bar, featuring several kegs of beer. Beer can be sold by the pint or growler reducing the number of pints remaining in the keg. Employees can add new kegs and edit existing kegs, specifying the name, brand, ABV, and price. This demonstration website does not include user authentication.

### Learning Objective
* Structure a site with components
* Duplicate a site made with a different technology, noting the differences in structure
* Apply routing
* Apply a default route for files not found (404)

### Development Challenges
**AKA Unforeseen Issues that I really should have forseen:**
I initially built my environment with 'create-react-app' and started recreating my project without encountering any major issues, until I tested routing for the error page. All components were visible from the root until I put routing in place. With routing in place, only the header was visible. I put 'Switch' tags in place, but Switch functionality did not seem to be available with the 'create-react-app' package. I googled for solutions; while I found alternative methods for delivering custom error pages, I couldn't find anything that could tell me how to use Switch. I wanted to use that method, since it is in the curriculum and included in this project's requirements, before branching out to other options.

I tried to reconfigure my environment in the worst way possible, forgetting entirely about the 'eject' command that would have cleanly removed the 'create-react-app' configurations. The result was a mangled, unusable environment, which I had to abandon half way through the day. I exported my morning's git log into a CSV file and re-built the project on an existing React project that I knew worked.

The worst part is I am now second guessing myself about whether I had a misplaced tag that might have been the problem all along.

### React versus Angular
With React, at least with as little I know of it so far, I am focusing almost exclusively on the UI and thinking very little of the functionality, which I took almost for granted with Angular.

Angular had me thinking much more about functionality when planning the architecture of the project. Although I did not refer to the original Angular project when planning the React components, for a relatively simple project such as this, I find they align fairly closely. I would not expect that to be the case for a more complex project.

Angular has a lot of programming shortcuts that I am missing right now, particularly two-way binding.

### Architecture
![Component and Routing Architecture Diagram](./src/assets/taproom-react-structure.png?raw=true "Component and Routing Architecture Diagram")

### Target Audience/Users
* Bartender / bar employee

### User Stories
**As a** bartender,<br>
**I want** the system to decrement by one,<br>
**So that** I can sell a single pint of beer.

**As a** bartender,<br>
**I want** the system to decrement by four,<br>
**So that** I can sell a growler of beer.

**As a** bartender,<br>
**I want** the system to indicate when a keg is within 4 pints of empty,<br>
**So that** I know it will need to be replaced.

**As a** bartender,<br>
**I want** the system to provide a mechanism for "replacing" a keg,<br>
**So that** I can continue to sell pints and kegs of the same beer.

**As a** bartender,<br>
**I want** the system to provide a mechanism for adding a new keg of beer,<br>
**So that** I can increase the offerings of beer.

**As a** bartender,<br>
**I want** the system to mechanism for removing a keg from the list,<br>
**So that** I will not be able to sell a beer my bar no longer offers.

**As a** bartender,<br>
**I want** a way to edit a keg,<br>
**So that** I can change the beer on the list without actually removing or adding it.


### Product Requirements
* Can "sell" single pints one at a time
* Can "sell" growlers equal to 4 pints
* Will alert bartender when a keg is running low and needs to be replaced
* Can replace a keg
* Can add new kegs
* Can change existing kegs
* Can remove existing kegs

### Non-technical Requirements
* Visually appealing

### Assumptions
* No user authentication for create and update functionality
* Kegs contain 124 pints
* Initiates with hard-coded set of 3 kegs


### Installation
* Clone from https://github.com/TracyRe/taproom-react.git
* Run `$ npm install`
* To view, run `$ npm start` from the project root directory

### Known Bugs
* None identified

### Technologies Used
* React
* JSX, Javascript
* HTML, CSS

### License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Tracy Reith
