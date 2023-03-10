const hre = require("hardhat");

async function main() {
  const LeapinFrogs = await hre.ethers.getContractFactory("LeapinFrogs");
  const leapinFrogs = await LeapinFrogs.deploy();

  await leapinFrogs.deployed();

  console.log(
    `LeapinFrogs deployed to ${leapinFrogs.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
