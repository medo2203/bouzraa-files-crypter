import * as fs from "fs";
import * as CryptoJS from "crypto-js";

export class BouzraaFilesCrypter {
  private key: string;

  constructor(encryptionKey: string) {
    this.key = encryptionKey;
  }

  private encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.key).toString();
  }

  private decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  public encryptFile(inputFilePath: string, outputFilePath: string): void {
    try {
      const fileContent = fs.readFileSync(inputFilePath, "utf8");
      const encryptedContent = this.encrypt(fileContent);
      fs.writeFileSync(outputFilePath, encryptedContent);
      console.log("File encrypted successfully.");
    } catch (error) {
      console.error("Error encrypting file:", error);
      throw error;
    }
  }

  public decryptFile(inputFilePath: string, outputFilePath: string): string {
    try {
      const encryptedContent = fs.readFileSync(inputFilePath, "utf8");
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
