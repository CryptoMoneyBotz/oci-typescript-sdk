/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmsynthetics/ListPublicVantagePoints.ts.html |here} to see how to use ListPublicVantagePointsRequest.
 */
export interface ListPublicVantagePointsRequest extends common.BaseRequest {
  /**
   * The APM domain ID the request is intended for.
   *
   */
  "apmDomainId": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). Default sort order is ascending.
   *
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. You can provide one sort by (`sortBy`). Default order for displayName or name is ascending. The displayName or name
   * sort by is case insensitive.
   *
   */
  "sortBy"?: ListPublicVantagePointsRequest.SortBy;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match the entire name given.
   */
  "name"?: string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListPublicVantagePointsRequest {
  export enum SortBy {
    Name = "name",
    DisplayName = "displayName"
  }
}