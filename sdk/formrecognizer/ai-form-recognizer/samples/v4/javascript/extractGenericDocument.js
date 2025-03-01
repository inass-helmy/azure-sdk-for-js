// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * This sample shows how to extract data from a generic document using the `beginExtractGenericDocument` method. This
 * model produces key-value pairs and entities in addition to the basic layout information.
 *
 * @summary use the prebuilt (generic) document model to extract key-value pairs and entities
 */

const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT ?? "<endpoint>";
  const credential = new AzureKeyCredential(process.env.FORM_RECOGNIZER_API_KEY ?? "<api key>");

  const client = new DocumentAnalysisClient(endpoint, credential);

  const poller = await client.beginExtractGenericDocument(
    // The form recognizer service will access the following URL to a receipt image and extract data from it
    "https://raw.githubusercontent.com/Azure/azure-sdk-for-js/main/sdk/formrecognizer/ai-form-recognizer/assets/forms/selection_mark_form.pdf"
  );

  // Generic Document extraction produces all data from the Layout operation as well as the additional key-value pairs
  // (associations between elements, such as labeled elements), and document entities.
  const { keyValuePairs, entities } = await poller.pollUntilDone();

  if (keyValuePairs.length <= 0) {
    console.log("No key-value pairs were extracted from the document.");
  } else {
    console.log("Key-Value Pairs:");
    for (const { key, value, confidence } of keyValuePairs) {
      console.log("- Key  :", `"${key.content}"`);
      console.log("  Value:", `"${value?.content ?? "<undefined>"}" (${confidence})`);
    }
  }

  if (entities.length <= 0) {
    console.log("No entities were extracted from the document.");
  } else {
    console.log("Entities:");
    for (const entity of entities) {
      console.log(
        `- "${entity.content}" ${entity.category} - ${entity.subCategory ?? "<none>"} (${
          entity.confidence
        })`
      );
    }
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
