/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Information about a RoverWorkload.
 */
export interface RoverWorkload {
  /**
   * Name of the Rover Workload
   */
  "name"?: string;
  /**
   * The OCID of the compartment containing the workload.
   */
  "compartmentId": string;
  /**
   * The Unique Oracle ID (OCID) that is immutable on creation.
   */
  "id": string;
  /**
   * Size of the workload.
   */
  "size"?: string;
  /**
   * Number of objects in a workload.
   */
  "objectCount"?: string;
  /**
   * Prefix to filter objects in case it is a bucket.
   */
  "prefix"?: string;
  /**
   * Start of the range in a bucket.
   */
  "rangeStart"?: string;
  /**
   * End of the range in a bucket.
   */
  "rangeEnd"?: string;
  /**
   * The type of workload
   */
  "workloadType": string;
  /**
   * The compute work request id to track progress of custom image exports.
   */
  "workRequestId"?: string;
}

export namespace RoverWorkload {
  export function getJsonObj(obj: RoverWorkload): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}