/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CheckNameAvailabilityParameters as CheckNameAvailabilityParametersMapper,
  RedisCreateParameters as RedisCreateParametersMapper,
  RedisUpdateParameters as RedisUpdateParametersMapper,
  RedisRegenerateKeyParameters as RedisRegenerateKeyParametersMapper,
  RedisRebootParameters as RedisRebootParametersMapper,
  ImportRDBParameters as ImportRDBParametersMapper,
  ExportRDBParameters as ExportRDBParametersMapper,
  RedisFirewallRule as RedisFirewallRuleMapper,
  RedisPatchSchedule as RedisPatchScheduleMapper,
  RedisLinkedServerCreateParameters as RedisLinkedServerCreateParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-12-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckNameAvailabilityParametersMapper
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const history: OperationQueryParameter = {
  parameterPath: "history",
  mapper: {
    serializedName: "history",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisCreateParametersMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisUpdateParametersMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisRegenerateKeyParametersMapper
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisRebootParametersMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImportRDBParametersMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExportRDBParametersMapper
};

export const cacheName: OperationURLParameter = {
  parameterPath: "cacheName",
  mapper: {
    serializedName: "cacheName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisFirewallRuleMapper
};

export const ruleName: OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    serializedName: "ruleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisPatchScheduleMapper
};

export const defaultParam: OperationURLParameter = {
  parameterPath: "defaultParam",
  mapper: {
    serializedName: "default",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: RedisLinkedServerCreateParametersMapper
};

export const linkedServerName: OperationURLParameter = {
  parameterPath: "linkedServerName",
  mapper: {
    serializedName: "linkedServerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper
};
