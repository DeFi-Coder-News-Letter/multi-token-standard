/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC1155OperatorMockInterface extends Interface {
  functions: {
    safeTransferFrom: TypedFunctionDescription<{
      encode([_tokenAddress, _from, _to, _id, _amount, _data]: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_tokenAddress, _from, _to, _ids, _amounts, _data]: [
        string,
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    metaSafeTransferFrom: TypedFunctionDescription<{
      encode([_tokenAddress, _from, _to, _id, _amount, _isGasFee, _data]: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSafeBatchTransferFrom: TypedFunctionDescription<{
      encode([_tokenAddress, _from, _to, _ids, _amounts, _isGasFee, _data]: [
        string,
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSetApprovalForAll: TypedFunctionDescription<{
      encode([_tokenAddress, _owner, _operator, _approved, _isGasFee, _data]: [
        string,
        string,
        string,
        boolean,
        boolean,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class ERC1155OperatorMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC1155OperatorMock;
  attach(addressOrName: string): ERC1155OperatorMock;
  deployed(): Promise<ERC1155OperatorMock>;

  on(event: EventFilter | string, listener: Listener): ERC1155OperatorMock;
  once(event: EventFilter | string, listener: Listener): ERC1155OperatorMock;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1155OperatorMock;
  removeAllListeners(eventName: EventFilter | string): ERC1155OperatorMock;
  removeListener(eventName: any, listener: Listener): ERC1155OperatorMock;

  interface: ERC1155OperatorMockInterface;

  functions: {
    safeTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeBatchTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _tokenAddress: string,
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  filters: {};

  estimate: {
    safeTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSafeTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSafeBatchTransferFrom(
      _tokenAddress: string,
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSetApprovalForAll(
      _tokenAddress: string,
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
