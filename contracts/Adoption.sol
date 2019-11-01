pragma solidity ^0.5.0;

import "./ERC721.sol";

contract Adoption is ERC721 {
	address public owner;
	address payable petshop = address(0x790BAA46ab9a45352683fa8d8C06377863F8E8C2);
	address[16] public adopters;
	struct Reserve {
		address payable owner;
		address customer;
		uint256 value;
		uint256 price;
		bool isSigned;
	}
	mapping(uint256 => Reserve) petInfo;

	constructor() public {
		owner = msg.sender;
		for (uint256 i = 0; i < 16; i++) {
			mint(petshop, i);
			// Reserve(owner, customer, value, price, isSigned)
			// 10000000000000000 = 0.01 ETH
			petInfo[i] = Reserve(petshop, address(0), 0, 10000000000000000, false);
		}
	}

	function getPetPrice(uint256 _petId) public view returns(uint256) {
		return petInfo[_petId].price;
	}

	// holder가 하는거
	function payAdoptFee(uint256 _petId) public payable {
		require (msg.sender.balance > petInfo[_petId].price, 'sender needs more balance');
		require (petInfo[_petId].customer == address(0) || petInfo[_petId].customer == msg.sender, 'already reserved this pet');
		// customer = holder
		// coin: customer -> contract
		petInfo[_petId].customer = msg.sender;
		petInfo[_petId].value += msg.value;
	}

	// petshop이 하는거
	function adopt(uint256 _petId) public {
		require (msg.sender == petInfo[_petId].owner, 'the sender is not owner');
		require (petInfo[_petId].isSigned == false, 'already signed this pet');
		// owner do sign
		petInfo[_petId].isSigned = true;
	}

	function processAdoption(uint256 _petId, address payable holder) public {
		require (petInfo[_petId].isSigned == true && petInfo[_petId].customer != address(0), 'requirements for multisig');
		require (petInfo[_petId].value >= petInfo[_petId].price, 'sender needs more value');
		require (msg.sender == petInfo[_petId].owner, 'the sender is not owner');
		
		// coin: contract -> owner
		petInfo[_petId].owner.transfer(petInfo[_petId].value);
		// pet ownership: owner -> customer
		safeTransferFrom(petInfo[_petId].owner, holder, _petId);

		// Reserve(owner, customer, value, price, isSigned)
		petInfo[_petId] = Reserve(holder, address(0), 0, 10000000000000000, false);
	}

	function adopt(address _from, address _to, uint256 _petId) public returns (uint256) {
		safeTransferFrom(_from, _to, _petId);
		return _petId;
	}

	function getAdopter(uint256 _petId) public view returns (address) {
		return ownerOf(_petId);
	}

}
