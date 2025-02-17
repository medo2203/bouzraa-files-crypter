import * as fs from "fs";
import * as path from "path";
import { FilesProtector } from "../src/FilesProtector";

// Helper function to generate a random file
const generateRandomFile = (filePath: string) => {
  const randomData = Buffer.from("This is some random test data.");
  fs.writeFileSync(filePath, randomData);
};

describe("FilesProtector", () => {
  // Use a 16-byte key, but expand it to 32 bytes for AES-256
  const encryptionKey = Buffer.from("000102030405060708090a0b0c0d0e0f", "hex");
  const expandedKey = Buffer.concat([encryptionKey, encryptionKey]); // Now it's 32 bytes
  const encryptionKeyStr = expandedKey.toString("hex");

  const inputFile = path.join(__dirname, "testInput.txt");
  const encryptedFile = path.join(__dirname, "testEncrypted.txt");
  const decryptedFile = path.join(__dirname, "testDecrypted.txt");

  beforeAll(() => {
    // Generate a random test file
    generateRandomFile(inputFile);
  });

  afterAll(() => {
    // Cleanup test files after tests, checking if they exist first
    if (fs.existsSync(inputFile)) {
      fs.unlinkSync(inputFile);
    }
    if (fs.existsSync(encryptedFile)) {
      fs.unlinkSync(encryptedFile);
    }
    if (fs.existsSync(decryptedFile)) {
      fs.unlinkSync(decryptedFile);
    }
  });

  test("should encrypt and decrypt a file correctly", () => {
    const fileProtector = new FilesProtector(encryptionKeyStr); // Pass the expanded key

    // Encrypt the file
    fileProtector.encryptFile(inputFile, encryptedFile);
    expect(fs.existsSync(encryptedFile)).toBe(true);

    // Decrypt the file
    fileProtector.decryptFile(encryptedFile, decryptedFile);
    expect(fs.existsSync(decryptedFile)).toBe(true);

    // Check if decrypted file content matches original content
    const originalContent = fs.readFileSync(inputFile, "utf8");
    const decryptedContent = fs.readFileSync(decryptedFile, "utf8");
    expect(decryptedContent).toBe(originalContent);
  });
});
