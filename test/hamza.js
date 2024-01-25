const hamza = artifacts.require("hamza");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("hamza", function (/* accounts */) {
  it("should assert true", async function () {
    await hamza.deployed();
    return assert.isTrue(true);
  });
});
