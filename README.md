# bouzraa-files-crypter

bouzraa-files-crypter is a Node.js package that provides functions for encrypting and decrypting files using cryptographic algorithms. It simplifies the process of securing sensitive files on disk.

## Installation

You can install bouzraa-files-crypter via npm:

```bash
npm install bouzraa-files-crypter
```
## Usage

``` bash
const { encryptFile, decryptFile } = require('bouzraa-files-crypter');

const inputFile = './hello.js';
const encryptedFile = 'encrypted_file.enc';
const decryptedFile = 'decrypted_file.js';

// Encrypt file
encryptFile(inputFile, encryptedFile);

// Decrypt file
decryptFile(encryptedFile, decryptedFile);

```
## License`

This package is licensed under the MIT License. See the LICENSE file for details.
