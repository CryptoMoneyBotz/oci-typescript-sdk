/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * A template that defines the settings to use when creating compute capacity reservations.
 *
 */
export interface ComputeCapacityReservation {
  /**
    * The availability domain of the compute capacity reservation.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment
   * containing the compute capacity reservation.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the compute capacity reservation.
   * It does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compute capacity reservation.
   */
  "id": string;
  /**
   * Whether this capacity reservation is the default.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "isDefaultReservation"?: boolean;
  /**
    * The reservation configurations for the capacity reservation.
* <p>
To use the reservation for the desired shape, specify the shape, count, and
* optionally the fault domain where you want this configuration.
* 
    */
  "instanceReservationConfigs"?: Array<model.InstanceReservationConfig>;
  /**
   * The current state of the compute capacity reservation.
   */
  "lifecycleState": ComputeCapacityReservation.LifecycleState;
  /**
   * The number of instances for which capacity will be held with this
   * compute capacity reservation. This number is the sum of the values of the `reservedCount` fields
   * for all of the instance reservation configurations under this reservation.
   * The purpose of this field is to calculate the percentage usage of the reservation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedInstanceCount"?: number;
  /**
    * The date and time the compute capacity reservation was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeUpdated"?: Date;
  /**
    * The date and time the compute capacity reservation was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The total number of instances currently consuming space in
   * this compute capacity reservation. This number is the sum of the values of the `usedCount` fields
   * for all of the instance reservation configurations under this reservation.
   * The purpose of this field is to calculate the percentage usage of the reservation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedInstanceCount"?: number;
}

export namespace ComputeCapacityReservation {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Updating = "UPDATING",
    Moving = "MOVING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ComputeCapacityReservation): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceReservationConfigs": obj.instanceReservationConfigs
          ? obj.instanceReservationConfigs.map(item => {
              return model.InstanceReservationConfig.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}