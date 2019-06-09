# iozeta CryptoVend Bitcoin Lightning

### Description
A payment UI running on a secure tablet connected to a vending machine equipped with an iozeta CryptoVend.
It connects to the OpenNode Lightning API to create a payment invoice.
When the invoice is paid, it notifies the CryptoVend of the payment.

### Running and Installation
This project is a standard Vue.js application, running on top of [Node JS](https://nodejs.org) and [NPM](https://www.npmjs.com/). After installing Node and NPM locally, the following steps will setup and configure the application.  These are the commands for Ubuntu, other operating systems will vary.

```git clone https://github.com/iozeta/cryptovend-tablet-ui.git```

```cd cryptovend-tablet-ui```

```npm install```

Now your development environment is ready for the config. Edit the .env.local file. This file contains your API settings for OpenNode and iozeta CryptoVend.

```vim .env.local``` 

Add the following lines, setting the config values to your own.

```
VUE_APP_OPENNODE_KEY=[OPENNODE KEY]
VUE_APP_IOZETA_VEND_IP=[CRYPTOVEND LOCAL IP]
VUE_APP_IOZETA_VEND_USER=[CRYPTOVEND USER]
VUE_APP_IOZETA_VEND_PASS=[CRYPTOVEND PASS]
```

The following command can be used to build the project into a web application. See https://vuejs.org/ for detailed documentation on running Vue JS applications.

``vue-cli-service build``

 The following are hardware and software used in this project.

* https://vuejs.org
* https://nodejs.org
* https://www.npmjs.com
* https://www.opennode.co
* https://www.iozeta.com
* https://github.com/axios/axios
* https://github.com/scopewu/qrcode.vue
* https://github.com/opennodedev/opennode-node
