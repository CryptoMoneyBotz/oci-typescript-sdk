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
 * The properties that define a connection
 */
export interface Connection {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Optional description about the connection
   */
  "description"?: string;
  /**
   * Connection identifier which can be renamed and is not necessarily unique
   */
  "displayName"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Project Identifier
   */
  "projectId": string;
  /**
   * The time the Connection was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time at which the Connection was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Connection.
   */
  "lifecycleState"?: Connection.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "connectionType": string;
}

export namespace Connection {
  export enum LifecycleState {
    Active = "ACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Connection): object {
    const jsonObj = { ...obj, ...{} };

    if ("connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "GITLAB_ACCESS_TOKEN":
          return model.GitlabAccessTokenConnection.getJsonObj(
            <model.GitlabAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.GithubAccessTokenConnection.getJsonObj(
            <model.GithubAccessTokenConnection>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.connectionType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Connection): object {
    const jsonObj = { ...obj, ...{} };

    if ("connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "GITLAB_ACCESS_TOKEN":
          return model.GitlabAccessTokenConnection.getDeserializedJsonObj(
            <model.GitlabAccessTokenConnection>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.GithubAccessTokenConnection.getDeserializedJsonObj(
            <model.GithubAccessTokenConnection>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.connectionType);
      }
    }
    return jsonObj;
  }
}