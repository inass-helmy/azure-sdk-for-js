/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BatchAccountOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  BatchAccount,
  BatchAccountListNextOptionalParams,
  BatchAccountListOptionalParams,
  BatchAccountListByResourceGroupNextOptionalParams,
  BatchAccountListByResourceGroupOptionalParams,
  OutboundEnvironmentEndpoint,
  BatchAccountListOutboundNetworkDependenciesEndpointsNextOptionalParams,
  BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams,
  BatchAccountCreateParameters,
  BatchAccountCreateOptionalParams,
  BatchAccountCreateResponse,
  BatchAccountUpdateParameters,
  BatchAccountUpdateOptionalParams,
  BatchAccountUpdateResponse,
  BatchAccountDeleteOptionalParams,
  BatchAccountGetOptionalParams,
  BatchAccountGetResponse,
  BatchAccountListResponse,
  BatchAccountListByResourceGroupResponse,
  BatchAccountSynchronizeAutoStorageKeysOptionalParams,
  BatchAccountRegenerateKeyParameters,
  BatchAccountRegenerateKeyOptionalParams,
  BatchAccountRegenerateKeyResponse,
  BatchAccountGetKeysOptionalParams,
  BatchAccountGetKeysResponse,
  BatchAccountListOutboundNetworkDependenciesEndpointsResponse,
  BatchAccountListNextResponse,
  BatchAccountListByResourceGroupNextResponse,
  BatchAccountListOutboundNetworkDependenciesEndpointsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BatchAccountOperations operations. */
export class BatchAccountOperationsImpl implements BatchAccountOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Initialize a new instance of the class BatchAccountOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets information about the Batch accounts associated with the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: BatchAccountListOptionalParams
  ): PagedAsyncIterableIterator<BatchAccount> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: BatchAccountListOptionalParams
  ): AsyncIterableIterator<BatchAccount[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: BatchAccountListOptionalParams
  ): AsyncIterableIterator<BatchAccount> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets information about the Batch accounts associated with the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: BatchAccountListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<BatchAccount> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: BatchAccountListByResourceGroupOptionalParams
  ): AsyncIterableIterator<BatchAccount[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: BatchAccountListByResourceGroupOptionalParams
  ): AsyncIterableIterator<BatchAccount> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the endpoints that a Batch Compute Node under this Batch Account may call as part of Batch
   * service administration. If you are deploying a Pool inside of a virtual network that you specify,
   * you must make sure your network allows outbound access to these endpoints. Failure to allow access
   * to these endpoints may cause Batch to mark the affected nodes as unusable. For more information
   * about creating a pool inside of a virtual network, see
   * https://docs.microsoft.com/en-us/azure/batch/batch-virtual-network.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  public listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
    const iter = this.listOutboundNetworkDependenciesEndpointsPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOutboundNetworkDependenciesEndpointsPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint[]> {
    let result = await this._listOutboundNetworkDependenciesEndpoints(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOutboundNetworkDependenciesEndpointsNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint> {
    for await (const page of this.listOutboundNetworkDependenciesEndpointsPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with
   * this API and should instead be updated with the Update Batch Account API.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName A name for the Batch account which must be unique within the region. Batch
   *                    account names must be between 3 and 24 characters in length and must use only numbers and lowercase
   *                    letters. This name is used as part of the DNS name that is used to access the Batch service in the
   *                    region in which the account is created. For example: http://accountname.region.batch.azure.com/.
   * @param parameters Additional parameters for account creation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountCreateParameters,
    options?: BatchAccountCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BatchAccountCreateResponse>,
      BatchAccountCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BatchAccountCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, parameters, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with
   * this API and should instead be updated with the Update Batch Account API.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName A name for the Batch account which must be unique within the region. Batch
   *                    account names must be between 3 and 24 characters in length and must use only numbers and lowercase
   *                    letters. This name is used as part of the DNS name that is used to access the Batch service in the
   *                    region in which the account is created. For example: http://accountname.region.batch.azure.com/.
   * @param parameters Additional parameters for account creation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountCreateParameters,
    options?: BatchAccountCreateOptionalParams
  ): Promise<BatchAccountCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      accountName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the properties of an existing Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters Additional parameters for account update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountUpdateParameters,
    options?: BatchAccountUpdateOptionalParams
  ): Promise<BatchAccountUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Deletes the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified Batch account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountGetOptionalParams
  ): Promise<BatchAccountGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getOperationSpec
    );
  }

  /**
   * Gets information about the Batch accounts associated with the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: BatchAccountListOptionalParams
  ): Promise<BatchAccountListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets information about the Batch accounts associated with the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: BatchAccountListByResourceGroupOptionalParams
  ): Promise<BatchAccountListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Synchronizes access keys for the auto-storage account configured for the specified Batch account,
   * only if storage key authentication is being used.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  synchronizeAutoStorageKeys(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountSynchronizeAutoStorageKeysOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      synchronizeAutoStorageKeysOperationSpec
    );
  }

  /**
   * This operation applies only to Batch accounts with allowedAuthenticationModes containing
   * 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode,
   * clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes
   * instead. In this case, regenerating the keys will fail.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param parameters The type of key to regenerate.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    accountName: string,
    parameters: BatchAccountRegenerateKeyParameters,
    options?: BatchAccountRegenerateKeyOptionalParams
  ): Promise<BatchAccountRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, parameters, options },
      regenerateKeyOperationSpec
    );
  }

  /**
   * This operation applies only to Batch accounts with allowedAuthenticationModes containing
   * 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode,
   * clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes
   * instead. In this case, getting the keys will fail.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  getKeys(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountGetKeysOptionalParams
  ): Promise<BatchAccountGetKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getKeysOperationSpec
    );
  }

  /**
   * Lists the endpoints that a Batch Compute Node under this Batch Account may call as part of Batch
   * service administration. If you are deploying a Pool inside of a virtual network that you specify,
   * you must make sure your network allows outbound access to these endpoints. Failure to allow access
   * to these endpoints may cause Batch to mark the affected nodes as unusable. For more information
   * about creating a pool inside of a virtual network, see
   * https://docs.microsoft.com/en-us/azure/batch/batch-virtual-network.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    accountName: string,
    options?: BatchAccountListOutboundNetworkDependenciesEndpointsOptionalParams
  ): Promise<BatchAccountListOutboundNetworkDependenciesEndpointsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOutboundNetworkDependenciesEndpointsOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: BatchAccountListNextOptionalParams
  ): Promise<BatchAccountListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: BatchAccountListByResourceGroupNextOptionalParams
  ): Promise<BatchAccountListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListOutboundNetworkDependenciesEndpointsNext
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListOutboundNetworkDependenciesEndpoints method.
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpointsNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: BatchAccountListOutboundNetworkDependenciesEndpointsNextOptionalParams
  ): Promise<BatchAccountListOutboundNetworkDependenciesEndpointsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listOutboundNetworkDependenciesEndpointsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccount
    },
    201: {
      bodyMapper: Mappers.BatchAccount
    },
    202: {
      bodyMapper: Mappers.BatchAccount
    },
    204: {
      bodyMapper: Mappers.BatchAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/batchAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const synchronizeAutoStorageKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/syncAutoStorageKeys",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/regenerateKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOutboundNetworkDependenciesEndpointsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/outboundNetworkDependenciesEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutboundEnvironmentEndpointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOutboundNetworkDependenciesEndpointsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutboundEnvironmentEndpointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
