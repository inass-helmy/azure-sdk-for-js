/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  IotHubResourceImpl,
  ResourceProviderCommonImpl,
  CertificatesImpl,
  IotHubImpl,
  PrivateLinkResourcesOperationsImpl,
  PrivateEndpointConnectionsImpl
} from "./operations";
import {
  Operations,
  IotHubResource,
  ResourceProviderCommon,
  Certificates,
  IotHub,
  PrivateLinkResourcesOperations,
  PrivateEndpointConnections
} from "./operationsInterfaces";
import { IotHubClientOptionalParams } from "./models";

export class IotHubClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the IotHubClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: IotHubClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: IotHubClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-iothub/6.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-07-01";
    this.operations = new OperationsImpl(this);
    this.iotHubResource = new IotHubResourceImpl(this);
    this.resourceProviderCommon = new ResourceProviderCommonImpl(this);
    this.certificates = new CertificatesImpl(this);
    this.iotHub = new IotHubImpl(this);
    this.privateLinkResourcesOperations = new PrivateLinkResourcesOperationsImpl(
      this
    );
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
  }

  operations: Operations;
  iotHubResource: IotHubResource;
  resourceProviderCommon: ResourceProviderCommon;
  certificates: Certificates;
  iotHub: IotHub;
  privateLinkResourcesOperations: PrivateLinkResourcesOperations;
  privateEndpointConnections: PrivateEndpointConnections;
}
