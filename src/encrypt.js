// ENCRYPT FUNCTION
const encrypt = (buffer) => {
  // CREATE AN INITIALIZATION VECTOR
  const iv = crypto.randomBytes(16);
  // CREATE A NEW CIPHER USING THE ALGORITHM, KEY, IV
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  // CREATE THE NEW ENCRYPTED BUFFER
  const encryptedBuffer = Buffer.concat([
    iv,
    cipher.update(buffer),
    cipher.final(),
  ]);
  return encryptedBuffer;
};

// Function to encrypt a file
const encryptFile = (inputFilePath, outputFilePath) => {
  try {
    const fileContent = fs.readFileSync(inputFilePath);
    const encryptedContent = encrypt(fileContent);
    fs.writeFileSync(outputFilePath, encryptedContent);
    console.log("File encrypted successfully.");
  } catch (error) {
    console.error("Error encrypting file:", error);
  }
};

module.exports = encryptFile;
