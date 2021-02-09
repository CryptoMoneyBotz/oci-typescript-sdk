/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of a recommendation.
 *
 */
export interface RecommendationDetails {
  /**
   * Unique identifier of the recommendation.
   */
  "recommendationKey": string;
  /**
   * Type of recommendation.
   */
  "recommendationType": model.RecommendationType;
  /**
   * Status of a recommendation.
   */
  "recommendationStatus": model.RecommendationStatus;
  /**
   * Level of confidence, on a scale between 0 and 1, that the recommendation is applicable.
   */
  "confidenceScore"?: number;
  /**
   * Unique identifier of the source object; the one for which a recommendation is made.
   */
  "sourceObjectKey"?: string;
  /**
   * Name of the source object; the one for which a recommendation is made.
   */
  "sourceObjectName"?: string;
  /**
   * Type of the source object; the one for which a recommendation is made.
   */
  "sourceObjectType"?: model.RecommendationResourceType;
  /**
   * Unique identifier of the target object; the one which has been recommended.
   */
  "targetObjectKey"?: string;
  /**
   * Name of the target object; the one which has been recommended.
   */
  "targetObjectName"?: string;
  /**
   * Type of the target object; the one which has been recommended.
   */
  "targetObjectType"?: model.RecommendationResourceType;
  /**
   * A map of maps that contains additional properties which are specific to the associated objects.
   * Each associated object defines it's set of required and optional properties.
   * Example: `{
   *             \"DataEntity\": {
   *               \"parentId\": \"entityId\"
   *             },
   *             \"Term\": {
   *               \"parentId\": \"glossaryId\"
   *             }
   *           }`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace RecommendationDetails {
  export function getJsonObj(obj: RecommendationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
