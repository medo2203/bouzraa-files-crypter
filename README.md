# Files Protector

**Files Protector** is a TypeScript/Node.js package that provides robust functionality for encrypting and decrypting files using various cryptographic algorithms. This package allows you to easily secure and restore files through AES encryption and decryption with initialization vectors for enhanced security.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Encrypting a File](#encrypting-a-file)
  - [Decrypting a File](#decrypting-a-file)
- [API](#api)
  - [FilesProtector](#filesprotector)
- [Supported Algorithms](#supported-algorithms)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install **Files Protector**, use npm:

```bash
npm install files-protector
```

## Usage

### Encrypting a File

```typescript
import { FilesProtector } from "files-protector";

const encryptionKey = "your-encryption-key-in-hex";
const protector = new FilesProtector(encryptionKey);

const inputPath = "path/to/your/input/file.txt";
const outputPath = "path/to/your/encrypted/file.enc";

protector.encryptFile(inputPath, outputPath);
```

### Decrypting a File

```typescript
import { FilesProtector } from "files-protector";

const encryptionKey = "your-encryption-key-in-hex";
const protector = new FilesProtector(encryptionKey);

const inputPath = "path/to/your/encrypted/file.enc";
const outputPath = "path/to/your/decrypted/file.txt";

protector.decryptFile(inputPath, outputPath);
```

## API

### FilesProtector

#### Constructor

```typescript
constructor(encryptionKey: string, algorithm: string = "aes-256-ctr")
```

- **encryptionKey**: A hexadecimal string used for encryption and decryption.
- **algorithm**: (optional) The algorithm to use for encryption. Default is "aes-256-ctr".

#### Methods

```typescript
encryptFile(inputFilePath: string, outputFilePath: string): void
```

Encrypts the file at inputFilePath and writes the encrypted content to outputFilePath. Uses an initialization vector (IV) for enhanced security.

```typescript
decryptFile(inputFilePath: string, outputFilePath: string): string
```

Decrypts the file at inputFilePath and writes the decrypted content to outputFilePath. Returns the output file path.

#### Private Methods

The class also includes two private methods for internal use:

- `private encrypt(buffer: Buffer): Buffer`
- `private decrypt(encryptedBuffer: Buffer): Buffer`

These methods handle the actual encryption and decryption operations using initialization vectors for secure cryptographic operations.

## Security Features

- Utilizes initialization vectors (IV) for enhanced security
- IV is automatically generated for each encryption operation
- IV is stored with the encrypted data for proper decryption
- Supports various AES encryption algorithms
- Implements secure buffer handling

## Supported Algorithms

The following algorithms are supported:

- aes-256-ctr (default)
- aes-192-ctr
- aes-128-ctr
- aes-256-cbc
- aes-192-cbc
- aes-128-cbc

Ensure that your encryption key length matches the requirements for the selected algorithm.

## Error Handling

The package includes comprehensive error handling:

- File reading/writing errors are caught and logged
- Encryption/decryption errors are properly handled
- All errors are logged with appropriate messages
- Errors are propagated to the caller for proper handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Make sure to:

1. Follow the existing code style
2. Add/update tests as needed
3. Update documentation for any new features
4. Ensure all tests pass before submitting

## License

This package is licensed under the MIT License. See the LICENSE file for details.

---

For more detailed documentation and updates, visit the project's repository.

### Key Features:

- **Type Safety**: Written in TypeScript for better development experience
- **Secure Implementation**: Uses crypto module with initialization vectors
- **Flexible**: Supports multiple encryption algorithms
- **Error Handling**: Comprehensive error management
- **Easy to Use**: Simple API for file encryption and decryption
