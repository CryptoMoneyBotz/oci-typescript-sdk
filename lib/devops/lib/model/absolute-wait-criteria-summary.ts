/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Specifies the absolute wait criteria, user can specify fixed length of wait duration.
 */
export interface AbsoluteWaitCriteriaSummary extends model.WaitCriteriaSummary {
  /**
   * The absolute wait duration. Minimum wait duration must be 5 seconds. Maximum wait duration can be up to 2 days.
   */
  "waitDuration"?: string;

  "waitType": string;
}

export namespace AbsoluteWaitCriteriaSummary {
  export function getJsonObj(obj: AbsoluteWaitCriteriaSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WaitCriteriaSummary.getJsonObj(obj) as AbsoluteWaitCriteriaSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const waitType = "ABSOLUTE_WAIT";
  export function getDeserializedJsonObj(
    obj: AbsoluteWaitCriteriaSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WaitCriteriaSummary.getDeserializedJsonObj(obj) as AbsoluteWaitCriteriaSummary)),
      ...{}
    };

    return jsonObj;
  }
}