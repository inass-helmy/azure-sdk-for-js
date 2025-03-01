## API Report File for "@azure/schema-registry"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CommonClientOptions } from '@azure/core-client';
import { OperationOptions } from '@azure/core-client';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface GetSchemaOptions extends OperationOptions {
}

// @public
export interface GetSchemaPropertiesOptions extends OperationOptions {
}

// @public
export interface RegisterSchemaOptions extends OperationOptions {
}

// @public
export interface Schema {
    definition: string;
    properties: SchemaProperties;
}

// @public
export interface SchemaDescription {
    definition: string;
    format: string;
    groupName: string;
    name: string;
}

// @public
export interface SchemaProperties {
    format: string;
    id: string;
}

// @public
export interface SchemaRegistry {
    getSchema(schemaId: string, options?: GetSchemaOptions): Promise<Schema>;
    getSchemaProperties(schema: SchemaDescription, options?: GetSchemaPropertiesOptions): Promise<SchemaProperties>;
    registerSchema(schema: SchemaDescription, options?: RegisterSchemaOptions): Promise<SchemaProperties>;
}

// @public
export class SchemaRegistryClient implements SchemaRegistry {
    constructor(fullyQualifiedNamespace: string, credential: TokenCredential, options?: SchemaRegistryClientOptions);
    readonly fullyQualifiedNamespace: string;
    getSchema(schemaId: string, options?: GetSchemaOptions): Promise<Schema>;
    getSchemaProperties(schema: SchemaDescription, options?: GetSchemaPropertiesOptions): Promise<SchemaProperties>;
    registerSchema(schema: SchemaDescription, options?: RegisterSchemaOptions): Promise<SchemaProperties>;
}

// @public
export interface SchemaRegistryClientOptions extends CommonClientOptions {
    apiVersion?: string;
}

// (No @packageDocumentation comment for this package)

```
