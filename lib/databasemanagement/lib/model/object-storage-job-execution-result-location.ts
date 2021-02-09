/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details about Object Storage job execution result location type.
 */
export interface ObjectStorageJobExecutionResultLocation extends model.JobExecutionResultLocation {
  /**
   * The Object Storage namespace used for job execution result storage.
   */
  "namespaceName"?: string;
  /**
   * The name of the bucket used for job execution result storage.
   */
  "bucketName"?: string;

  "type": string;
}

export namespace ObjectStorageJobExecutionResultLocation {
  export function getJsonObj(
    obj: ObjectStorageJobExecutionResultLocation,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobExecutionResultLocation.getJsonObj(
            obj
          ) as ObjectStorageJobExecutionResultLocation)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OBJECT_STORAGE";
}
