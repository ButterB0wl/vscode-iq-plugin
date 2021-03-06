/*
 * Copyright (c) 2019-present Sonatype, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { 
  useContext } from 'react';
import LicensingDisplay from './LicensingDisplay/LicensingDisplay';
import { 
  VersionsContext, 
  VersionsContextInterface } from '../../../../context/versions-context';
import { 
  NxTable, 
  NxTableHead, 
  NxTableRow, 
  NxTableCell, 
  NxTableBody } 
  from '@sonatype/react-shared-components';

const LicensingPage = () => {

  const versionsContext = useContext(VersionsContext);

  const renderLicensePage = (versionsContext: VersionsContextInterface | undefined) => {
    if (versionsContext && versionsContext.selectedVersionDetails) {
      return <React.Fragment>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell colSpan={2}>
                Declared Licenses
              </NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            { versionsContext.selectedVersionDetails.licenseData.declaredLicenses.map(function(license: any) {
              return <LicensingDisplay licenseData={license} />
            })}
          </NxTableBody>
        </NxTable>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell colSpan={2}>
                Observed Licenses
              </NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            { versionsContext.selectedVersionDetails.licenseData.observedLicenses.map(function(license: any) {
              return <LicensingDisplay licenseData={license} />
            })}
          </NxTableBody>
        </NxTable>
      </React.Fragment>
    }
    return null;
  }

  return (
    renderLicensePage(versionsContext)
  )
}

export default LicensingPage;
