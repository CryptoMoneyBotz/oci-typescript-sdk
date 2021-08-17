/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Summary details for the FUSION_APP data asset type.
 */
export interface DataAssetSummaryFromFusionApp extends model.DataAssetSummary {
  /**
   * The generic JDBC host name.
   */
  "serviceUrl"?: string;
  "defaultConnection"?: model.ConnectionSummaryFromBICC;

  "modelType": string;
}

export namespace DataAssetSummaryFromFusionApp {
  export function getJsonObj(
    obj: DataAssetSummaryFromFusionApp,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAssetSummary.getJsonObj(obj) as DataAssetSummaryFromFusionApp)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionSummaryFromBICC.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "FUSION_APP_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: DataAssetSummaryFromFusionApp,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAssetSummary.getDeserializedJsonObj(obj) as DataAssetSummaryFromFusionApp)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionSummaryFromBICC.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}