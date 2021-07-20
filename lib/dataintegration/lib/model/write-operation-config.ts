/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the write operation.
 */
export interface WriteOperationConfig extends model.AbstractDataOperationConfig {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * An array of operations.
   */
  "operations"?: Array<model.PushDownOperation>;
  "dataFormat"?: model.DataFormat;
  "partitionConfig"?: model.KeyRangePartitionConfig;
  "writeAttribute"?:
    | model.OracleAdwcWriteAttribute
    | model.OracleAtpWriteAttributes
    | model.OracleWriteAttribute
    | model.OracleWriteAttributes
    | model.OracleAtpWriteAttribute
    | model.ObjectStorageWriteAttribute
    | model.OracleAdwcWriteAttributes
    | model.ObjectStorageWriteAttributes;
  /**
   * The mode for the write operation.
   */
  "writeMode"?: WriteOperationConfig.WriteMode;
  "mergeKey"?: model.PrimaryKey;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;

  "modelType": string;
}

export namespace WriteOperationConfig {
  export enum WriteMode {
    Overwrite = "OVERWRITE",
    Append = "APPEND",
    Merge = "MERGE",
    Ignore = "IGNORE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WriteOperationConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractDataOperationConfig.getJsonObj(obj) as WriteOperationConfig)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.PushDownOperation.getJsonObj(item);
            })
          : undefined,
        "dataFormat": obj.dataFormat ? model.DataFormat.getJsonObj(obj.dataFormat) : undefined,
        "partitionConfig": obj.partitionConfig
          ? model.PartitionConfig.getJsonObj(obj.partitionConfig)
          : undefined,
        "writeAttribute": obj.writeAttribute
          ? model.AbstractWriteAttribute.getJsonObj(obj.writeAttribute)
          : undefined,

        "mergeKey": obj.mergeKey ? model.UniqueKey.getJsonObj(obj.mergeKey) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "WRITE_OPERATION_CONFIG";
  export function getDeserializedJsonObj(
    obj: WriteOperationConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractDataOperationConfig.getDeserializedJsonObj(obj) as WriteOperationConfig)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.PushDownOperation.getDeserializedJsonObj(item);
            })
          : undefined,
        "dataFormat": obj.dataFormat
          ? model.DataFormat.getDeserializedJsonObj(obj.dataFormat)
          : undefined,
        "partitionConfig": obj.partitionConfig
          ? model.PartitionConfig.getDeserializedJsonObj(obj.partitionConfig)
          : undefined,
        "writeAttribute": obj.writeAttribute
          ? model.AbstractWriteAttribute.getDeserializedJsonObj(obj.writeAttribute)
          : undefined,

        "mergeKey": obj.mergeKey ? model.UniqueKey.getDeserializedJsonObj(obj.mergeKey) : undefined
      }
    };

    return jsonObj;
  }
}
