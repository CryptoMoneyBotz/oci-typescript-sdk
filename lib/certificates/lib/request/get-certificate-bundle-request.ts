/**
 *
 *
 * OpenAPI spec version: 20210224
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/GetCertificateBundle.ts.html |here} to see how to use GetCertificateBundleRequest.
 */
export interface GetCertificateBundleRequest extends common.BaseRequest {
  /**
   * The OCID of the certificate.
   */
  "certificateId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The version number of the certificate. The default value is 0, which means that this query parameter is ignored.
   */
  "versionNumber"?: number;
  /**
   * The name of the certificate. (This might be referred to as the name of the certificate version, as every certificate consists of at least one version.) Names are unique across versions of a given certificate.
   *
   */
  "certificateVersionName"?: string;
  /**
   * The rotation state of the certificate version.
   */
  "stage"?: GetCertificateBundleRequest.Stage;
  /**
   * The type of certificate bundle. By default, the private key fields are not returned. When querying for certificate bundles, to return results with certificate contents, the private key in PEM format, and the private key passphrase, specify the value of this parameter as `CERTIFICATE_CONTENT_WITH_PRIVATE_KEY`.
   *
   */
  "certificateBundleType"?: GetCertificateBundleRequest.CertificateBundleType;
}

export namespace GetCertificateBundleRequest {
  export enum Stage {
    Current = "CURRENT",
    Pending = "PENDING",
    Latest = "LATEST",
    Previous = "PREVIOUS",
    Deprecated = "DEPRECATED"
  }

  export enum CertificateBundleType {
    CertificateContentPublicOnly = "CERTIFICATE_CONTENT_PUBLIC_ONLY",
    CertificateContentWithPrivateKey = "CERTIFICATE_CONTENT_WITH_PRIVATE_KEY"
  }
}