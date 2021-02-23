/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
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
 * Optional. The target compartments supported by a profile override for a recommendation.
 *
 */
export interface TargetCompartments {
  /**
   * The list of target compartment OCIDs attached to the current profile override.
   */
  "items": Array<string>;
}

export namespace TargetCompartments {
  export function getJsonObj(obj: TargetCompartments): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}