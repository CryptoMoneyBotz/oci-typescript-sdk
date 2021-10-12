/**
 * DlsDataPlane API
 * A description of the DlsDataPlane API.
 * OpenAPI spec version: 20211001
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
 * A NormalizedVertex is a cartesian coordinate that represents a corner between two segments of a polygon.
 */
export interface NormalizedVertex {
  /**
   * X axis coordinate Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "x": number;
  /**
   * Y axis coordinate Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "y": number;
}

export namespace NormalizedVertex {
  export function getJsonObj(obj: NormalizedVertex): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NormalizedVertex): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}