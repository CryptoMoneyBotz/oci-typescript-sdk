/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * A summary of a HeatWave cluster.
 *
 */
export interface HeatWaveClusterSummary {
  /**
   * The shape determines resources to allocate to the HeatWave
   * nodes - CPU cores, memory.
   *
   */
  "shapeName": string;
  /**
   * The number of analytics-processing compute instances, of the
   * specified shape, in the HeatWave cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clusterSize": number;
  /**
   * The current state of the MySQL HeatWave cluster.
   */
  "lifecycleState": string;
  /**
   * The date and time the HeatWave cluster was created,
   * as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The time the HeatWave cluster was last updated,
   * as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeUpdated": Date;
}

export namespace HeatWaveClusterSummary {
  export function getJsonObj(obj: HeatWaveClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}