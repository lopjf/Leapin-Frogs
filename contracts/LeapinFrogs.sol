// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// add creator fees

contract LeapinFrogs is ERC721, Ownable {
	uint256 public mintPrice;
	uint256 public totalSupply;
	uint256 public maxSupply;
	uint256 public maxPerWallet;
	bool public isPublicMintEnabled;
	string internal baseTokenUri;
	address payable public withdrawWallet;
	mapping(address => uint256) public walletMints;

	constructor() payable ERC721('LeapinFrogs', 'LPF') {
		mintPrice = 20 ether;
		totalSupply = 0;
		maxSupply = 101;
		maxPerWallet = 5;
		withdrawWallet = payable(msg.sender);
	}

	function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
		isPublicMintEnabled = isPublicMintEnabled_;
	}

	function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
		baseTokenUri = baseTokenUri_;
	}

	function tokenURI(uint256 tokenId_) public view override returns (string memory) {
		require(_exists(tokenId_), 'Token does not exist!');	// Tokens start existing when they are minted (_mint), and stop existing when they are burned (_burn).
		return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_)));
	}

	function withdraw() external onlyOwner {
		(bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
		require(success, 'withdraw failed');
	}

	function mint(uint256 quantity) public payable {
		require(isPublicMintEnabled, 'minting not enabled');
		require(msg.value == quantity * mintPrice, 'wrong mint value');
		require(totalSupply + quantity <= maxSupply, 'sold out');
		require(walletMints[msg.sender] + quantity <= maxPerWallet, 'exceed max wallet');

		for (uint256 i = 0; i < quantity; i++) {
			uint256 newTokenId = totalSupply;
			totalSupply++;
			_safeMint(msg.sender, newTokenId);
		}
		walletMints[msg.sender] += quantity;
	}
}