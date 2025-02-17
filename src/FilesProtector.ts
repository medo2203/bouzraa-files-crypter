import * as fs from "fs";
import * as crypto from "crypto";

export class FilesProtector {
  private key: Buffer;
  private algorithm: string;

  /**
   * Creates an instance of FilesProtector.
   * @param encryptionKey - The encryption key in hexadecimal format.
   * @param algorithm - The algorithm to use for encryption (default is "aes-256-ctr").
   */
  constructor(encryptionKey: string, algorithm: string = "aes-256-ctr") {
    this.key = Buffer.from(encryptionKey, "hex");
    this.algorithm = algorithm;
  }

  /**
   * Encrypts the provided buffer.
   * @param buffer - The buffer to encrypt.
   * @returns The encrypted buffer.
   */
  private encrypt(buffer: Buffer): Buffer {
    const iv = crypto.randomBytes(16); // Create an initialization vector
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv); // Create cipher
    const encryptedBuffer = Buffer.concat([
      iv,
      cipher.update(buffer),
      cipher.final(),
    ]); // Encrypt
    return encryptedBuffer;
  }

  /**
   * Decrypts the provided encrypted buffer.
   * @param encryptedBuffer - The encrypted buffer.
   * @returns The decrypted buffer.
   */
  private decrypt(encryptedBuffer: Buffer): Buffer {
    const iv = encryptedBuffer.slice(0, 16); // Extract IV from the first 16 bytes
    const encryptedData = encryptedBuffer.slice(16); // Get the remaining encrypted data
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv); // Create decipher
    const decryptedBuffer = Buffer.concat([
      decipher.update(encryptedData),
      decipher.final(),
    ]); // Decrypt
    return decryptedBuffer;
  }

  /**
   * Encrypts the content of a file and saves it to another file.
   * @param inputFilePath - The path of the file to encrypt.
   * @param outputFilePath - The path to save the encrypted file.
   */
  public encryptFile(inputFilePath: string, outputFilePath: string): void {
    try {
      const fileContent = fs.readFileSync(inputFilePath);
      const encryptedContent = this.encrypt(fileContent);
      fs.writeFileSync(outputFilePath, encryptedContent);
      console.log("File encrypted successfully.");
    } catch (error) {
      console.error("Error encrypting file:", error);
      throw error;
    }
  }

  /**
   * Decrypts the content of a file and saves it to another file.
   * @param inputFilePath - The path of the file to decrypt.
   * @param outputFilePath - The path to save the decrypted file.
   * @returns The path of the decrypted file.
   */
  public decryptFile(inputFilePath: string, outputFilePath: string): string {
    try {
      const encryptedContent = fs.readFileSync(inputFilePath);
      const decryptedContent = this.decrypt(encryptedContent);
      fs.writeFileSync(outputFilePath, decryptedContent);
      console.log("File decrypted successfully.");
      return outputFilePath;
    } catch (error) {
      console.error("Error decrypting file:", error);
      throw error;
    }
  }
}
