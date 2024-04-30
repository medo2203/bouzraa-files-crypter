// DECRYPT FUNCTION
const decrypt = (encryptedBuffer) => {
  // GET THE IV : THE FIRST 16 BYTES
  const iv = encryptedBuffer.slice(0, 16);
  // GET THE REST
  const encryptedData = encryptedBuffer.slice(16);
  // CREATE DECIPHER
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  // DECRYPT IT
  const decryptedBuffer = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final(),
  ]);
  return decryptedBuffer;
};

// Function to decrypt a file
const decryptFile = (inputFilePath, outputFilePath) => {
  try {
    const encryptedContent = fs.readFileSync(inputFilePath);
    const decryptedContent = decrypt(encryptedContent);
    fs.writeFileSync(outputFilePath, decryptedContent);
    console.log("File decrypted successfully.");
  } catch (error) {
    console.error("Error decrypting file:", error);
  }
};

module.exports = decryptFile;
