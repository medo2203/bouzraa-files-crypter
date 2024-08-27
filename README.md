# Bouzraa Files Crypter

**Bouzraa Files Crypter** is a Node.js package that provides functionality for encrypting and decrypting files using various cryptographic algorithms. This package allows you to easily secure and restore files through AES encryption and decryption.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Encrypting a File](#encrypting-a-file)
  - [Decrypting a File](#decrypting-a-file)
- [API](#api)
  - [BouzraaFilesCrypter](#bouzraafilescrypter)
- [Supported Algorithms](#supported-algorithms)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install **Bouzraa Files Crypter**, use npm:

```bash
npm install bouzraa-files-crypter
Usage
Encrypting a File
javascript
Copy code
const { BouzraaFilesCrypter } = require('bouzraa-files-crypter');

const encryptionKey = 'your-encryption-key-in-hex';
const crypter = new BouzraaFilesCrypter(encryptionKey);

const inputPath = 'path/to/your/input/file.txt';
const outputPath = 'path/to/your/encrypted/file.enc';

crypter.encryptFile(inputPath, outputPath);
Decrypting a File
javascript
Copy code
const { BouzraaFilesCrypter } = require('bouzraa-files-crypter');

const encryptionKey = 'your-encryption-key-in-hex';
const crypter = new BouzraaFilesCrypter(encryptionKey);

const inputPath = 'path/to/your/encrypted/file.enc';
const outputPath = 'path/to/your/decrypted/file.txt';

crypter.decryptFile(inputPath, outputPath);
API
BouzraaFilesCrypter
Constructor
typescript
Copy code
constructor(encryptionKey: string, algorithm?: string)
encryptionKey: A hexadecimal string used for encryption and decryption.
algorithm (optional): The algorithm to use for encryption. Default is aes-256-ctr.
Methods
encryptFile(inputFilePath: string, outputFilePath: string): void

Encrypts the file at inputFilePath and writes the encrypted content to outputFilePath.

decryptFile(inputFilePath: string, outputFilePath: string): string

Decrypts the file at inputFilePath and writes the decrypted content to outputFilePath. Returns the output file path.

Supported Algorithms
The following algorithms are supported:

aes-256-ctr (default)
aes-192-ctr
aes-128-ctr
aes-256-cbc
aes-192-cbc
aes-128-cbc
Ensure that your encryption key length matches the requirements for the selected algorithm.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request. Make sure to follow the code style and include tests for new features or bug fixes.

License
This package is licensed under the MIT License. See the LICENSE file for details.

For more detailed documentation and updates, visit the GitHub repository.

markdown
Copy code

### Key Points:

- **Installation**: Provides instructions to install the package.
- **Usage**: Demonstrates basic usage for encrypting and decrypting files.
- **API**: Details the class constructor and methods.
- **Supported Algorithms**: Lists the algorithms that can be used.
- **Contributing**: Encourages contributions and provides basic guidelines.
- **License**: Specifies the license under which the package is distributed.

Replace placeholders like `your-encryption-key-in-hex`, `path/to/your/input/file.txt`, `path/to/your/encrypted/file.enc`, and `https://github.com/your-username/bouzraa-files-crypter` with actual values relevant to your package and project.







```
