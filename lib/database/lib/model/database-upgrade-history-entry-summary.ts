/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The Database service supports the upgrade history of databases.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about access control and compartments, see
* [Overview of the Identity Service](https://docs.cloud.oracle.com/Content/Identity/Concepts/overview.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface DatabaseUpgradeHistoryEntrySummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database upgrade history.
   */
  "id": string;
  /**
   * The database upgrade action.
   */
  "action": DatabaseUpgradeHistoryEntrySummary.Action;
  /**
   * The source of the Oracle Database software to be used for the upgrade.
   *  - Use `DB_HOME` to specify an existing Database Home to upgrade the database. The database is moved to the target Database Home and makes use of the Oracle Database software version of the target Database Home.
   *  - Use `DB_VERSION` to specify a generally-available Oracle Database software version to upgrade the database.
   *  - Use `DB_SOFTWARE_IMAGE` to specify a [database software image](https://docs.cloud.oracle.com/iaas/Content/Database/Concepts/databasesoftwareimage.htm) to upgrade the database.
   *
   */
  "source"?: DatabaseUpgradeHistoryEntrySummary.Source;
  /**
   * Status of database upgrade history SUCCEEDED|IN_PROGRESS|FAILED.
   */
  "lifecycleState": DatabaseUpgradeHistoryEntrySummary.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * A valid Oracle Database version. To get a list of supported versions, use the {@link #listDbVersions(ListDbVersionsRequest) listDbVersions} operation.
   */
  "targetDBVersion"?: string;
  /**
   * the database software image used for upgrading database.
   */
  "targetDatabaseSoftwareImageId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Home.
   */
  "targetDbHomeId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Home.
   */
  "sourceDbHomeId"?: string;
  /**
   * The date and time when the database upgrade started.
   */
  "timeStarted": Date;
  /**
   * The date and time when the database upgrade ended.
   */
  "timeEnded"?: Date;
}

export namespace DatabaseUpgradeHistoryEntrySummary {
  export enum Action {
    Precheck = "PRECHECK",
    Upgrade = "UPGRADE",
    Rollback = "ROLLBACK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Source {
    DbHome = "DB_HOME",
    DbVersion = "DB_VERSION",
    DbSoftwareImage = "DB_SOFTWARE_IMAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DatabaseUpgradeHistoryEntrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
