module.exports = {
    testMatch: ["**/tests/*.spec.js"],
    testPathIgnorePatterns: ["/node_modules/"],
    reporters: ["default"],
    setupFiles: ["dotenv/config"],
    testEnvironment: "node"
};
