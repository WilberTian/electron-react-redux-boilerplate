## Introduction

It's a simple boilerplate of electron-react-redux.   

The code support both development and production mode.  
With the development mode, we can leverage the hot load feature for development.



## Install & Setup

Just clone the code and run below command:

	npm install



## Production mode

To start production mode, just run below command:

	npm run prod

After the commnad finished, some files (like bundle.js, vendor.bundle.js) will be generated in dist folder.

Then the electron application will be started as below:

<img alt="production mode" src="https://cloud.githubusercontent.com/assets/5880320/18953871/096ed6a6-8683-11e6-948b-6eaaa98db173.png" width="600px" />


## Development mode

To start development mode, , just run below commands in **two seperate terminals**:

	npm run dev-hot
	npm run dev

With above commands, the electron application will be started with development mode:

<img alt="production mode" src="https://cloud.githubusercontent.com/assets/5880320/18954594/4aed9e70-8686-11e6-8d92-7d27bc3524d7.png" width="600px" />

Hot key for dev dock monitor:

- `CTRL+H` Toggle DevTools Dock
- `CTRL+Q` Move DevTools Dock Position
