# NodeBB Paycoin Tipping Plugin 

This repo serves as a staging ground for the nodebb Paycoin tipping plugin.

## Purpose

I wanted to create an easy method for users of nodebb to be able to tip each other.
This can be seen in action on [PaycoinTalk](https://paycointalk.org/)

Presently it uses the [BIP 21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) to launch the
[Official QT Wallet](https://github.com/PaycoinFoundation/paycoin/releases)
in order to transfer an amount of Paycoin directly using your wallet, rather than relying on a 'tipbot'.


## Installation

requires min nodeBB 0.6.0

git clone https://github.com/BoXHocK/nodebb-plugin-paycoin

cp nodebb-plugin-paycoin ./nodebb/node_modules/

(have not yet submitted to NPM repo >> npm install nodebb-plugin-paycoin)

goto the nodebb Admin

General reload

EXTEND

Plugins

Activate nodebb-plugin-paycoin

