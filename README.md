# bouzraa-files-crypter

bouzraa-files-crypter is a Node.js package that provides functions for encrypting and decrypting files using cryptographic algorithms. It simplifies the process of securing sensitive files on disk.

## Installation

You can install bouzraa-files-crypter via npm:

```bash
npm install bouzraa-files-crypter
```
## Usage

``` bash
import { BouzraaFilesCrypter } from 'bouzraa-files-crypter';

// Initialize with your encryption key
const encryptionKey = 'your-32-byte-encryption-key-here';
const creapter = new BouzraaFilesCrypter(encryptionKey);

// Decrypt a file
try {
  const inputPath = '/path/to/encrypted/file.enc';
  const outputPath = '/path/to/decrypted/file.txt';
  creapter.decryptFile(inputPath, outputPath);
  console.log('File decrypted successfully');
} catch (error) {
  console.error('Error decrypting file:', error);
}

```
## License`

This package is licensed under the MIT License. See the LICENSE file for details.
