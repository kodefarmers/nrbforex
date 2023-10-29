# NrbForex

_A node module to consume Nepal Rastra Bank's forex api._


NrbForex is a node module that allows for easy comsumption of forex API by Nepal Rastra Bank.

## Installation

You can install the package via npm:

```bash
$ npm i nrbforex
```

 


## Usage


```javascript

const NRBForex = require('nrbforex')

return  NRBForex.convert(1)
// returns 1 USD to NPR
return NRBForex.convert(1,'EUR')
// returns 1 EUR to NPR
```

You can change the default currency to convert from (it is USD by default) from nrbforex/config.js.

## Contributing

We welcome contributions from the community! If you have an idea for a new feature or improvement, please submit a pull request. We also appreciate bug reports and other feedback.

To get started with contributing, simply fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under [MIT](https://opensource.org/license/mit-0/)

## Self-Promotion

Star the repository on [Github](https://github.com/kodefarmers/nrb-forex)

Follow on [Github](https://github.com/kodefarmers)
