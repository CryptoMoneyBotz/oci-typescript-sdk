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
 * The information about the OCI Dataflow task.
 */
export interface TaskFromOCIDataflowTaskDetails extends model.Task {
  "dataflowApplication"?: model.DataflowApplication;

  "modelType": string;
}

export namespace TaskFromOCIDataflowTaskDetails {
  export function getJsonObj(
    obj: TaskFromOCIDataflowTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Task.getJsonObj(obj) as TaskFromOCIDataflowTaskDetails)),
      ...{
        "dataflowApplication": obj.dataflowApplication
          ? model.DataflowApplication.getJsonObj(obj.dataflowApplication)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "OCI_DATAFLOW_TASK";
  export function getDeserializedJsonObj(
    obj: TaskFromOCIDataflowTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Task.getDeserializedJsonObj(obj) as TaskFromOCIDataflowTaskDetails)),
      ...{
        "dataflowApplication": obj.dataflowApplication
          ? model.DataflowApplication.getDeserializedJsonObj(obj.dataflowApplication)
          : undefined
      }
    };

    return jsonObj;
  }
}
