const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Leapin' Frogs Tests", function () {
		let leapinFrogs;
		let owner, account1, account2, account3, account4, account5, account6, account7, account8, account9, account10, account11, account12, account13, account14, account15, account16, account17, account18;
		const baseURI = "ipfs://bafybeifaqcg4ckt5q4pgjfvw3vhfhoxzflaglc4r7atndr6i5kg45byadq/";

		beforeEach("deploy the contract instance", async function () {

			[owner, account1, account2, account3, account4, account5, account6, account7, account8, account9, account10, account11, account12, account13, account14, account15, account16, account17, account18] = await ethers.getSigners();
			
			const LeapinFrogs = await hre.ethers.getContractFactory("LeapinFrogs");
			leapinFrogs = await LeapinFrogs.deploy();

			await leapinFrogs.deployed();

			await leapinFrogs.connect(owner).setBaseTokenUri(baseURI);
			await leapinFrogs.connect(owner).setIsPublicMintEnabled(true);
		});


// testing architecture
// 1. Minting
	// A wallet can mint from 1 to 5 NFTs, no more
	// A wallet can mint 5 NFTs max in total
	// max supply 101, can't mint after that
// 2. Withdraw
	// Only the owner can withdraw
	// all funds are sent to owner

	describe("Minting", function () {
		it("A wallet can mint from 1 to 5 NFTs at once, no more", async function () {
			await leapinFrogs.connect(account1).mint(1,{
				value: ethers.utils.parseUnits("20", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 1)
			await leapinFrogs.connect(account2).mint(2,{
				value: ethers.utils.parseUnits("40", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 3)
			await leapinFrogs.connect(account3).mint(3,{
				value: ethers.utils.parseUnits("60", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 6)
			await leapinFrogs.connect(account4).mint(4,{
				value: ethers.utils.parseUnits("80", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 10)
			await leapinFrogs.connect(account5).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 15)
			await expect(leapinFrogs.connect(account6).mint(6,{
				value: ethers.utils.parseUnits("120", "ether"),
			})).to.be.reverted;
			assert.equal(await leapinFrogs.totalSupply(), 15)
		});
		it("A wallet can mint up to 5 NFTs max in total", async function () {
			await leapinFrogs.connect(account1).mint(1,{
				value: ethers.utils.parseUnits("20", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 1)
			await leapinFrogs.connect(account1).mint(2,{
				value: ethers.utils.parseUnits("40", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 3)
			await expect(leapinFrogs.connect(account1).mint(3,{
				value: ethers.utils.parseUnits("60", "ether"),
			})).to.be.reverted;
			assert.equal(await leapinFrogs.totalSupply(), 3)
			assert.equal(await leapinFrogs.walletMints(account1.address), 3)
			assert.equal(await leapinFrogs.balanceOf(account1.address), 3)
		});

// Since can't test with more than 20 accounts. need to reduce the maxSupply to 91 to test this one. Uncomment the end of this block to test it once 91 is set.
		it("Can't mint after maxSupply is reached", async function () {
			await leapinFrogs.connect(account1).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account2).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account3).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account4).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account5).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account6).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account7).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account8).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account9).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account10).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account11).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account12).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account13).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account14).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account15).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account16).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(account17).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});

			await leapinFrogs.connect(account18).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await leapinFrogs.connect(owner).mint(1,{
				value: ethers.utils.parseUnits("20", "ether"),
			});
			assert.equal(await leapinFrogs.totalSupply(), 91)
			// await expect(leapinFrogs.connect(owner).mint(1,{
			// 	value: ethers.utils.parseUnits("20", "ether"),
			// })).to.be.reverted;
			// assert.equal(await leapinFrogs.totalSupply(), 91)
		});
	});
	describe("Withdraw", function () {
		it("Only the owner can withdraw & all funds are sent to owner", async function () {
			const target = ethers.utils.parseEther("1");
			await leapinFrogs.connect(account1).mint(5,{
				value: ethers.utils.parseUnits("100", "ether"),
			});
			await expect(leapinFrogs.connect(account1).withdraw()).to.be.reverted;
			// get the balance of the owner before withdrawing funds
			const balanceBefore = await ethers.provider.getBalance(owner.address);
			// expect(await leapinFrogs.balanceOf(account1.address)).to.equal(0);
			await leapinFrogs.connect(owner).withdraw();
			// get the balance of the owner after withdrawing funds
			const balanceAfter = await ethers.provider.getBalance(owner.address);
			expect(balanceAfter).to.be.above(balanceBefore);
			// console.log(balanceBefore);
			// console.log(balanceAfter);
		});
	});
});
