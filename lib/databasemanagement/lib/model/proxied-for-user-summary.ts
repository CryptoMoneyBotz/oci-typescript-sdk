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
 * A collection of Users for which the current user acts as proxy.
 */
export interface ProxiedForUserSummary {
  /**
   * The name of a proxy user or name of the user who the proxy user can act as
   */
  "name"?: string;
  /**
   * Indicates whether the proxy is required to supply the client credentials (YES) or not (NO)
   */
  "authentication"?: ProxiedForUserSummary.Authentication;
  /**
   * Flags associated with the proxy/client pair
   */
  "flags"?: ProxiedForUserSummary.Flags;
}

export namespace ProxiedForUserSummary {
  export enum Authentication {
    Yes = "YES",
    No = "NO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Flags {
    ProxyMayActivateAllClientRoles = "PROXY_MAY_ACTIVATE_ALL_CLIENT_ROLES",
    NoClientRolesMayBeActivated = "NO_CLIENT_ROLES_MAY_BE_ACTIVATED",
    ProxyMayActivateRole = "PROXY_MAY_ACTIVATE_ROLE",
    ProxyMayNotActivateRole = "PROXY_MAY_NOT_ACTIVATE_ROLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ProxiedForUserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProxiedForUserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}